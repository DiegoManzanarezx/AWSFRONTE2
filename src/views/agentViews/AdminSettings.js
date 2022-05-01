import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



class AdminSettings extends React.Component {

    render() {

        return (

            <div className='conf-settings'>

                <div className='upperBox'>
                    <h1>Amazon RSH</h1>
                    <div className='searchBox'>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <div className='middleBox'></div>

                <div className='centerTitle'>
                    <h1 className='Rs'>Recording settings</h1>
                </div>


                <div className='centeredInputs'>
                    <h3>Minimum call time</h3>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="Minutes" color="primary" focused />
                    </Box>
                    <b></b>
                    <h3>Maximum call time</h3>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField label="Minutes" color="primary" focused />
                    </Box>
                </div>

                <div className='rightButton'>
                    <Button variant="contained">Save</Button>
                </div>
            </div>
        );
    }
}


export default AdminSettings;
