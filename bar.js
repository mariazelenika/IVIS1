// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main1'));

// Specify the configuration items and data for the chart
option = {
  title: {
          rich:{
                subtext: 'Bar Chart of the sum score of Skills for Student'
          },
          subtextStyle:{
                 textAlign: 'center',
                 textVerticalAlign: 'bottom'
          }          
  },
  dataset: {
    source: [
      ['sum', 'alias'],
      [67, 'Soup'],
      [75, 'vq'],
      [84, 'jjettas'],
      [45, 'SunnyStockholm'],
      [77, 'Yami'],
      [33, 'pringles'],
      [81, 'Oseram'],
      [60, 'Rizzlord'],
      [46, 'Koronesuki'],
      [64, 'Daybeha'],
      [92, 'Pasta'],
      [66, 'PogChamp'],
      [76, 'Ropianos'],
      [57, 'Horse123'],
      [80, 'Rebin'],
      [88, 'monoid'],
      [49, 'Ishi'],
      [56, 'xXVisWizXx'],
      [72, 'Aloy'],
      [67, 'Turb0clutcharen'],
      [57, 'kanelbullar13'],
      [49, 'Skvarre'],
      [72, 'Pål'],
      [63, 'Modi'],
      [54, 'Bluebell'],
      [80, 'Noggin_bops'],
      [80, 'Lumos'],
      [67, 'Santa86'],
      [53, 'mercury'],
      [40, 'DonkeyKong1'],
      [65, 'ardillito28'],
      [64, 'rabbit99'],
      [63, 'unpwu'],
      [78, 'PetrifiedDropbear69'],
      [72, 'ChaCharizard'],
      [67, 'HalfCrimp'],
      [77, 'coldfooter'],
      [49, 'Ramennoodle'],
      [78, 'Rufstufsan'],
      [88, 'C3I2'],
      [75, 'Bempis2'],
    ]
  },
  grid: { top: '5%',
        left: '6%',
        right: '5%',
        bottom: '0%',
        containLabel: true },
  tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'line'        
        }
    },
  xAxis: { name: 'sum' },
  yAxis: { name: 'alias', type: 'category', axisLabel: {
        interval: 0,
        silent: false
      }},
  series: [
    {
      name: 'sum',
      type: 'bar',
      encode: {
        // Map the "sum" column to X axis.
        x: 'sum',
        // Map the "alias" column to Y axis
        y: 'alias'
      },
      label: {
        // Options: 'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        position: 'right',
        distance: 10,
        show: true
      },
      barCategoryGap: '40%'
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);

myChart.on('click', 'yAxis.category', function (params) {
  // Make sure event from target axis
  if (params.componentType === 'yAxis' && params.yAxisIndex === 0) {
    // params.value is the axis label before formatted
    console.log(params.value);
  } 
});
