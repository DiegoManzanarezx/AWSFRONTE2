import React, { useState } from 'react'
import { Box, Chip, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import PlusIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const VideoInfo = () => {

  //Input share

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let tempArray = [];

  const names = [
    "Pending",
    "Scam",
    "Unclear method",
    "Wrong transaction",
    "Bad instance",
    "Previous problem",
    "Manager request",
    "Unsatisfied user",
    "Unspecified","Solved",
    "To review", 
    "Annoying user",
    "Impatient user",
    "Internet search",
    "Medium quality", 
    "Search in previously solved problems", 
    "Account error service",
    "Personal information within the video", 
    "Review because of element in the recording not working"
  ];

  let tags = [
    "Solved",
    "To review", 
    "Annoying user",
    "Impatient user",
    "Internet search",
    "Medium quality", 
    "Search in previously solved problems", 
    "Account error service",
    "Personal information within the video", 
    "Review because of element in the recording not working"
  ];

    //Form
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeTags = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const updateTags = () =>{
    tags = tempArray;
    setReload(tags);
    for(var i=0; i<tags.length; i++){
      console.log(tags[i]);
    }
  }

  const [reload, setReload] = React.useState([]);
  

  
  return (
    <>
      <Typography variant="h5" mb={3}>Video information</Typography>
      <Typography variant='button' style={{display: 'block'}}>Date</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>26/04/22</Typography>

      <Typography variant='button' style={{display: 'block'}}>Agent ID</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>21453</Typography>

      <Typography variant='button' style={{display: 'block'}}>Length</Typography>
      <Typography variant='body2' style={{display: 'block'}} mb={4}>20 minutes</Typography>

      <Typography variant='button' style={{display: 'block'}}>User ID</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>65433</Typography>

      <Typography variant='button' style={{display: 'block'}}>User Name</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>Karen Macías</Typography>

      <Typography variant='button' style={{display: 'block'}}>Requested service</Typography>
      <Typography variant='body2' style={{display: 'block'}} mb={4}>Account support</Typography>
        
      <Typography variant="h7" gutterBottom sx={{ fontWeight: 'bold' }}>Related Tags</Typography>

      <IconButton variant="filled" aria-label="plus" size="large" sx={{bgcolor:'#E39EE9'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PlusIcon fontSize="inherit" />
      </IconButton>





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
                                      Add new tags
                                  </Typography>
                                  </MenuItem>

                         


                                  <MenuItem style={{ backgroundColor: 'transparent' }}>




                                        <Box sx={{ minWidth: 120 }}>
                                        <FormControl sx={{ m: 1, width: 300 }}>
                                            <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                                            <Select
                                              labelId="demo-multiple-chip-label"
                                              id="demo-multiple-chip"
                                              multiple
                                              value={personName}
                                              onChange={handleChangeTags}
                                              input={<OutlinedInput id="select-multiple-chip" label="Tags" />}
                                              renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                  
                                                  {
                                                  
                                                  selected.map((value) => {
                                                    if(!tempArray.includes(value))
                                                      tempArray.push(value)
                                                    return value;
                                                }).map((value) => (
                                                    
                                                    <Chip key={value} label={value} />
                                                    
                                                  )                                        
                                                  )}

                                                </Box>
                                              )}
                                              MenuProps={MenuProps}
                                            >
                                              {names.map((name) => (
                                                <MenuItem
                                                  key={name}
                                                  value={name}
                                                  style={getStyles(name, personName, theme)}
                                                >
                                                  {name}
                                                </MenuItem>
                                              ))}
                                            </Select>
                                          </FormControl>
                                      </Box>


                                
                                </MenuItem>


                                <br></br>
                                <MenuItem style={{ backgroundColor: 'transparent' }} >
                                  <Stack spacing={2} direction="row">
                                    <Button variant="outlined" onClick={handleClose}> Cancel </Button>
                                    <Button variant="contained" onClick={updateTags}> Save </Button>
                                  </Stack>
                                </MenuItem>
                        </Menu>




      <Box sx={{ lineHeight: '45px', marginTop: '10px'}} key={reload}>
        {reload.map(tag => (
          <Box sx={{ display: 'inline'}} mr ={1}>
            <Chip label={tag} variant="outlined" sx={{backgroundColor:"#edf2fb" }} />
          </Box>   
        ))}
        
      </Box>
      
    </>
  )
}
