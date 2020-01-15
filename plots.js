function buildPlot() {
 // d3.json("quito[0].json").then((data) => {
  // Grab values from the data json object to build the plots
  console.log(quito);

    var city_name = "Quito, Ecuador - 5 Day Forecast";

    console.log(city_name);
  
    var temp = [
    quito[0].list[0].main.temp,
    quito[0].list[1].main.temp,
    quito[0].list[2].main.temp,
    quito[0].list[3].main.temp,
    quito[0].list[4].main.temp,
    quito[0].list[5].main.temp,
    quito[0].list[6].main.temp,
    quito[0].list[7].main.temp,
    quito[0].list[8].main.temp,
    quito[0].list[9].main.temp,
    quito[0].list[10].main.temp,
    quito[0].list[11].main.temp,
    quito[0].list[12].main.temp,
    quito[0].list[13].main.temp,
    quito[0].list[14].main.temp,
    quito[0].list[15].main.temp,
    quito[0].list[16].main.temp,
    quito[0].list[17].main.temp,
    quito[0].list[18].main.temp,
    quito[0].list[19].main.temp,
    quito[0].list[20].main.temp,
    quito[0].list[21].main.temp,
    quito[0].list[22].main.temp,
    quito[0].list[23].main.temp,
    quito[0].list[24].main.temp,
    quito[0].list[25].main.temp,
    quito[0].list[26].main.temp,
    quito[0].list[27].main.temp,
    quito[0].list[28].main.temp,
    quito[0].list[29].main.temp,
    quito[0].list[30].main.temp,
    quito[0].list[31].main.temp,
    quito[0].list[32].main.temp,
    quito[0].list[33].main.temp,
    quito[0].list[34].main.temp,
    quito[0].list[35].main.temp,
    quito[0].list[36].main.temp,
    quito[0].list[37].main.temp,
    quito[0].list[38].main.temp,
    quito[0].list[39].main.temp
    ];

    var dates = [
      new Date(quito[0].list[0].dt_txt), 
      new Date(quito[0].list[1].dt_txt),
      new Date(quito[0].list[2].dt_txt),
      new Date(quito[0].list[3].dt_txt),
      new Date(quito[0].list[4].dt_txt), 
      new Date(quito[0].list[5].dt_txt),
      new Date(quito[0].list[6].dt_txt),
      new Date(quito[0].list[7].dt_txt),
      new Date(quito[0].list[8].dt_txt),
      new Date(quito[0].list[9].dt_txt), 
      new Date(quito[0].list[10].dt_txt),
      new Date(quito[0].list[11].dt_txt),
      new Date(quito[0].list[12].dt_txt),
      new Date(quito[0].list[13].dt_txt),
      new Date(quito[0].list[14].dt_txt), 
      new Date(quito[0].list[15].dt_txt),
      new Date(quito[0].list[16].dt_txt),
      new Date(quito[0].list[17].dt_txt),
      new Date(quito[0].list[18].dt_txt),
      new Date(quito[0].list[19].dt_txt), 
      new Date(quito[0].list[20].dt_txt),
      new Date(quito[0].list[21].dt_txt),
      new Date(quito[0].list[22].dt_txt),
      new Date(quito[0].list[23].dt_txt),
      new Date(quito[0].list[24].dt_txt), 
      new Date(quito[0].list[25].dt_txt),
      new Date(quito[0].list[26].dt_txt),
      new Date(quito[0].list[27].dt_txt),
      new Date(quito[0].list[28].dt_txt),
      new Date(quito[0].list[29].dt_txt), 
      new Date(quito[0].list[30].dt_txt),      
      new Date(quito[0].list[31].dt_txt),
      new Date(quito[0].list[32].dt_txt),
      new Date(quito[0].list[33].dt_txt),
      new Date(quito[0].list[34].dt_txt), 
      new Date(quito[0].list[35].dt_txt),
      new Date(quito[0].list[36].dt_txt),
      new Date(quito[0].list[37].dt_txt),
      new Date(quito[0].list[38].dt_txt),
      new Date(quito[0].list[39].dt_txt)
  ];

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: city_name,
      x: dates,
      y: temp,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${city_name} Temperature`,
      xaxis: {
        range: [quito[0].list[0].dt_txt, quito[0].list[39].dt_txt],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

    // Feels Like Graph

    var feels_like = [quito[0].list[0].main.feels_like,
      quito[0].list[1].main.feels_like,
      quito[0].list[2].main.feels_like,
      quito[0].list[3].main.feels_like,
      quito[0].list[4].main.feels_like,
  ];
  var feels_like = [
    quito[0].list[0].main.feels_like,
    quito[0].list[1].main.feels_like,
    quito[0].list[2].main.feels_like,
    quito[0].list[3].main.feels_like,
    quito[0].list[4].main.feels_like,
    quito[0].list[5].main.feels_like,
    quito[0].list[6].main.feels_like,
    quito[0].list[7].main.feels_like,
    quito[0].list[8].main.feels_like,
    quito[0].list[9].main.feels_like,
    quito[0].list[10].main.feels_like,
    quito[0].list[11].main.feels_like,
    quito[0].list[12].main.feels_like,
    quito[0].list[13].main.feels_like,
    quito[0].list[14].main.feels_like,
    quito[0].list[15].main.feels_like,
    quito[0].list[16].main.feels_like,
    quito[0].list[17].main.feels_like,
    quito[0].list[18].main.feels_like,
    quito[0].list[19].main.feels_like,
    quito[0].list[20].main.feels_like,
    quito[0].list[21].main.feels_like,
    quito[0].list[22].main.feels_like,
    quito[0].list[23].main.feels_like,
    quito[0].list[24].main.feels_like,
    quito[0].list[25].main.feels_like,
    quito[0].list[26].main.feels_like,
    quito[0].list[27].main.feels_like,
    quito[0].list[28].main.feels_like,
    quito[0].list[29].main.feels_like,
    quito[0].list[30].main.feels_like,
    quito[0].list[31].main.feels_like,
    quito[0].list[32].main.feels_like,
    quito[0].list[33].main.feels_like,
    quito[0].list[34].main.feels_like,
    quito[0].list[35].main.feels_like,
    quito[0].list[36].main.feels_like,
    quito[0].list[37].main.feels_like,
    quito[0].list[38].main.feels_like,
    quito[0].list[39].main.temp
    ];


    var feels_data = {
      type: "scatter",
      mode: "lines",
      name: city_name,
      x: dates,
      y: feels_like,
      line: {
        color: "#17BECF"
      }
    };

    var feels_data1 = [feels_data];

    var layout_feels = {
      title: `${city_name} Feels Like Temperature Forecast`,
      xaxis: {
        range: [quito[0].list[0].dt_txt, quito[0].list[39].dt_txt],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("feels_like", feels_data1, layout_feels);

//  Humidity

var humidity = [
  quito[0].list[0].main.humidity,
  quito[0].list[1].main.humidity,
  quito[0].list[2].main.humidity,
  quito[0].list[3].main.humidity,
  quito[0].list[4].main.humidity,
  quito[0].list[5].main.humidity,
  quito[0].list[6].main.humidity,
  quito[0].list[7].main.humidity,
  quito[0].list[8].main.humidity,
  quito[0].list[9].main.humidity,
  quito[0].list[10].main.humidity,
  quito[0].list[11].main.humidity,
  quito[0].list[12].main.humidity,
  quito[0].list[13].main.humidity,
  quito[0].list[14].main.humidity,
  quito[0].list[15].main.humidity,
  quito[0].list[16].main.humidity,
  quito[0].list[17].main.humidity,
  quito[0].list[18].main.humidity,
  quito[0].list[19].main.humidity,
  quito[0].list[20].main.humidity,
  quito[0].list[21].main.humidity,
  quito[0].list[22].main.humidity,
  quito[0].list[23].main.humidity,
  quito[0].list[24].main.humidity,
  quito[0].list[25].main.humidity,
  quito[0].list[26].main.humidity,
  quito[0].list[27].main.humidity,
  quito[0].list[28].main.humidity,
  quito[0].list[29].main.humidity,
  quito[0].list[30].main.humidity,
  quito[0].list[31].main.humidity,
  quito[0].list[32].main.humidity,
  quito[0].list[33].main.humidity,
  quito[0].list[34].main.humidity,
  quito[0].list[35].main.humidity,
  quito[0].list[36].main.humidity,
  quito[0].list[37].main.humidity,
  quito[0].list[38].main.humidity,
  quito[0].list[39].main.humidity
  ];


var humidity_data = {
type: "scatter",
mode: "lines",
name: city_name,
x: dates,
y: humidity,
line: {
  color: "#17BECF"
}
};

var humidity_data1 = [humidity_data];

var layout_humidity = {
title: `${city_name} Humidity (%)`,
xaxis: {
  range: [quito[0].list[0].dt_txt, quito[0].list[39].dt_txt],
  type: "date"
},
yaxis: {
  autorange: true,
  type: "linear"
}
};

Plotly.newPlot("humidity", humidity_data1, layout_humidity);

// Cloudiness

var clouds = [
  quito[0].list[0].clouds.all,
  quito[0].list[1].clouds.all,
  quito[0].list[2].clouds.all,
  quito[0].list[3].clouds.all,
  quito[0].list[4].clouds.all,
  quito[0].list[5].clouds.all,
  quito[0].list[6].clouds.all,
  quito[0].list[7].clouds.all,
  quito[0].list[8].clouds.all,
  quito[0].list[9].clouds.all,
  quito[0].list[10].clouds.all,
  quito[0].list[11].clouds.all,
  quito[0].list[12].clouds.all,
  quito[0].list[13].clouds.all,
  quito[0].list[14].clouds.all,
  quito[0].list[15].clouds.all,
  quito[0].list[16].clouds.all,
  quito[0].list[17].clouds.all,
  quito[0].list[18].clouds.all,
  quito[0].list[19].clouds.all,
  quito[0].list[20].clouds.all,
  quito[0].list[21].clouds.all,
  quito[0].list[22].clouds.all,
  quito[0].list[23].clouds.all,
  quito[0].list[24].clouds.all,
  quito[0].list[25].clouds.all,
  quito[0].list[26].clouds.all,
  quito[0].list[27].clouds.all,
  quito[0].list[28].clouds.all,
  quito[0].list[29].clouds.all,
  quito[0].list[30].clouds.all,
  quito[0].list[31].clouds.all,
  quito[0].list[32].clouds.all,
  quito[0].list[33].clouds.all,
  quito[0].list[34].clouds.all,
  quito[0].list[35].clouds.all,
  quito[0].list[36].clouds.all,
  quito[0].list[37].clouds.all,
  quito[0].list[38].clouds.all,
  quito[0].list[39].clouds.all
  ];
  
  var clouds_data = {
  type: "scatter",
  mode: "lines",
  name: city_name,
  x: dates,
  y: clouds,
  line: {
    color: "#17BECF"
  }
  };
  
  var clouds_data1 = [clouds_data];
  
  var layout_clouds = {
  title: `${city_name} Cloudiness (%)`,
  xaxis: {
    range: [quito[0].list[0].dt_txt, quito[0].list[39].dt_txt],
    type: "date"
  },
  yaxis: {
    autorange: true,
    type: "linear"
  }
  };
  
  Plotly.newPlot("cloudiness", clouds_data1, layout_clouds);

//  });
}

buildPlot();
