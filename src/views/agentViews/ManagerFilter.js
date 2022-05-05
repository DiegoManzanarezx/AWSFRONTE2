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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

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
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};
///
const [age, setAge] = React.useState('');
const handleChange = (event) => {
setAge(event.target.value);
};
const [list, setList] = useState("");
return (
<div>
  <Grid>
    <Typography variant="h5" gutterBottom>
    Managers list
    <Button variant="contained">Add+</Button>
    </Typography>
    <br></br>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="Search manager" variant="standard" onChange={(event) => {
    setList(event.target.value);
    }} />
    </Box>
    <br></br>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderBottom: '15px', borderColor: 'black' }}>
      {supervisores.filter((item) => {
      if (list == "") {
      return item;
      } else if (item.nombre.toLocaleLowerCase().startsWith(list.toLocaleLowerCase())) {
      return item;
      }
      }).map((item) => (
      <div key={item.nombre} style={{ border: "1px solid grey" }}>
        <Stack spacing={2} direction="row">
        <ListItem>
          <ListItemAvatar >
            <Avatar>
              <AccountCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.nombre} secondary={item.id} sx={{ color: '#1976D2' }} />
              <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
              'aria-labelledby': 'basic-button',
              }}
              >
              <MenuItem style={{ backgroundColor: 'transparent' }} >
              <Typography variant="h6" gutterBottom>
                Assign supervisor
              </Typography>
              </MenuItem>

              <MenuItem>
                <Typography variant='h6'>Edit</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='h6'>Delete</Typography>
              </MenuItem>
              </Menu>
            </ListItem>
            <Button id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            
            <MoreVertIcon />
            </Button>
            </Stack>
    
          </div>
          ))}
        </List>
        <Pagination count={5} />
      </Grid>
    </div>
  );
}
