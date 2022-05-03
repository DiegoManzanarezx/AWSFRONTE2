import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { cliente } from "./AgentStatistics";
Chart.register(...registerables);




const LineChart = () => {

    const data = {
        labels: ['1','2','3','4'],
        datasets:[
            {
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [9,12,13,11],
                lineTension: 0,
            },
            {
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                data: [10,15,16,12],
                lineTension: 0,
            }
        ]
        }

    return (

        <div style={{width: "100%",
                    height: "30%",
                    position: "relative",
                    top: "100%",
                    left: "50%", border:"15px solid black"
        }} className="chart">
            
            <Line data={data} />
        </div>
    )
}

export default LineChart;