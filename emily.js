var map = L.map("map").setView([-43.001533, 147.651459], 10);
mapLink =
   '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; " + mapLink + " Contributors",
    maxZoom: 18,
  }).addTo(map);
let currentCircleId
let circlePos = 0

/* Initialize the SVG layer */
map._initPathRoot()

/* We simply pick up the SVG from the map object */
var svg = d3.select("#map").select("svg"),
g = svg.append("g");


d3.json("./circles.json", function(collection) {
  /* Add a LatLng object to each item in the dataset */
  collection.objects.forEach(function(d) {
    d.LatLng = new L.LatLng(d.circle.coordinates[0],
                d.circle.coordinates[1]);
  })

  var feature = g.selectAll("circle")
    .data(collection.objects)
    .enter().append("circle")
    .style("stroke", "black")
    .style("opacity", .6)
    .attr("r", 15)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);


  map.on("viewreset", update);
  update();

  function update() {
    feature.attr("transform",
      function(d) {
        return "translate("+
        map.latLngToLayerPoint(d.LatLng).x +","+
        map.latLngToLayerPoint(d.LatLng).y +")";
      }
    )
      .attr("fill", function(d) {
        return d.circle.color
      })
  }


  function handleMouseOver(d) {
    d3.select(this).attr({
      r: 30,
    })
  }

  function addResetBtn () {
    $aside = document.getElementById("storyCard")
    if (!document.getElementById("resetBtn")) {
      var resetBtn = document.createElement("button")
      var t = document.createTextNode("Reset Map")
      resetBtn.setAttribute("id", "resetBtn")
      resetBtn.appendChild(t);
      resetBtn.addEventListener("click", resetMap);
      document.getElementById("storyCard").appendChild(resetBtn)
    }
  }

  function resetMap () {
    map.setView([-43.141533, 147.651459], 10)
  }

  function handleMouseOut(d, i) {
    d3.select(this).attr({
      r: 20
    });
  }
})

//////////

var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 960 - margin.left - margin.right,
    height = 100 - margin.bottom - margin.top;

var svg1 = d3.select("#slider3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .domain([0, 11])
    .range([0, width])
    .clamp(true);

var brush = d3.svg.brush()
    .x(x)
    .extent([0, 0])
    .on("brush", brushed)
    .on("brushend", brushend);

svg1.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(function(d) { return d})
      .tickSize(1)
      .tickPadding(10))
  .select(".domain")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

var slider = svg1.append("g")
    .attr("class", "slider")
    .call(brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("r", 9);

slider
    .call(brush.event)
  .transition() // gratuitous intro!
    .duration(750)
    // .call(brush.extent([70, 70]))
    .call(brush.event);

function brushed() {
  var value = brush.extent()[0];

  if (d3.event.sourceEvent) { // not a programmatic event
    value = x.invert(d3.mouse(this)[0]);
    brush.extent([value, value]);
  }

  handle.attr("cx", x(value));
  // d3.select("body").style("background-color", d3.hsl(value, .8, .8));
}

function brushend() {
   if (!d3.event.sourceEvent) {
     return; // only transition after input
   }

   var value = brush.extent()[0];
   brush.extent([value, value]);

   d3.select(this)
     .transition()
     .duration(0)
     .call(brush.event);

   d3.select(this)
     .transition()
     .call(brush.extent(brush.extent().map(function(d) { circlePos = d3.round(d); console.log('circlePos', circlePos); handleBrushing(circlePos); return d3.round(d); })))
     .call(brush.event);
 }

function handleBrushing(sliderPosition) {
  d3.json("./circles.json", function(collection) {
    collection.objects.forEach(function(d) {
      if (d.circle.id === sliderPosition) {
        document.getElementById("storyTitle").innerHTML = d.circle.title
        document.getElementById("storyDescription").innerHTML = d.circle.description
        document.getElementById("storyImage1").src = d.circle.image1
        document.getElementById("storyImage2").src = d.circle.image2
        document.getElementsByTagName("circle")[0].style.fill = d.circle.color
        map.setView(d.circle.coordinates, d.circle.zoom)
      }
    })
    currentCircleId = sliderPosition
  })
}

function addBtn () {
  $aside = document.getElementById("storyCard")
  if (!document.getElementById("nextBtn")) {
    var btn = document.createElement("button")
    var t = document.createTextNode("Next")
    btn.setAttribute("id", "nextBtn")
    btn.appendChild(t);
    btn.addEventListener("click", moveToNext);
    document.getElementById("storyCard").appendChild(btn)
  }
}

function moveToNext () {
  console.log("currentCircleId", currentCircleId)
  d3.json("./circles.json", function(collection) {
    collection.objects.forEach(function(d) {
      if (d.circle.id === currentCircleId + 1) {
        map.setView(d.circle.coordinates, d.circle.zoom)
        document.getElementById("storyTitle").innerHTML = d.circle.title
        document.getElementById("storyDescription").innerHTML = d.circle.description
        document.getElementById("storyImage1").src = d.circle.image1
        document.getElementById("storyImage2").src = d.circle.image2
      }
    })
    currentCircleId++
  })
  // map.setView(d.circle.coordinates, d.circle.zoom)

}
