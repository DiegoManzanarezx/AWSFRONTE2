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
import Button from '@mui/material/Button';

let supervisores = [
    {
        nombre: 'Devanni Regina',
        id: '987654',
        role: 'Manager'
    },
    {
        nombre: 'Daniel Elenor',
        id: '184764',
        role: 'Manager'
    },


];




export default function AgentFilter() {
    const { recordingId } = useParams();
    return (

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
                    Managers list
                    <Button variant="contained">Add+</Button>
                </Typography>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {
                        supervisores.map(supervisor => {
                            return (

                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccountCircleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={supervisor.nombre} secondary={supervisor.id} />
                                    <ListItemAvatar>
                                        <MoreVertIcon />
                                    </ListItemAvatar>

                                </ListItem>
                            )
                        })
                    }
                </List>
                <Pagination count={10} />
            </Grid>


        </div>
    );
}