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
        solved: 20,
        unsolved: 20
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
        unsolved: 99
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


var unsolved = 0;
var solved = 0;

export default function GlobalStadistics(){
    let { agentId } = useParams();
    cliente.solved = 0;
    cliente.unsolved = 0;
    return(
        <div className="chart">
                {
                    clientes.map((item) => {
                        cliente.solved+=item.solved;
                        cliente.unsolved+=item.unsolved;
                    })
                }
                <div>
                    <Typography variant="h4" gutterBottom>
                        All agents    
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
            
                
                
                
            
            
        </div>
    );
}

export { cliente };


