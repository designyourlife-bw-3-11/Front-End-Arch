import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1> </h1>

          <ul>
            <li>
              <Link to=""> (Public) </Link>
            </li>
            <li>
              <Link to="/protected"> Protected </Link>
            </li>
            <li>
              <Link to="/login"> Log In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
