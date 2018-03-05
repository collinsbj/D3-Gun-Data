const stateDataObj = [
  {
    id: 1,
    state: "Alabama",
    img: "./states/1.png",
    gunOwnership: "48.9%",
    gunDeath: "21.51",
    gunGrade: "F",
    gunGradePro: "18/50"
  },
  {
    id: 2,
    state: "Alaska",
    img: "./states/2.png",
    gunOwnership: "61.7%",
    gunDeath: "23.86",
    gunGrade: "F",
    gunGradePro: "2/50"
  },
  {
    id: 3,
    state: "Arizona",
    img: "./states/3.png",
    gunOwnership: "32.3%",
    gunDeath: "15.78",
    gunGrade: "F",
    gunGradePro: "1/50"
  },
  {
    id: 4,
    state: "Arkansas",
    img: "./states/4.png",
    gunOwnership: "57.9%",
    gunDeath: "18.1",
    gunGrade: "F",
    gunGradePro: "22/50"
  },
  {
    id: 5,
    state: "California",
    img: "./states/5.png",
    gunOwnership: "20.1%",
    gunDeath: "8.11",
    gunGrade: "A",
    gunGradePro: "46/50"
  },
  {
    id: 6,
    state: "Colorado",
    img: "./states/6.png",
    gunOwnership: "34.2%",
    gunDeath: "14.66",
    gunGrade: "C",
    gunGradePro: "39/50"
  },
  {
    id: 7,
    state: "Conneticut",
    img: "./states/7.png",
    gunOwnership: "16.6%",
    gunDeath: "4.81",
    gunGrade: "A-",
    gunGradePro: "45/50"
  },
  {
    id: 8,
    state: "Delaware",
    img: "./states/8.png",
    gunOwnership: "5.2%",
    gunDeath: "11.66",
    gunGrade: "B",
    gunGradePro: "42/50"
  },
  {
    id: 9,
    state: "Florida",
    img: "./states/9.png",
    gunOwnership: "32.5%",
    gunDeath: "13.12",
    gunGrade: "F",
    gunGradePro: "12/50"
  },
  {
    id: 10,
    state: "Georgia",
    img: "./states/10.png",
    gunOwnership: "31.6%",
    gunDeath: "15.24",
    gunGrade: "F",
    gunGradePro: "9/50"
  },
  {
    id: 11,
    state: "Hawaii",
    img: "./states/11.png",
    gunOwnership: "45.1%",
    gunDeath: "4.62",
    gunGrade: "A-",
    gunGradePro: "47/50"
  },
  {
    id: 12,
    state: "Idaho",
    img: "./states/12.png",
    gunOwnership: "56.9%",
    gunDeath: "14.38",
    gunGrade: "F",
    gunGradePro: "19/50"
  },
  {
    id: 13,
    state: "Illinois",
    img: "./states/13.png",
    gunOwnership: "26.2%",
    gunDeath: "11.64",
    gunGrade: "B+",
    gunGradePro: "40/50"
  },
  {
    id: 14,
    state: "Indiana",
    img: "./states/14.jpg",
    gunOwnership: "33.8%",
    gunDeath: "15.03",
    gunGrade: "D-",
    gunGradePro: "21/50"
  },
  {
    id: 15,
    state: "Iowa",
    img: "./states/15.jpg",
    gunOwnership: "33.8%",
    gunDeath: "9.19",
    gunGrade: "C-",
    gunGradePro: "36/50"
  },
  {
    id: 16,
    state: "Kansas",
    img: "./states/16.png",
    gunOwnership: "32.2%",
    gunDeath: "13.17",
    gunGrade: "F",
    gunGradePro: "3/50"
  },
  {
    id: 17,
    state: "Kentucky",
    img: "./states/17.png",
    gunOwnership: "42.4%",
    gunDeath: "17.4",
    gunGrade: "F",
    gunGradePro: "14/50"
  },
  {
    id: 18,
    state: "Louisiana",
    img: "./states/18.png",
    gunOwnership: "44.5%",
    gunDeath: "21.08",
    gunGrade: "F",
    gunGradePro: "28/50"
  },
  {
    id: 19,
    state: "Maine",
    img: "./states/19.png",
    gunOwnership: "22.6%",
    gunDeath: "9.24",
    gunGrade: "F",
    gunGradePro: "30/50"
  },
  {
    id: 20,
    state: "Maryland",
    img: "./states/20.png",
    gunOwnership: "20.7%",
    gunDeath: "11.75",
    gunGrade: "A-",
    gunGradePro: "44/50"
  },
  {
    id: 21,
    state: "Massachusetts",
    img: "./states/21.png",
    gunOwnership: "22.6%",
    gunDeath: "3.55",
    gunGrade: "A-",
    gunGradePro: "49/50"
  },
  {
    id: 22,
    state: "Michigan",
    img: "./states/22.png",
    gunOwnership: "28.8%",
    gunDeath: "12.39",
    gunGrade: "C",
    gunGradePro: "27/50"
  },
  {
    id: 23,
    state: "Minnesota",
    img: "./states/23.png",
    gunOwnership: "36.7%",
    gunDeath: "7.83",
    gunGrade: "C+",
    gunGradePro: "41/50"
  },
  {
    id: 24,
    state: "Mississippi",
    img: "./states/24.png",
    gunOwnership: "42.8%",
    gunDeath: "19.64",
    gunGrade: "F",
    gunGradePro: "16/50"
  },
  {
    id: 25,
    state: "Missouri",
    img: "./states/25.png",
    gunOwnership: "27.1%",
    gunDeath: "18.78",
    gunGrade: "F",
    gunGradePro: "10/50"
  },
  {
    id: 26,
    state: "Montana",
    img: "./states/26.png",
    gunOwnership: "52.3%",
    gunDeath: "18.61",
    gunGrade: "F",
    gunGradePro: "5/50"
  },
  {
    id: 27,
    state: "Nebraska",
    img: "./states/27.png",
    gunOwnership: "19.8%",
    gunDeath: "8.97",
    gunGrade: "D-",
    gunGradePro: "35/50"
  },
  {
    id: 28,
    state: "Nevada",
    img: "./states/28.jpg",
    gunOwnership: "37.5%",
    gunDeath: "16.94",
    gunGrade: "D-",
    gunGradePro: "25/50"
  },
  {
    id: 29,
    state: "New Hampshire",
    img: "./states/29.png",
    gunOwnership: "14.4%",
    gunDeath: "9.89",
    gunGrade: "F",
    gunGradePro: "15/50"
  },
  {
    id: 30,
    state: "New Jersey",
    img: "./states/30.png",
    gunOwnership: "11.3%",
    gunDeath: "5.42",
    gunGrade: "A-",
    gunGradePro: "48/50"
  },
  {
    id: 31,
    state: "New Mexico",
    img: "./states/31.png",
    gunOwnership: "49.9%",
    gunDeath: "18.4",
    gunGrade: "F",
    gunGradePro: "37/50"
  },
  {
    id: 32,
    state: "New York",
    img: "./states/32.png",
    gunOwnership: "10.3%",
    gunDeath: "4.56",
    gunGrade: "A-",
    gunGradePro: "50/50"
  },
  {
    id: 33,
    state: "North Carolina",
    img: "./states/33.png",
    gunOwnership: "28.7%",
    gunDeath: "13.89",
    gunGrade: "D-",
    gunGradePro: "26/50"
  },
  {
    id: 34,
    state: "North Dakota",
    img: "./states/34.png",
    gunOwnership: "47.9%",
    gunDeath: "11.87",
    gunGrade: "F",
    gunGradePro: "7/50"
  },
  {
    id: 35,
    state: "Ohio",
    img: "./states/35.png",
    gunOwnership: "19.6%",
    gunDeath: "13.12",
    gunGrade: "D",
    gunGradePro: "29/50"
  },
  {
    id: 36,
    state: "Oklahoma",
    img: "./states/36.png",
    gunOwnership: "31.2%",
    gunDeath: "19.52",
    gunGrade: "F",
    gunGradePro: "4/50"
  },
  {
    id: 37,
    state: "Oregon",
    img: "./states/37.png",
    gunOwnership: "26.6%",
    gunDeath: "12.53",
    gunGrade: "C",
    gunGradePro: "34/50"
  },
  {
    id: 38,
    state: "Pennsylvania",
    img: "./states/38.png",
    gunOwnership: "27.1%",
    gunDeath: "12.16",
    gunGrade: "C",
    gunGradePro: "33/50"
  },
  {
    id: 39,
    state: "Rhode Island",
    img: "./states/39.png",
    gunOwnership: "5.8%",
    gunDeath: "4.64",
    gunGrade: "B+",
    gunGradePro: "43/50"
  },
  {
    id: 40,
    state: "South Carolina",
    img: "./states/40.png",
    gunOwnership: "44.4%",
    gunDeath: "17.96",
    gunGrade: "F",
    gunGradePro: "24/50"
  },
  {
    id: 41,
    state: "South Dakota",
    img: "./states/41.png",
    gunOwnership: "35%",
    gunDeath: "12.48",
    gunGrade: "F",
    gunGradePro: "32/50"
  },
  {
    id: 42,
    state: "Tennessee",
    img: "./states/42.png",
    gunOwnership: "39.4%",
    gunDeath: "17.26",
    gunGrade: "D-",
    gunGradePro: "11/50"
  },
  {
    id: 43,
    state: "Texas",
    img: "./states/43.png",
    gunOwnership: "35.7%",
    gunDeath: "12.03",
    gunGrade: "F",
    gunGradePro: "8/50"
  },
  {
    id: 44,
    state: "Utah",
    img: "./states/44.png",
    gunOwnership: "31.9%",
    gunDeath: "12.13",
    gunGrade: "F",
    gunGradePro: "6/50"
  },
  {
    id: 45,
    state: "Vermont",
    img: "./states/45.png",
    gunOwnership: "28.8%",
    gunDeath: "12.49",
    gunGrade: "F",
    gunGradePro: "20/50"
  },
  {
    id: 46,
    state: "Virginia",
    img: "./states/46.png",
    gunOwnership: "29.3%",
    gunDeath: "12.47",
    gunGrade: "D",
    gunGradePro: "31/50"
  },
  {
    id: 47,
    state: "Washington",
    img: "./states/47.png",
    gunOwnership: "27.7%",
    gunDeath: "9.41",
    gunGrade: "B",
    gunGradePro: "38/50"
  },
  {
    id: 48,
    state: "West Virgina",
    img: "./states/48.png",
    gunOwnership: "54.2%",
    gunDeath: "18.13",
    gunGrade: "F",
    gunGradePro: "13/50"
  },
  {
    id: 49,
    state: "Wisconsin",
    img: "./states/49.png",
    gunOwnership: "34.7%",
    gunDeath: "11.49",
    gunGrade: "C-",
    gunGradePro: "23/50"
  },
  {
    id: 50,
    state: "Wyoming",
    img: "./states/50.png",
    gunOwnership: "53.8%",
    gunDeath: "17.25",
    gunGrade: "F",
    gunGradePro: "17/50"
  }
]

const stateData = document.getElementById('state-data')

const svgObject = document.getElementById('map');
svgObject.addEventListener("click", showStats);

function showStats(event) {
  let id = parseInt(event.path[0].id)


  stateDataObj.forEach(state => {

    if(state.id === id) {
      let name = document.getElementById('name');
      name.innerHTML = state.state;

      let image = document.getElementById('image');
      image.src = state.img;

      let owners = document.getElementById('gunOwners');
      owners.innerHTML = `Gun Ownership(% of total population): ${state.gunOwnership}`;

      let deaths = document.getElementById('deaths');
      deaths.innerHTML = `Gun Death Rates(per 100,000): ${state.gunDeath}`;

      let grade = document.getElementById('grade');
      grade.innerHTML = `Giffords Law Center Gun Grade: ${state.gunGrade}`;

      let rank = document.getElementById('rank');
      rank.innerHTML = `Guns & Ammo State Rank: ${state.gunGradePro}`;
    }
  })
}
