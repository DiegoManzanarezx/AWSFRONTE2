import React from "react";
import Login from './Login';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AxiosGet from "../../views/agentViews/AxiosGet";
import AxiosPost from "../../views/AxiosPost";
import AxiosPut from "./AxiosPut";
import AxiosDelete from "./AxiosDelete";
import AxiosError from "./AxiosError";
import AxiosInstancia from "./AxiosInstancia";

function Home(){
    return(
        <div className="home">
            {/* tipografia
            <Typography variant = "h2" component = "div">
                Título con MUI
            </Typography>

            <Typography paragraph = "true" component = "p">
                Texto comun de un parrafo.    
            </Typography>
            */}

            {/*
            <Container maxWidth = "7">
                <Grid container spacing = {0}>
                    <Typography variant = "h2" component = "div">
                        Título con MUI
                    </Typography>

                    <Typography paragraph = "true" component = "p">
                        Texto comun de un parrafo.    
                    </Typography>

                    <Typography variant = "h2" component = "div">
                        Título con MUI
                    </Typography>

                    <Typography paragraph = "true" component = "p">
                        Texto comun de un parrafo.    
                    </Typography>


                    <Typography variant = "h2" component = "div">
                        Título con MUI
                    </Typography>

                    <Typography paragraph = "true" component = "p">
                        Texto comun de un parrafo.    
                    </Typography>
                </Grid>
            </Container>
        */}
        <Login/>
        </div>
    );
}

export default Home;