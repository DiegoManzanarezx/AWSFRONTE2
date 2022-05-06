import React, { useState, useEffect } from 'react';
import "./Login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Typography } from '@mui/material';
import axios from "axios";



const miPostListURL = "http://localhost:8080/v1/employees/signin";


function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const routeHandler = () => {
        console.log(userName)
        if(userName == 'a')
            window.location.href = '/agent'
        else if(userName == 's')
            window.location.href = '/supervisor'
        else if (userName == 'm')
            window.location.href = '/manager'
    };

    

    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get({miPostListURL}).then((response) => {
            setPost(response.data);

        });
    }, []);
    function crearPost() {
        axios.post(miPostListURL, {
            employee_name: userName,
            employee_password: userPassword
        }).then((response) => { setPost(response.data) });
    }

        return(
            <div className='Login'>
                    <HeadsetMicIcon sx={{
                                    fontSize: "3%",
                                    padding: "3%",
                                    height: "40%",
                                    width: "23%",
                                    color: "rgb(62, 110, 155)",
                                    //bgcolor: "rgb(147, 191, 233)",
                                    bgcolor: "transparent",
                                    position: "fixed",
                                    top: "30%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    borderRadius: "50%"
                                    }}
                    />
            
                    <Typography variant="h3"
                                gutterBottom
                                sx={{
                                color: "black",
                                position: "fixed",
                                top: "57%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"    
                                }}
                                        
                    >
                        AMAZON RSH
                    </Typography>
                
                <div className='centeredInputs'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="User" color="primary" focused onChange={(event) => {
                            setUserName(event.target.value)}} />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="Password" color="secondary" focused onChange={(event) => {
            setUserPassword(event.target.value);
          }} />
                    </Box>
                </div>

                <div className='centeredButtons'>
                    <Stack spacing={2} direction="row"
                            sx={{
                            position: "fixed",
                            top: "82%",
                            left: "0%",
                            transform: "translate(-50%, -50%)"
                            }}
                    >
                    <Button onClick={crearPost} variant="outlined">Cancel</Button>
                    <Button onClick={routeHandler} variant="contained" >Next</Button>      
                    </Stack>
                </div>
            </div> 
        )
}

export default Login;