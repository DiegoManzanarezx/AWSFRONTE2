import React from 'react';
import "../Assets/CSS/Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Login extends React.Component{

    render(){


        return(
            <div className='Login'>
                <i class='bx bx-headphone icon' ></i>
                <div className='centeredTitle'>
                    <h1>AMAZON RSH</h1>
                </div>
                
                <div className='centeredInputs'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="User" color="primary" focused />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="Password" color="secondary" focused />
                    </Box>
                </div>

                <div className='centeredButtons'>
                    <Stack spacing={2} direction="row">
                    <Button variant="outlined">Cancel</Button>
                    <Button onClick={event =>  window.location.href='/videos'} variant="contained" >Next</Button>      
                    </Stack>
                </div>
            </div> 


        );

    }

}

export default Login;