export const dashboardData = [
    {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        id: 1,
        dataOfCharts: {
          title: 'India',
          type: 'PieChart',
          columnName: ['Browser', 'Percentage'],
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            ['Chrome', 12.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ],
          options: {
            is3D: false,
            pieHole: 0.4,
          }
        }
      },
      {
        cols: 2, rows: 2, y: 0, x: 2, id: 2,
        dataOfCharts: {
          title: 'USA',
          type: 'BarChart',
          columnName: ['Year', 'Asia','Europe'],
          data: [
            ["2012", 900, 390],
            ["2013", 1000, 400],
            ["2014", 1170, 440],
            ["2015", 1250, 480],
            ["2016", 1530, 540]
          ],
          options: {
            hAxis: {
              title: 'Year'
           },
           vAxis:{
              minValue:0
           } 
          }
        }
      },
      {
        cols: 2, rows: 2, y: 2, x: 2, id: 3,
        dataOfCharts: {
          title: 'UK',
          type: 'PieChart',
          columnName: ['Browser', 'Percentage'],
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            ['Chrome', 12.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ],
          options: {
            is3D: false,
            pieHole: 0.4,
          }
        }
      }
];