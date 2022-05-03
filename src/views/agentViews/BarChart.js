import React, { useParams } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { cliente } from './GlobalStadistics';
Chart.register(...registerables);

const BarChart = () => {
    
    const data = {

        labels: ['Solved', 'Unsolved'],
        datasets:[
            {
            borderColor: 'black',
            backgroundColor: 'orange',
            data: [cliente.solved, cliente.unsolved],
            lineTension: 0,
            }
        ]
        }

    return (
        <div style={{width: "100%",
        height: "30%",
        position: "relative",
        top: "100%",
        left: "50%", border:"15px solid black"}} className="chart">    
            <Bar data={data} />
        </div>
    )
}

export default BarChart;