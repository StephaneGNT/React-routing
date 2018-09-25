import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home'
import History from './History'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/notre-histoire" component={History}/>
        </Switch>
      </div>
    );
  }
}

export default App;
