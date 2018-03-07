const stateData = document.getElementById("state-data");
const svgObject = document.getElementById("map-compare");
svgObject.addEventListener("click", showStats);

function showStats(event) {
  let id = parseInt(event.target.id);

  fetch("./js/info.json")
    .then(response => response.json())
    .then(response => {
      response.data.forEach(state => {
        if (state.id === id) {
          let name = document.getElementById("name");
          name.innerHTML = state.state;

          let image = document.getElementById("image");
          image.src = state.img;

          let owners = document.getElementById("gunOwners2");
          owners.innerHTML = state.gunOwnership;

          let deaths = document.getElementById("deaths2");
          deaths.innerHTML = state.gunDeath;

          let grade = document.getElementById("grade2");
          grade.innerHTML = state.gunGrade;

          let rank = document.getElementById("rank2");
          rank.innerHTML = state.gunGradePro;
        }
      });
    });
}
