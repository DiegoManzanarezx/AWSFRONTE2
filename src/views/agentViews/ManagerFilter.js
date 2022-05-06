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
import Popover from '@mui/material/Popover';

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
const [anchorE2, setAnchorE2] = React.useState(null);
const [anchorE3, setAnchorE3] = React.useState(null);

const open = Boolean(anchorEl);
const open2 = Boolean(anchorE2);
const open3 = Boolean(anchorE3);

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
///
const [age, setAge] = React.useState('');
const id = open2 ? 'simple-popover' : undefined;
const id3 = open3 ? 'simple-popover' : undefined;

const handleChange = (event) => {
setAge(event.target.value);
};
const [list, setList] = useState("");
return (
<div>
  <Grid>
    <Typography variant="h5" gutterBottom>
    Managers list
    <Button aria-describedby={id} variant="contained" onClick={handleClick1}>Add+</Button>
    <Popover
        id={id}
        open={open2}
        anchorEl={anchorE2}
        onClose={handleClose1}
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
          Create a new Manager
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
              </MenuItem>
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
                Edit manager information
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
