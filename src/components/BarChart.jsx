import React from 'react';
import Chart, { LinearScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const BarChart = (props) => {
  // const labels = ["AD","AR","AS","BR","CG","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LD","MP","MH","MN","ML","MZ","NL","OD","PY","PB", "RJ","SK","TN","TS","TR","UP","UK","WB"];
  var label1 = [];
  // let value1 = [];
  var label2 = [];
  let value2 = [];
  if(props.type === 'national'){
    for (let state of props.state) {
      label1.push(state.shortCode);
    }
  } else{
    for (let state of props.state) {
      label2.push(state.district);
      value2.push(state.cases);
    }
  }  
  
  const data1 = {
    labels: label1,
    datasets: [
      {
        label: "Reported Cases",
        barThickness: 10,
        backgroundColor: "rgb(44, 119, 244)", 
        borderWidth: 1.3,
        borderColor: '#FFFFFF',
        borderRadius: 4,
        data: [40, 10, 35, 5, 18, 41, 23, 22, 10, 31, 6, 28, 33, 70, 28, 39, 14, 25, 65, 24, 5, 37, 16, 28, 44, 29, 11, 25, 10, 49, 12, 40, 38, 22, 57, 38]
        // data: value1,
      },
      {
        label: "Resolved Cases",
        barThickness: 10,
        backgroundColor: "rgb(30, 202, 184)",
        borderWidth: 1.3,
        borderColor: '#FFFFFF',
        borderRadius: 4,
        data: [21, 3, 18, 5, 10, 28, 16, 8, 5, 11, 6, 17, 22, 58, 25, 34, 10, 20, 57, 16, 3, 21, 7, 13, 39, 19, 9, 21, 4, 33, 8, 38, 20, 37, 52, 47]
      }
    ],
   
  };

  const data2 = {
    labels: label2,
    datasets: [
      {
        label: "Reported Cases",
        barThickness: 6,
        // backgroundColor: "rgb(44, 119, 244)", 
        backgroundColor: "rgb(44, 119, 244)",
        // borderWidth: 1.3,
        // borderColor: '#FFFFFF',
        borderRadius: 4,
        data: value2,
      },
    ],
   
  };
  
  const options1 = {
    maintainAspectRatio: false,
    scales: {
        x: {grid: {display: false}},
        y: {border:{dash: [4, 4]}, ticks: {maxTicksLimit: 5}},
    },
    plugins: {
      tooltip: {
        
        enabled: true,
        // backgroundColor: "rgba(60, 151, 204, 0.137)",
        // backgroundColor:"rgb(65, 110, 238)",
        // 
        backgroundColor:function(tooltipItem) {
          const bgColor = tooltipItem.tooltip.labelColors[0].backgroundColor;
          return bgColor;
        },
        titleColor: "#000000",
        titleSpacing: 3,
        titleMarginBottom: 10,
        // borderColor: "#000000",
        // borderWidth: 1,
        borderWidth: 2,
        bodyColor: "#000000",
        yAlign: "bottom",
        xAlign: "left",
        callbacks: {
            title: function(tooltipItem) {
                for (let state of props.state) {
                  if (state.shortCode === tooltipItem[0].label) {
                    return state.stateName;
                  }
                }
            },
          //   labelColor: function(tooltipItem, chart) {
          //     return {
          //         backgroundColor: '#6d88f9'
          //     }
          // },
        }
    },
    legend:{
      labels: {
        // boxWidth: 3,
        usePointStyle: true,
        pointStyle: 'triangle'
      }
    },
    animation: {y: {from: 500}}
  }
}

const options2 = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  scales: {
      x: {grid: {display: false}},
      y: { border:{dash: [2, 2]}, },
  },
  plugins: {
    tooltip: {
      enabled: true,
      // backgroundColor: "rgba(60, 151, 204, 0.137)",linear-gradient(310deg,#6d88f9,#21d4fd);
      backgroundColor:"rgb(44, 119, 244)",
      titleSpacing: 3,
      titleMarginBottom: 10,
      borderWidth: 2,
      bodyColor: "#000000",
    },
  legend:{
    labels: {usePointStyle: true, pointStyle: 'triangle'}
  },
  // animation: {y: {from: 500}}
  }
}

// const subbox = document.querySelector('.subbox');
// console.log(subbox.style.height);
// subbox.style.height = '630px';
var newHeight = `${props.height}`;
if(props.type === 'statelevel' & props.state.length > 30){
  // console.log('district');
  // console.log(props.state.length);
  newHeight = 630 + ((props.state.length-30) * 20);
  // if(subbox.style != null){
  //   subbox.style.height = `${newHeight}px`;
  // }

}
console.log(newHeight);

  return (
    <>
    {props.type === 'national' &&
      (<div style={{height:`${props.height + 'px'}`}}>
      <Bar data={data1}  height={228} options={options1} />
      </div>)
    }

    {props.type === 'statelevel' &&
      (<div style={{height:`${props.height + 'px'}`}} className='scroll-box'>
          <div className='subbox' id='style-1' style={{height:`${newHeight+ 'px'}`}}>
          <Bar data={data2} height={630} width={350} options={options2} />
          </div>
        </div>)
    }
    </>

      // {props.type === 'national' &&
      //   <Bar data={data1}  height={228} options={options1} />
      // }

      // {props.type === 'statelevel' &&
      //   <Bar data={data2} height={500} options={options2} />
      // }

    // </div>
  )
}

export default BarChart;