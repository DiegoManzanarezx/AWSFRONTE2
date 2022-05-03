import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';

import { useReactMediaRecorder } from "react-media-recorder";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// AGENT VIEWS
import SupervisorDashboard from "./views/agentViews/SupervisorDashboard";
import CallHistory from "./views/agentViews/AgentCallsHistory";
import AgentProfile from "./views/agentViews/AgentProfile";
import AgentRecordings from "./views/agentViews/AgentRecordings";
import QuestionDB from "./views/agentViews/QuestionDB";
import AgentSettings from "./views/agentViews/AgentSettings";

import VideoFilter from "./views/agentViews/VideoFilter";
import AgentFilterSupervisor from "./views/agentViews/AgentFilterSupervisor";
import AgentStatistics from './views/agentViews/AgentStatistics';

import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VideocamIcon from '@mui/icons-material/Videocam';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import IncomingCall from './components/agentComponents/IncomingCall';
import SpeedDial from '@mui/material/SpeedDial';
import CallIcon from '@mui/icons-material/Call';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallEndIcon from '@mui/icons-material/CallEnd';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import RateCall from './views/agentViews/RateCall';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './components/agentComponents/Home';
import GlobalStadistics from './views/agentViews/GlobalStadistics';

const drawerWidth = 240;

const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary
}));

export default function PermanentDrawerLeft() {

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true, screen: true });
    const menuLinkItemsSupervisor = [
        { icon: <HomeIcon />, name: 'Home', link: '/supervisor/' },
        { icon: <PersonIcon />, name: 'Agents', link: '/supervisor/agents' },
        { icon: <VideocamIcon />, name: 'Videos library', link: '/supervisor/videos' },
        { icon: <AlignVerticalBottomIcon />, name: 'Metrics', link: '/supervisor/globalstadistics' },
    ];


    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);

        if (value == "pick_up") {
            handleActiveCall(true);
            startRecording();
        }

    };


    const [activeCall, setActiveCall] = React.useState(false);

    const handleActiveCall = value => {
        setActiveCall(value);
    }


    //LogoutEffect
    function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }

    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }


    const [openLogout, setOpenLogout] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const handleClickLogout = (Transition) => () => {
        setTransition(() => Transition);
        setOpenLogout(true);
    };

    const handleCloseLogout = () => {
        setOpenLogout(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar sx={activeCall && { backgroundColor: '#4caf50' }}>
                    <Typography variant="h6" noWrap component="div">
                        Amazon RSH xD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>

                    {menuLinkItemsSupervisor.map((item) => (
                        <CustomLink to={item.link}>
                            <ListItem button onClick={handleClickLogout(TransitionRight)}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </CustomLink>
                    ))}




                    <CustomLink sx={{
                        position: "fixed",
                        bottom: "0",
                        marginBottom: "5%"
                    }} to='/'>
                        <ListItem button >
                            <ListItemIcon >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </CustomLink>


                    <Snackbar
                        open={openLogout}
                        onClose={handleCloseLogout}
                        TransitionComponent={transition}
                        message="New employee added"
                        key={transition ? transition.name : ''}
                    />


                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                    <Routes>
                        <Route path="/" element={<SupervisorDashboard />} />
                        <Route path="/agents" element={<AgentFilter />} />
                        <Route path="/agents/:agentId" element={<AgentStatistics />} />
                        <Route path="/videos" element={<AgentRecordings />}>
                            <Route path=":recordingId" element={<AgentRecordings />} />
                        </Route>
                        <Route path="/globalstadistics" element={<GlobalStadistics />} />
                        <Route path="/" element={<Home />} />
                    </Routes>


            </Box>
        </Box>
    );
}