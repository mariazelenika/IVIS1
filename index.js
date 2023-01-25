d3.csv(
  "https://raw.githubusercontent.com/vsigno/publicResources/main/CityData_WUP2018_top20.csv", d3.autotype).then(function (CityData) {
    //initialise Echarts in the Div id=main
    var myChartEchart = echarts.init(document.getElementById("main"), {
      width: 1000,
      height: 450
    }); //height is used to avoid cut the text on the Xaxis

    /* An example of 'option' as variable
     //https://echarts.apache.org/en/option.html#series-bar.label
             var labelOption = { 
             show: true,
             position: 'inside',
             rotate: 90,
             align: 'left',
             verticalAlign: 'middle',
             fontSize: 12,
             formatter: '{@pop1950} millions',
                 };*/

    // All the settings of the chart are provided in this variable
    var option = {
      title: {
        //ref https://echarts.apache.org/en/option.html#title
        text: "Chart...",
        textStyle: {
          color: "blue",
          fontSize: 22,
          fontWeight: "bold"
        },
        subtext: "Subtext",
        subtextStyle: {
          color: "coral",
          fontWeight: "bold"
        }
      },

      xAxis: {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 30, //If the label names are too long you can manage this by rotating the label.
          fontSize: 9
        }
      },

      yAxis: {
        type: "value",
        name: "Population 2020 (millions)",
        nameLocation: "center",
        nameGap: 30,
        nameTextStyle: {
          align: "center"
        },
        splitNumber: 10
      },

      tooltip: {
        show: true
      },

      legend: {
        data: ["CityName"]
      },

      dataset: [
        // ref https://echarts.apache.org/en/option.html#dataset
        {
          source: CityData
        }
      ],
      series: [
        {
          // ref https://echarts.apache.org/en/option.html#series-bar.type
          type: "bar",
          showBackground: true,
          itemStyle: {
            color: "#ffcf7d",
            borderColor: "#ffac1f",
            borderWidth: 1.5,
            borderType: "dashed"
          },
          barWidth: "70%",
          //label: labelOption, //option can be coded in external variable, see above. ref https://echarts.apache.org/en/option.html#series-bar.label
          label: {
            show: true,
            position: "inside",
            rotate: 90,
            align: "left",
            verticalAlign: "middle",
            fontSize: 12,
            //formatter: '{@pop2035} millions', //pop value as strin
            formatter: function (params) {
              var pop2035_float = parseFloat(params.data.pop2035);

              return pop2035_float.toFixed(2) + ` millions`;
            }
          },
          encode: {
            x: "CityName",
            y: ["pop2035", "pop1950"],
            tooltip: ["pop2035", "pop1950"]
          },

          tooltip: {
            formatter: function (params) {
              //as pop values are strings, we parsed them to Float to better control the number of decimal places
              var pop1950_float = parseFloat(params.data.pop1950);
              var pop2035_float = parseFloat(params.data.pop2035);

              return (
                `${params.name}<br />
                                  Population 1950 :  ` +
                pop1950_float.toFixed(2) +
                ` millions <br />
                                  Population 2035 :  ` +
                pop2035_float.toFixed(2) +
                ` millions`
              );

              //Uncomment the following return -and comment the previous one- to use pop values as strings in the TOOLTIP
              /*
                            return `${params.name}<br />
                                      Population 1950: ${params.data.pop1950} millions <br />
                                      Population 2035: ${params.data.pop2035} millions`;
                            */
            }
          },
          animationDuration: 2000,
          animationEasing: "elasticOut" //https://echarts.apache.org/examples/en/editor.html?c=line-easing
        }
      ]
    };

    // All the above is applied to the chart
    myChartEchart.setOption(option);
  }
);
