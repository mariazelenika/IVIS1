// Initialize the echarts instance based on the prepared dom
var Chart = echarts.init(document.getElementById('main2'));

var values = [4, 4, 5, 7, 7, 4, 5, 5, 6, 8, 7, 5];

option = {
  title: {
    //text: 'Basic Radar Chart'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Personal rating of the various skills', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'InfoViz', max: 10 },
      { name: 'Stats', max: 10 },
      { name: 'Math', max: 10 },
      { name: 'Art', max: 10 },
      { name: 'Computer', max: 10 },
      { name: 'Code', max: 10 },
      { name: 'Computer', max: 10 },
      { name: 'CG Code', max: 10 },
      { name: 'UX', max: 10 },
      { name: 'Communication', max: 10 },
      { name: 'Collaboration', max: 10 },
      { name: 'Repository', max: 10 },
    ]
  },
  series: [
    {
      name: 'Personal rating of the various skills',
      type: 'radar',
      data: [
        {
          value: values,
          name: 'Skills',
          areaStyle: {
            color: 'rgba(84,112,198, 0.8)',
          },
          label: {
            show: true
          }
        }
      ]
    }
  ]
};

// Display the chart using the configuration items and data just specified.
Chart.setOption(option);
