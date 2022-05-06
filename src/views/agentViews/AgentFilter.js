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
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
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
const [anchorEl, setAnchorEl] = React.useState(null);
const [anchorE2, setAnchorE2] = React.useState(null);
const [anchorE3, setAnchorE3] = React.useState(null);
const [anchorE4, setAnchorE4] = React.useState(null);

const open = Boolean(anchorEl);
const open2 = Boolean(anchorE2);
const open3 = Boolean(anchorE3);
const open4 = Boolean(anchorE4);

const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};
const handleClick1 = (event) => {
setAnchorE2(event.currentTarget);
};
const handleClose1 = () => {
setAnchorE2(null);
};
const handleClick2 = (event) => {
  setAnchorE3(event.currentTarget);
};
const handleClose2 = () => {
  setAnchorE3(null);
};

const handleClick3 = (event) => {
  setAnchorE4(event.currentTarget);
};
const handleClose3 = () => {
  setAnchorE4(null);
};
///
const [age, setAge] = React.useState('');
const id = open2 ? 'simple-popover' : undefined;
const id3 = open3 ? 'simple-popover' : undefined;
const id4 = open4 ? 'simple-popover' : undefined;

const handleChange = (event) => {
setAge(event.target.value);
};
const [list, setList] = useState("");
return (
<div>
  <Grid>
    <Typography variant="h5" gutterBottom>
    Agents list
    <Button aria-describedby={id} variant="contained" onClick={handleClick1}>Add+</Button>
    <Popover
      id={id}
      open={open2}
      anchorEl={anchorE2}
      onClose={handleClose1}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 200, left: 900 }}
      anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
      }}
      transformOrigin={{
      vertical:'top',
      horizontal: 'right'
      }}
      >
      <Typography sx={{ p: 2 }}>
      Create a new agent
      </Typography>
      <Typography sx={{ p: 2 }}>
      <Stack>
      Name:
      <TextField required id="standard-required" label="Required" variant="standard" />
      </Stack>
      </Typography>
      <Typography sx={{ p: 2 }}>
      <Stack>
      Email:
      <TextField required id="standard-required" label="Required" variant="standard" />
      </Stack>
      </Typography>
      <Typography sx={{ p: 2 }}>
      <Stack>
      Password:
      <TextField id="standard-password-input" label="Password" type="password" variant="standard" />
      </Stack>
      </Typography>
      <Typography sx={{ p: 2 }}>
      <Stack>
      <Button>Save</Button>
      </Stack>
      </Typography>
    </Popover>
    </Typography>
    <br></br>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="Search agent" variant="standard" onChange={(event) => {
    setList(event.target.value);
    }} />
    </Box>
    <br></br>
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', borderBottom: '15px', borderColor: 'black' }}>
      {clientes.filter((item) => {
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
              <Typography id="basic-button2" aria-controls={open4 ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open4 ? 'true' : undefined}
              onClick={handleClick3} variant="h6">
              Assign new supervisor
              </Typography>
              </MenuItem>
              <Popover
                id={id4}
                open={open4}
                anchorEl={anchorE4}
                onClose={handleClose3}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 900 }}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical:'top',
                horizontal: 'right'
                }}
              >
              <MenuItem style={{ backgroundColor: 'transparent' }} >
                <Typography variant="h6" gutterBottom>
                Assigned supervisor
                </Typography>
                </MenuItem>
                <MenuItem style={{ backgroundColor: 'transparent' }}>
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Supervisors</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Supervisors"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Supervisor Roberto Almero</MenuItem>
                    <MenuItem value={20}>Supervisor Daniel Javier</MenuItem>
                    <MenuItem value={30}>Supervisor Fernanda Arraza</MenuItem>
                  </Select>
                </FormControl>
                </Box>
                </MenuItem>
                <br></br>
                <MenuItem style={{ backgroundColor: 'transparent' }} >
                <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={handleClose3}> Cancel </Button>
                <Button variant="contained">Save</Button>
                </Stack>
                </MenuItem>

              </Popover>
              <MenuItem>
              <Typography aria-describedby={id3} variant="h6" onClick={handleClick2}>Edit</Typography>
              </MenuItem>
              <Popover
                id={id3}
                open={open3}
                anchorEl={anchorE3}
                onClose={handleClose2}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 150, left: 900 }}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical:'top',
                horizontal: 'right'
                }}
                >
                <Typography sx={{ p: 2 }}>
                Edit agent information
                </Typography>
                <Typography sx={{ p: 2 }}>
                <Stack>
                Name:
                <TextField required id="standard-required" label="Required" variant="standard" />
                </Stack>
                </Typography>
                <Typography sx={{ p: 2 }}>
                <Stack>
                Email:
                <TextField required id="standard-required" label="Required" variant="standard" />
                </Stack>
                </Typography>
                <Typography sx={{ p: 2 }}>
                <Stack>
                Password:
                <TextField id="standard-password-input" label="Password" type="password" variant="standard" />
                </Stack>
                </Typography>
                <Typography sx={{ p: 2 }}>
                <Stack>
                <Button>Save</Button>
                </Stack>
                </Typography>
              </Popover>
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