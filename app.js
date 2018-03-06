//BJ's Chart

console.log("second", d3);

var chart = c3.generate({
  bindto: "#chart",
  data: {
    xs: {
      "Gun Deaths per 100 population - Australia": "x1",
      "Proportion of Households with Firearms - Australia": "x2",
      "Gun Deaths per 100 population - USA": "x3",
      "Proportion of Households with Firearms - USA": "x4"
    },
    columns: [
      [
        "x1",
        1986,
        1987,
        1988,
        1989,
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015
      ],
      ["x2", 1979, 1988, 1989, 1992, 1994, 2000, 2003, 2005],
      [
        "x3",
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014
      ],
      [
        "x4",
        1980,
        1982,
        1984,
        1985,
        1987,
        1988,
        1989,
        1990,
        1991,
        1993,
        1994,
        1996,
        1998,
        2000,
        2002,
        2004,
        2006,
        2008,
        2010,
        2012,
        2014
      ],
      [
        "Gun Deaths per 100 population - Australia",
        4.26,
        4.3,
        4.11,
        3.29,
        3.51,
        3.59,
        3.49,
        2.91,
        2.9,
        2.61,
        2.84,
        2.32,
        1.68,
        1.84,
        1.7,
        1.69,
        1.49,
        1.46,
        1.21,
        1.09,
        1.18,
        1.11,
        1.1,
        1.06,
        1.08,
        0.86,
        1.03,
        0.93,
        1.02,
        0.93
      ],
      [
        "Proportion of Households with Firearms - Australia",
        20,
        25,
        20.1,
        15.1,
        16.0,
        8.0,
        8.7,
        6.2
      ],
      [
        "Gun Deaths per 100 population - USA",
        10.35,
        10.19,
        10.38,
        10.51,
        10.39,
        10.1,
        10.39,
        10.35,
        10.37,
        10.39,
        10.22,
        10.26,
        10.38,
        10.69,
        10.63,
        10.54
      ],
      [
        "Proportion of Households with Firearms - USA",
        28.1,
        28.2,
        25.3,
        30.5,
        28.0,
        24.9,
        27.1,
        28.5,
        27.0,
        29.3,
        28.2,
        27.1,
        22.4,
        22.3,
        26.3,
        25.2,
        21.6,
        23.5,
        20.6,
        21.8,
        22.4
      ]
    ],
    axes: {
      "Gun Deaths per 100 population - Australia": "y",
      "Proportion of Households with Firearms - Australia": "y2",
      "Gun Deaths per 100 population - USA": "y",
      "Proportion of Households with Firearms - USA": "y2"
    }
  },
  axis: {
    y2: {
      show: true
    }
  }
});

document.querySelector("#gunDeaths").addEventListener("click", function() {
  chart.toggle(
    [
      "Gun Deaths per 100 population - Australia",
      "Gun Deaths per 100 population - USA"
    ],
    {
      withLegend: true
    }
  );
});

document.querySelector("#houseFirearms").addEventListener("click", function() {
  chart.toggle(
    [
      "Proportion of Households with Firearms - Australia",
      "Proportion of Households with Firearms - USA"
    ],
    {
      withLegend: true
    }
  );
});

document.querySelector("#us").addEventListener("click", function() {
  chart.toggle(
    [
      "Gun Deaths per 100 population - USA",
      "Proportion of Households with Firearms - USA"
    ],
    {
      withLegend: true
    }
  );
});

document.querySelector("#aus").addEventListener("click", function() {
  chart.toggle(
    [
      "Proportion of Households with Firearms - Australia",
      "Gun Deaths per 100 population - Australia"
    ],
    {
      withLegend: true
    }
  );
});

// End
