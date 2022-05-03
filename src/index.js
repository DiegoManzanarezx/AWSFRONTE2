import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import AppManager from './AppManager';
import AppSupervisor from './AppSupervisor';
import * as serviceWorker from './serviceWorker';
import AgentFilter from './views/agentViews/AgentFilter';
import AgentRecordings from './views/agentViews/AgentRecordings';
import AgentSettings from './views/agentViews/AgentSettings';
import AgentStatistics from './views/agentViews/AgentStatistics';
import Home from "./components/agentComponents/Home";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/agent/*" element = {<App/>}/>
        <Route path = "/supervisor/*" element = {<AppSupervisor/>}/>
        {/*<Route path = "/manager" element = {<AppManager/>}/>*/}
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
