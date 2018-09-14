import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import Signin from './components/Signin/Signin.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/Login" className="nav-link">Login</NavLink>
          <NavLink to="/Register" className="nav-link">Sign up</NavLink>
          <button>Logout</button>
        </div>

        <Route path='/Login' component={ Signin } />
        {/* <Route path='/Register' component={ Signup }> */}
      </div>
    );
  }
}

export default App;
