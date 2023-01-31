export function draw(values, max2, name) {   
    // Initialize the echarts instance based on the prepared dom
    var Chart = echarts.init(document.getElementById('main3'), null, {renderer: 'svg'});
	
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
        left: '12%', 
        data: ['Combined skills of the group**']
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
          { name: 'CG Code', max: 10 },
          { name: 'HCI Code', max: 10 },
          { name: 'UX', max: 10 },
          { name: 'Communication', max: 10 },
          { name: 'Collaboration', max: 10 },
          { name: 'Repositories', max: 10 },
        ],
        center: ['45%', '50%'],
		radius: 150,
      },
      series: [
        {
          name: 'Personal rating of the various skills2',
          type: 'radar',
          data: [   
            {
              value: max2,
              name: 'Combined skills of the group**',
	      areaStyle: {
                color: 'rgba(145,204,117, 0.8)',
              },
	      itemStyle:{
		color: 'rgba(145,204,117)',
	      },
	      label: {
		show: true,
	      }
            }
          ]
        }
      ]
    };
	
	if (name != null){
		option.series[0].data.unshift({
		      value: values,
		      name: `${name}'s personal rating of the various skills`,
		      areaStyle: {
			color: 'rgba(84,112,198, 0.8)',
		      },
		      itemStyle:{
			color: 'rgba(84,112,198)',
		      },
		      label: {
			show: true,
		      }
		    });
		option.legend.data.unshift(
			`${name}'s personal rating of the various skills`,
		);
	};

    // Display the chart using the configuration items and data just specified.
    Chart.setOption(option);
}
