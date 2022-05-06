import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams
  } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

let clientes = [
    {
        nombre: 'Angel Bosquez',
        id: '345605',
        role: 'Agent',
        solved: 13,
        unsolved: 18
    },

    {
        nombre: 'Diego Hernández',
        id: '345604',
        role: 'Agent',
        solved: 3,
        unsolved: 3
    },

    {
        nombre: 'Fernanda Cazado',
        id: '345602',
        role: 'Agent',
        solved: 11,
        unsolved: 11
    },

    {
        nombre: 'José Pedraza',
        id: '345601',
        role: 'Agent',
        solved: 21,
        unsolved: 33
    },

    {
        nombre: 'Luis Orozco',
        id: '345603',
        role: 'Agent',
        solved: 101,
        unsolved: 88
    },
    
    {
        nombre: 'Luis Pineda',
        id: '345609',
        role: 'Agent',
        solved: 130,
        unsolved: 180
    }, 
];

var cliente = clientes[0];

export default function AgentStatistics(){

    let { agentId } = useParams();
    return(
        <div className="chart">
            {clientes.filter((item) => {
                if(item.id == agentId){
                    cliente = item;
                    return item;
                }
            }).map((item) => (
                <div key={item.nombre}>
                    <Typography variant="h5" gutterBottom>
                        Agent {item.nombre}      
                    </Typography>

                    <Typography variant="h7" gutterBottom>
                        ID: {item.id}      
                    </Typography>

                    <br></br>
                    <br></br>

                    <BarChart />
                    
                    <br></br>
                    <br></br>
                    <br></br>

                    <DoughnutChart />
                   

                    <br></br>
                    <br></br>
                    <br></br>


                    <LineChart />

                </div>
            ))}
                
                
                
            
            
        </div>
    );
}

export { cliente };


