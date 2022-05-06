import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { alpha, styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Pagination, Grid, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import { VideoInfo } from '../../components/agentComponents/VideoInfo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));
function AgentRecordings() {
const [value, setValue] = React.useState(null);
const videos = [
{ id: 1, title: "Video 1", date: "Feb 08, 2022" },
{ id: 2, title: "Video 2", date: "Aug   27, 2022" },
{ id: 3, title: "Video 3", date: "Oct 23, 2022" },
{ id: 4, title: "Video 4", date: "Nov 16, 2022" },
{ id: 5, title: "Video 5", date: "Nov 16, 2022" },
{ id: 6, title: "Video 6", date: "Nov 16, 2022" },
{ id: 7, title: "Video 7", date: "Nov 16, 2022" },
{ id: 8, title: "Video 8", date: "Nov 16, 2022" },
{ id: 9, title: "Video 9", date: "Feb 08, 2022" },
{ id: 10, title: "Video 10", date: "Aug   27, 2022" },
{ id: 11, title: "Video 11", date: "Oct 23, 2022" },
{ id: 12, title: "Video 12", date: "Nov 16, 2022" },
{ id: 13, title: "Video 13", date: "Nov 16, 2022" },
{ id: 14, title: "Video 14", date: "Nov 16, 2022" },
{ id: 15, title: "Video 15", date: "Nov 16, 2022" },
{ id: 16, title: "Video 16", date: "Nov 16, 2022" },
];
const { recordingId } = useParams();
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};
//Input share
const [age, setAge] = React.useState('');
const handleChange = (event) => {
setAge(event.target.value);
};
const [list, setList] = useState("");
return (
<Grid container spacing={2}>
  <Grid item xs={recordingId !== undefined ? 4 : 12}>
    <Typography variant="h5" gutterBottom>
    Recording list
    </Typography>
    <br></br>
    
    <Stack spacing={3} direction="row">
    <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
    <SearchIcon sx={{ color: 'action.active', mr: 1.2, my: 0.5, }} />
    <TextField id="input-with-sx" label="Search video" variant="standard" onChange={(event) => {
    setList(event.target.value);
    }}/>
    </Box>
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
    label="Date picker"
    value={value}
    onChange={(newValue) => {
    setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>
    </Stack>
    <br></br>
    
    
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      {videos.filter((item) => {
      if(list == ""){
      return item;
      }else if(item.title.toLocaleLowerCase().startsWith(list.toLocaleLowerCase())){
      return item;
      }
      }).map(video => {
      return(
      <div style={{border:"1px solid grey"}}>
        <Stack spacing={2} direction="row">
        <ListItem >
          
          <ListItemAvatar>
            <Avatar>
              <VideoFileIcon />
              </Avatar>
            </ListItemAvatar>
            
            <Link to={`/supervisor/videos/${video.id}`} style={{ textDecoration: 'none' }}>
            <ListItemText primary={video.title} secondary={video.date} sx={{color:'#1976D2'}} />
            </Link>
            
            
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
            Share
            </Typography>
            </MenuItem>
            
            <MenuItem style={{ backgroundColor: 'transparent' }}>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Employee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Employee"
                onChange={handleChange}
                >
                <MenuItem value={10}>Supervisor Diego Manzanarez</MenuItem>
                <MenuItem value={20}>Supervisor Cristiano Ronaldo</MenuItem>
                <MenuItem value={30}>Supervisor Luis Suarez</MenuItem>
                <MenuItem value={40}>Supervisor Santiago Hernandez</MenuItem>
                <MenuItem value={50}>Supervisor Javier Valencia</MenuItem>
              </Select>
            </FormControl>
            </Box>
            </MenuItem>
            <br></br>
            <MenuItem style={{ backgroundColor: 'transparent' }} >
            <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={handleClose}> Cancel </Button>
            <Button variant="contained">Share</Button>
            </Stack>
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
        )
        })
        }
      </List>
      <Pagination count={Math.ceil(videos.length / 10)} />
      </Grid>
      { recordingId !== undefined &&
      <>
      <Grid item xs={4}>
        <VideoInfo />
        </Grid>
        <Grid item xs={4}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/tmjN49jEDzQ&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
        </Grid>
      </>
      }
    </Grid>
  );
}
export default AgentRecordings;