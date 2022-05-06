import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import { alpha, styled } from '@mui/material/styles';

import { Pagination, Grid, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import { VideoInfoAgentes } from '../../components/agentComponents/VideoInfoAgentes';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function AgentRecordingShared() {

    const videos = [
        { id: 1, title: "Video 1", date: "Dic 12, 2021" },
        { id: 2, title: "Video 2", date: "Jan 11, 2022" },
        { id: 3, title: "Video 3", date: "Oct 31, 2022" },
        { id: 4, title: "Video 4", date: "Nov 16, 2022" },
        { id: 5, title: "Video 5", date: "Nov 17, 2022" },
        { id: 6, title: "Video 6", date: "Nov 18, 2022" },
        { id: 7, title: "Video 7", date: "Nov 19, 2022" },
        { id: 8, title: "Video 8", date: "Nov 20, 2022" },
    ];

    const { recordingId } = useParams();

    return (
        <Grid container spacing={2}>
            <Grid item xs={recordingId !== undefined ? 4 : 12}>
                <Typography variant="h5" gutterBottom>
                    Recording list
                </Typography>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                    {
                        videos.map(video => {
                            return (
                                <Link to={`/agent/recordings/${video.id}`} style={{ textDecoration: 'none' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <VideoFileIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={video.title} secondary={video.date} />
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </List>
                <Pagination count={10} />
            </Grid>
            {recordingId !== undefined &&
                <>
                    <Grid item xs={4}>
                        <VideoInfoAgentes />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/tmjN49jEDzQ&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
                    </Grid>
                </>
            }
        </Grid>
    );
}

export default AgentRecordingShared;
