import React from "react";

import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const DoughnutChart = () => {

    const data = {
        labels: ['1','2','3','4'],
        datasets:[
            {
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [100,120,50,110],
                lineTension: 0,
            },
            {
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                data: [70,30,20,12],
                lineTension: 0,
            }
        ]
        }

    return (
        <div style={{width: "80%",
        height: "30%",
        position: "relative",
        top: "100%",
        left: "60%", border:"15px solid black"}} className="chart">
            
            <Doughnut data={data} />
        
        </div>
    )
}

export default DoughnutChart;