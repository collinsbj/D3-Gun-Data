//Select Listeners
const form = document.getElementById("form");

let sizeData;
let colorData;

form.addEventListener("submit", setData);

function setData(event) {
  event.preventDefault();
  let sizeSelect = event.target[0].value;

  switch (sizeSelect) {
    case "gunOwnership":
      sizeData = [
        0,
        0.7925445705,
        1,
        0.5235008104,
        0.9384116694,
        0.3257698541,
        0.5542949757,
        0.2690437601,
        0.08427876823,
        0.5267423015,
        0.5121555916,
        0.7309562399,
        0.9222042139,
        0.4246353323,
        0.5478119935,
        0.5478119935,
        0.5218800648,
        0.6871961102,
        0.7212317666,
        0.3662884927,
        0.3354943274,
        0.3662884927,
        0.4667747164,
        0.5948136143,
        0.6936790924,
        0.4392220421,
        0.847649919,
        0.3209076175,
        0.6077795786,
        0.2333873582,
        0.1831442464,
        0.8087520259,
        0.1669367909,
        0.4651539708,
        0.7763371151,
        0.3176661264,
        0.5056726094,
        0.4311183144,
        0.4392220421,
        0.09400324149,
        0.7196110211,
        0.56726094,
        0.6385737439,
        0.5786061588,
        0.5170178282,
        0.4667747164,
        0.4748784441,
        0.4489465154,
        0.8784440843,
        0.5623987034,
        0.8719611021
      ];
      break;
    case "deathRates":
      sizeData = [
        0,
        0.9015088013,
1,
0.6613579212,
0.7585917854,
0.3398994132,
0.614417435,
0.2015926236,
0.4886839899,
0.5498742666,
0.6387259011,
0.1936295054,
0.6026823135,
0.487845767,
0.6299245599,
0.3851634535,
0.551969824,
0.7292539816,
0.8834870075,
0.3872590109,
0.4924559933,
0.1487845767,
0.5192791282,
0.3281642917,
0.8231349539,
0.7870913663,
0.7799664711,
0.3759430008,
0.7099748533,
0.4145012573,
0.2271584241,
0.7711651299,
0.1911148365,
0.5821458508,
0.4974853311,
0.5498742666,
0.8181056161,
0.525146689,
0.5096395641,
0.1944677284,
0.7527242246,
0.5230511316,
0.7233864208,
0.5041911148,
0.5083822297,
0.5234702431,
0.5226320201,
0.3943839061,
0.7598491199,
0.4815590947,
0.7229673093
      ];
      break;
    case "gunLaw":
      sizeData = [
        0,
        0.7,
        0.6,
        0.6,
        0.7,
        1,
        0.8,
        1,
        0.9,
        0.7,
        0.6,
        1,
        0.7,
        0.9,
        0.8,
        0.8,
        0.6,
        0.7,
        0.7,
        0.7,
        1,
        1,
        0.8,
        0.8,
        0.7,
        0.6,
        0.6,
        0.8,
        0.8,
        0.7,
        1,
        0.7,
        1,
        0.8,
        0.6,
        0.8,
        0.6,
        0.8,
        0.8,
        0.9,
        0.7,
        0.7,
        0.7,
        0.6,
        0.6,
        0.7,
        0.8,
        0.9,
        0.7,
        0.8,
        0.7
      ];
      break;
    default:
      break;
  }

  let colorSelect = event.target[1].value;

  switch (colorSelect) {
    case "gunOwnershipAverage":
      colorData = [
        0,
        1.680412371,
        2.120274914,
        1.109965636,
        1.989690722,
        0.6907216495,
        1.175257732,
        0.5704467354,
        0.1786941581,
        1.116838488,
        1.085910653,
        1.549828179,
        1.95532646,
        0.9003436426,
        1.161512027,
        1.161512027,
        1.10652921,
        1.457044674,
        1.529209622,
        0.7766323024,
        0.7113402062,
        0.7766323024,
        0.9896907216,
        1.261168385,
        1.470790378,
        0.9312714777,
        1.797250859,
        0.6804123711,
        1.288659794,
        0.4948453608,
        0.3883161512,
        1.714776632,
        0.35395189,
        0.9862542955,
        1.64604811,
        0.6735395189,
        1.072164948,
        0.9140893471,
        0.9312714777,
        0.1993127148,
        1.525773196,
        1.202749141,
        1.35395189,
        1.226804124,
        1.096219931,
        0.9896907216,
        1.006872852,
        0.9518900344,
        1.862542955,
        1.192439863,
        1.848797251
      ];
      break;
    case "deathRatesAverage":
      colorData = [
        0,
        1.798494983,
1.994983278,
1.319397993,
1.513377926,
0.6780936455,
1.225752508,
0.402173913,
0.974916388,
1.096989967,
1.274247492,
0.3862876254,
1.202341137,
0.9732441472,
1.256688963,
0.7683946488,
1.101170569,
1.454849498,
1.762541806,
0.7725752508,
0.9824414716,
0.2968227425,
1.035953177,
0.6546822742,
1.642140468,
1.570234114,
1.556020067,
0.75,
1.41638796,
0.8269230769,
0.4531772575,
1.538461538,
0.381270903,
1.161371237,
0.9924749164,
1.096989967,
1.632107023,
1.047658863,
1.016722408,
0.3879598662,
1.501672241,
1.043478261,
1.443143813,
1.005852843,
1.014214047,
1.044314381,
1.04264214,
0.7867892977,
1.515886288,
0.9607023411,
1.442307692
      ];
      break;
    case "gunLawAverage":
      colorData = [
        0,
        0.7,
        0.5,
        1.8,
        0.7,
        1.8,
        1,
        1.8,
        1.5,
        0.7,
        0.5,
        1.8,
        0.7,
        1.5,
        1,
        1,
        0.5,
        0.7,
        0.7,
        0.7,
        1.8,
        1.8,
        1,
        1,
        0.7,
        0.5,
        0.5,
        1,
        1,
        0.7,
        1.8,
        0.7,
        1.8,
        1,
        0.5,
        1,
        0.5,
        1,
        1,
        1.5,
        0.7,
        0.7,
        0.7,
        0.5,
        0.5,
        0.7,
        1,
        1.5,
        0.7,
        1,
        0.7
      ];
      break;
    default:
      break;
  }

  drawData(sizeData, colorData)

  // let states = document.querySelectorAll(".state");

  // if(states.length > 0) {
  //   for (var i = 0; i < states.length; i++) {
  //     states[i].setAttribute("d" , "")
  //   }
  //   drawData(sizeData, colorData)
  // } else {
  //   drawData(sizeData, colorData)
  // }
}

//Create SVG
const svg = d3.select("svg");
const path = d3.geoPath();
let geoData= null;

function getData() {
  if(geoData) return geoData;

  geoData = new Promise((resolve, reject) => {
    d3.json("./us/10m.json", function(err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })

  return geoData;
}


function drawOutlines(data) {
  svg
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

  svg
    .append("path")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 0.5)
    .attr("fill", "transparent")
    .attr("d", path(topojson.feature(data, data.objects.nation)));
}

getData()
  .then(drawOutlines);


function drawData(size, color) {
    getData().then(data => {

      let states = document.querySelectorAll(".state");

      if(states.length > 0) {
        svg
          .selectAll(".state")
          .remove("path")
      }

      svg
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
            "translate(" + x + "," + y +")"
            + "scale(" + Math.sqrt(size[d.id]) +")"
            + "translate(" + -x + "," + -y + ")"
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
        })
    })
}
