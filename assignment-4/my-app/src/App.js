/************************************************************************ *********
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students. *
* Name: _____hung-che,chen__________ Student ID: ___115472169___ Date: ___mar.16/2018____
* ********************************************************************************/

import React, { Component } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
import {Switch, Route} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview title="Overview" />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects title="Projects" />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams title="Teams" />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees title="Employees" />
        )} />
        <Route render={() => (
          <NotFound title="Not Found" />
        )} />
      </Switch>
    );
  }
}

export default App;