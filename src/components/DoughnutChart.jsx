import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    const data = {
        labels: [
          'Missing',
          'Child Labour',
          'Home Violence',
          'Harrasment'
        ],
        datasets: [{
          label: 'Cases',
          data: [100, 210, 30, 150],
          backgroundColor: [
            'rgb(99 143 255)',
            'rgb(54, 162, 235)',
            'rgb(15 121 193)',
            'rgb(5 71 239)'
          ],
          hoverOffset: 4
        }]
      };
  return (
    <div>
        <Doughnut data={data} />
    </div>
  )
}

export default DoughnutChart;