
// import React, { Component } from 'react';
// import { Card, CardBody } from "reactstrap";
// import { Link } from "react-router-dom";
// import CalendarHeatmap from 'react-calendar-heatmap';
// import "../Dashboard/dash.css";
// class Inbox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             heatmapData: [
//                 { date: '2023-01-8', count: 5 },
//                 { date: '2023-02-31', count: 10 },
//                 { date: '2023-03-21', count: 20 },
//                 // Add data for the entire year...
//             ]
//         };
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Card className='heat'>
//                     <div id="heatmap" className="m-5 ml-5">
//                         <CalendarHeatmap
//                             startDate={new Date('2023-01-01')}
//                             endDate={new Date('2023-12-31')}
//                             values={this.state.heatmapData}
//                             classForValue={(value) => {
//                                 if (!value) {
//                                     return 'color-empty';
//                                 }
//                                 return `color-github-${value.count}`;
//                             }}
//                         />
//                     </div>
//                 </Card>
//             </React.Fragment>
//         );
//     }
// }

// export default Inbox;


// import React, { useEffect } from 'react';
// import * as echarts from 'echarts';

// const MyChart = () => {
//   useEffect(() => {
//     const chartDom = document.getElementById('main');
//     const myChart = echarts.init(chartDom);

//     const getVirtualData = (year) => {
//       const date = +echarts.time.parse(year + '-01-01');
//       const end = +echarts.time.parse(+year + 1 + '-01-01');
//       const dayTime = 3600 * 24 * 1000;
//       const data = [];
//       for (let time = date; time < end; time += dayTime) {
//         data.push([
//           echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
//           Math.floor(Math.random() * 10000)
//         ]);
//       }
//       return data;
//     }

//     const option = {
//       title: {
//         top: 30,
//         left: 'center',
//         text: 'Daily Step Count'
//       },
//       tooltip: {},
//       visualMap: {
//         min: 0,
//         max: 10000,
//         type: 'piecewise',
//         orient: 'horizontal',
//         left: 'center',
//         top: 65
//       },
//       calendar: {
//         top: 120,
//         left: 30,
//         right: 30,
//         cellSize: ['auto', 13],
//         range: '2016',
//         itemStyle: {
//           borderWidth: 0.5
//         },
//         yearLabel: { show: false }
//       },
//       series: {
//         type: 'heatmap',
//         coordinateSystem: 'calendar',
//         data: getVirtualData('2016')
//       }
//     };

//     option && myChart.setOption(option);

//     // Clean up
//     return () => {
//       myChart.dispose();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return <div id="main" style={{ width: '100%', height: '400px' }}></div>;
// };

// export default MyChart;

import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import * as echarts from 'echarts';

const MyChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    const getVirtualData = (year) => {
      const date = +echarts.time.parse(year + '-01-01');
      const end = +echarts.time.parse(+year + 1 + '-01-01');
      const dayTime = 3600 * 24 * 1000;
      const data = [
        { "2023-01-02": 25 },
        { "2023-01-05": 27 },
        { "2023-01-10": 48 },
        { "2023-01-14": 23 },
        { "2023-01-19": 15 },
        { "2023-02-03": 40 },
        { "2023-02-11": 38 },
        { "2023-02-18": 12 },
        { "2023-02-20": 6 },
        { "2023-02-27": 42 },
        { "2023-03-09": 35 },
        { "2023-03-17": 1 },
        { "2023-03-26": 2 },
        { "2023-03-30": 4 },
        { "2023-04-04": 44 },
        { "2023-04-12": 26 },
        { "2023-04-16": 39 },
        { "2023-04-23": 8 },
        { "2023-05-07": 20 },
        { "2023-05-14": 41 },
        { "2023-05-21": 37 },
        { "2023-05-28": 10 },
        { "2023-06-07": 9 },
        { "2023-06-12": 31 },
        { "2023-06-24": 46 },
        { "2023-06-30": 19 },
        { "2023-07-08": 3 },
        { "2023-07-12": 11 },
        { "2023-07-16": 32 },
        { "2023-07-21": 22 },
        { "2023-08-03": 49 },
        { "2023-08-09": 21 },
        { "2023-08-22": 29 },
        { "2023-08-31": 17 },
        { "2023-09-05": 43 },
        { "2023-09-17": 47 },
        { "2023-09-25": 28 },
        { "2023-09-29": 16 },
        { "2023-10-01": 6 },
        { "2023-10-09": 45 },
        { "2023-10-20": 5 },
        { "2023-10-26": 18 },
        { "2023-11-05": 36 },
        { "2023-11-11": 33 },
        { "2023-11-17": 30 },
        { "2023-11-22": 7 },
        { "2023-12-07": 24 },
        { "2023-12-15": 13 },
        { "2023-12-19": 14 },
        { "2023-12-28": 34 }
    ];
    
    // console.log(sortedPairs);
    
   
    const result = [];
    data.forEach(item => {
      const date = Object.keys(item)[0];
      const value = item[date];
      result.push([date, value]);
    });
    return result;
    }

    const option = {
        title: {
          top: 30,
          left: 'center',
          text: 'Heat Map'
        },
        tooltip: {},
        visualMap: {
          min: 1,
          max: 51,
          type: 'continuous',
          orient: 'horizontal',
          left: 'center',
          top: 65,
          inRange: {
            color: ["#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          },
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ['auto', 20],
          range: '2023', // Adjusted to match the year of the data
          itemStyle: {
            borderWidth: 0.5,
          },
          yearLabel: { show: false },
          monthLabel: {
            show: true,
            nameMap: 'en',
            align: 'left',
            padding: 10
          }
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtualData()
        }
      };
  
      option && myChart.setOption(option);
  
      // Clean up
      return () => {
        myChart.dispose();
      };
    }, []); // Empty dependency array ensures this effect runs only once after initial render
  
    return (
      <Card>
        <CardBody>
          <div id="main" style={{ width: '100%', height: '300px' }}></div>
        </CardBody>
      </Card>
    );
  };
  
  export default MyChart;
  