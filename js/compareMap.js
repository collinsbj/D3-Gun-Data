//Select Listeners
const form = document.getElementById("form");

let sizeData;
let colorData;

form.addEventListener("submit", setData);

function setData(event) {
  event.preventDefault();
  let sizeSelect = event.target[0].value;
  let colorSelect = event.target[1].value;

  fetch('./js/map.json')
    .then(response=> response.json())
    .then(response=> {

      switch (sizeSelect) {
        case "gunOwnership":
          sizeData = response.data.gunOwnership;
          break;
        case "deathRates":
          sizeData = response.data.deathRates;
          break;
        case "gunLaw":
          sizeData = response.data.gunLaw;
          break;
        default:
          break;
      }

      switch (colorSelect) {
        case "gunOwnershipAverage":
          colorData = response.data.gunOwnershipAverage;
          break;
        case "deathRatesAverage":
          colorData = response.data.deathRatesAverage;
          break;
        case "gunLawAverage":
          colorData = response.data.gunLawAverage;
          break;
        default:
          break;
      }
      drawData(sizeData, colorData);
    });
}

//Create SVG
const svgMap = d3.select("#map-compare");
const path = d3.geoPath();
let geoData = null;

function getData() {
  if (geoData) return geoData;

  geoData = new Promise((resolve, reject) => {
    d3.json("./us/10m.json", function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });

  return geoData;
}

function drawOutlines(data) {
  svgMap
    .append("path")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 0.5)
    .attr("class", "state-borders")
    .attr("fill", "transparent")
    .attr(
      "d",
      path(
        topojson.mesh(data, data.objects.states, function(a, b) {
          return a !== b;
        })
      )
    );

  svgMap
    .append("path")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 0.5)
    .attr("fill", "transparent")
    .attr("d", path(topojson.feature(data, data.objects.nation)));
}

getData().then(drawOutlines);

function drawData(size, color) {
  getData().then(data => {
    let states = document.querySelectorAll(".state");

    if (states.length > 0) {
      svgMap.selectAll(".state").remove("path");
    }

    svgMap
      .selectAll(".state")
      .data(topojson.feature(data, data.objects.states).features)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", path)
      .attr("transform", function(d) {
        var centroid = path.centroid(d),
          x = centroid[0],
          y = centroid[1];
        return (
          "translate(" +
          x +
          "," +
          y +
          ")" +
          "scale(" +
          Math.sqrt(size[d.id]) +
          ")" +
          "translate(" +
          -x +
          "," +
          -y +
          ")"
        );
      })

      .style("stroke-width", function(d) {
        return 1 / Math.sqrt(size[d.id]);
      })
      .attr("id", function(d) {
        return d.id;
      })
      .attr("fill", function(d) {
        let rate = color[d.id];
        if (rate < 0.6) {
          return "#009933";
        } else if (rate > 0.6 && rate < 0.9) {
          return "#4CB824";
        } else if (rate > 0.9 && rate < 1.1) {
          return "#8CD117";
        } else if (rate > 1.1 && rate < 1.6) {
          return "#CCEB0A";
        } else if (rate > 1.6) {
          return "#FFFF00";
        }
      });
  });
}
