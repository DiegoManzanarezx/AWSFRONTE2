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
import ManagerDashboard from "./views/agentViews/ManagerDashboard";
import CallHistory from "./views/agentViews/AgentCallsHistory";
import AgentProfile from "./views/agentViews/AgentProfile";
import AgentRecordings from "./views/agentViews/AgentRecordings";
import QuestionDB from "./views/agentViews/QuestionDB";
import AgentSettings from "./views/agentViews/AgentSettings";
import AdmSett from "./views/agentViews/AdmSett";
import AgentFilter from "./views/agentViews/AgentFilter";
import SupervisorFilter from "./views/agentViews/SupervisorFilter";
import ManagerFilter from "./views/agentViews/ManagerFilter";


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
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';



const drawerWidth = 240;

const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary
}));

export default function PermanentDrawerLeft() {

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true, screen: true });
    const menuLinkItemsManagers = [
        { icon: <HomeIcon />, name: 'Home', link: '/manager/' },
        { icon: <PersonIcon />, name: 'Agents', link: '/manager/profile' },
        { icon: <SupervisorAccountIcon />, name: 'Supervisors', link: '/manager/supervisorprofile' },
        { icon: <AccountBoxIcon />, name: 'Managers', link: '/manager/managerprofile' },
        { icon: <VideocamIcon />, name: 'Agents videos', link: '/manager/recordings' },
        { icon: <SettingsIcon />, name: 'Video settings', link: '/manager/settings' },
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

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar sx={activeCall && { backgroundColor: '#4caf50' }}>
                    <Typography variant="h6" noWrap component="div">
                        Amazon RSH
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

                    {menuLinkItemsManagers.map((item) => (
                        <CustomLink to={item.link}>
                            <ListItem button>
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





                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Routes>
                    <Route path="/" element={<ManagerDashboard />} />
                    <Route path="/profile" element={<AgentFilter />} />
                    <Route path="/supervisorprofile" element={<SupervisorFilter />} />
                    <Route path="/managerprofile" element={<ManagerFilter />} />
                    <Route path="/calls" element={<CallHistory />} />
                    <Route path="/settings" element={<AdmSett />} />
                    <Route path="/recordings" element={<AgentRecordings />}>
                        <Route path=":recordingId" element={<AgentRecordings />} />
                    </Route>
                    <Route path="/questiondb" element={<QuestionDB />} />
                    <Route path="/settings" element={<AgentSettings />} />
                    <Route path="/rate" element={<RateCall blobUrl={mediaBlobUrl} />} />
                </Routes>


            </Box>
        </Box>
    );
}