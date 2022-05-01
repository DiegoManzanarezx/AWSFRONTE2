import React from 'react';
import "./AgentFilter.css";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Pagination, Grid, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import { VideoInfo } from '../../components/agentComponents/VideoInfo';

let clientes = [
    {
        nombre: 'Angel Bosquez',
        id: '345605',
        role: 'Agent'
    },

    {
        nombre: 'Diego Hernández',
        id: '345604',
        role: 'Agent'
    },

    {
        nombre: 'Fernanda Cazado',
        id: '345602',
        role: 'Agent'
    },

    {
        nombre: 'José Pedraza',
        id: '345601',
        role: 'Agent'
    },

    {
        nombre: 'Luis Orozco',
        id: '345603',
        role: 'Agent'
    },                
];

const videos = [
    { id: 1, title: "Video 1", date: "Feb 08, 2022" },
    { id: 2, title: "Video 2", date: "Aug   27, 2022" },
    { id: 3, title: "Video 3", date: "Oct 23, 2022" },
    { id: 4, title: "Video 4", date: "Nov 16, 2022" },
    { id: 5, title: "Video 5", date: "Nov 16, 2022" },
    { id: 6, title: "Video 6", date: "Nov 16, 2022" },
    { id: 7, title: "Video 7", date: "Nov 16, 2022" },
    { id: 8, title: "Video 8", date: "Nov 16, 2022" },
  ];


  

export default function AgentFilter() {
    const { recordingId } = useParams();
        return(

                <div>

                   {/* <div className = 'agentsInfo'>
                        <ol>    
                            {
                                clientes.map((agentes, iterador) => {
                                    return(
                                        <li className = 'agents' key = {iterador}>
                                            <i class='bx bx-group icon' ></i>
                                             
                                                <Link to={`/agents/${agentes.id}`}>
                                                    <div className='name'>
                                                        {agentes.nombre}
                                                    </div>
                                                </Link>
                                                
                                                -
                                                <div className='id'>
                                                    {agentes.id}
                                                </div>
                                            <br></br>
                                            <div className='role'>
                                            {agentes.role}
                                            </div>
                                            <br></br>
                                        </li>
                                    );
                                })
                            }
                        </ol>    
                    </div>

                */}


                    <Grid item xs={recordingId !== undefined ? 4 : 12}>
        <Typography variant="h5" gutterBottom>
          Agent list
        </Typography>
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
          {
            clientes.map(cliente => {
              return(
                <Link to={`/recordings/${cliente.id}`} style={{ textDecoration: 'none' }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={cliente.nombre} secondary={cliente.id}/>
                    <ListItemAvatar>
                        <MoreVertIcon/>
                    </ListItemAvatar>
                    
                  </ListItem>
                </Link>
              )
            })
          }
        </List>
        <Pagination count={10} />
      </Grid>


                </div>
        );
}