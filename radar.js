export function draw(v) {
    // Initialize the echarts instance based on the prepared dom
    var Chart = echarts.init(document.getElementById('main3'));

    var values = v;

    var option = {
      //backgroundColor: '#161627',
      title: {
        //text: 'Basic Radar Chart'
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        left: '25%', 
        data: ['Personal rating of the various skills']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'InfoViz', max: 10 },
          { name: 'Statistics', max: 10 },
          { name: 'Math', max: 10 },
          { name: 'Art', max: 10 },
          { name: 'Computer', max: 10 },
          { name: 'Code', max: 10 },
          { name: 'Computer', max: 10 },
          { name: 'CG Code', max: 10 },
          { name: 'UX', max: 10 },
          { name: 'Communication', max: 10 },
          { name: 'Collaboration', max: 10 },
          { name: 'Repositories', max: 10 },
        ],
        center: ['46%', '50%']
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
}
