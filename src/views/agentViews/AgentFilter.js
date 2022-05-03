import React, { useState } from 'react';
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



import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

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
    
    {
        nombre: 'Luis Pineda',
        id: '345609',
        role: 'Agent'
    }, 
];



  

export default function AgentFilter() {
    const [list, setList] = useState("");
        return(

                <div>

                    <Grid>
                         
        <Typography variant="h5" gutterBottom>
          Agent list       
        </Typography>

        <br></br>
     
        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search agent" variant="standard" onChange={(event) => {
                setList(event.target.value);
            }}/>
      </Box>

        <br></br>
        
        
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderBottom:'15px', borderColor:'black'}}>
            {clientes.filter((item) => {
                if(list == ""){
                    return item;
                }else if(item.nombre.toLocaleLowerCase().startsWith(list.toLocaleLowerCase())){
                    return item;
                }
            }).map((item) => (
                <div key={item.nombre} style={{border:"1px solid grey"}}>
                    <Link to={`/supervisor/agents/${item.id}`} style={{ textDecoration: 'none' }}>
                  <ListItem>
                    <ListItemAvatar >
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.nombre} secondary={item.id} sx={{color:'#1976D2'}}/>
                    <ListItemAvatar>
                        <MoreVertIcon/>
                    </ListItemAvatar>
                    
                  </ListItem>
                </Link>

                </div>
            ))}


         {/* {
            clientes.map(cliente => {
              return(
                <Link to={`/profile/${cliente.id}`} style={{ textDecoration: 'none' }}>
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

        */}
        </List>
        
      </Grid>


                </div>
        );
}