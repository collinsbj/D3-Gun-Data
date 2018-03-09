c3.generate({
  bindto: "#chart",
  data: {
    xs: {
      "Gun Deaths - Australia": "x1",
      "Households with Firearms - Australia": "x2",
      "Gun Deaths - USA": "x3",
      "Households with Firearms - USA": "x4"
    },
    columns: [
      [
        "x1",
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
      ["x2", 1994, 2000, 2003, 2005],
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
      ["x4", 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014],
      [
        "Gun Deaths - Australia",
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
      ["Households with Firearms - Australia", 16.0, 8.0, 8.7, 6.2],
      [
        "Gun Deaths - USA",
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
        "Households with Firearms - USA",
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
      "Gun Deaths - Australia": "y",
      "Households with Firearms - Australia": "y2",
      "Gun Deaths - USA": "y",
      "Households with Firearms - USA": "y2"
    }
  },
  point: {
    select: {
      r: 3
    }
  },
  size: {
    height: 480
  },
  axis: {
    y: {
      max: 11,
      min: 1,
      label: {
        text: "Gun Deaths/100 Population",
        position: "outer-middle"
      }
    },
    y2: {
      max: 30,
      min: 1,
      show: true,
      label: {
        text: "% of Households w/ Firearms",
        position: "outer-middle"
      }
    }
  }
});

d3.select("#chart svg").attr("viewBox", "0 0 367 480").attr("preserveAspectRatio", "xMinYMin")
