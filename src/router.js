import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Wizard from './component/Wizard';
import Dashboard from './component/Dashboard';




export default (
    <Switch>
        <Route component= {Dashboard} exact path ="/"></Route>
        <Route component= {Wizard} exact path ="/wizard"></Route>
    </Switch>
)