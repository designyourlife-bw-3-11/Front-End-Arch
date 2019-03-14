import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";
import Register from "./components/Register";
import ActivityLog from "./components/activitylog/ActivityLog";
import {
  getActivities,
  // addActivity,
  addActivityLog,
  getActivityLog,
  getReflectionLog,
  // addReflection,
  addReflectionLog
} from "./actions";

import ReflectionLog from "./components/reflection/ReflectionLog";
import styled from "styled-components";

const Header = styled.header`
  background: #3d4247;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media @mobile {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Nav = styled.nav`
  font-size: 1.8rem;
`;

const NavButton = styled(Link)`
  text-align: center;
  margin-left: 1rem;
  text-decoration: none;
  color: #ffffff

  &:hover {
    color: #81fffe;
    padding-bottom: 3px;
    margin-bottom: 7px;
    border-bottom: 1.5px solid #81fffe;
  }
`;

class App extends Component {
  componentDidMount = () => {
    this.props.getActivities("testuser", "");
    // console.log(this.props.getActivities());
    // this.setState({ activities: activities });
  };

  componentDidUpdate = () => {
    if (!this.props.hasLatestActivities)
      this.props.getActivities("testuser", "");
    this.props.getActivityLog("testuser", "");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header>
            <h1> LVL </h1>
            <Nav>
              <NavButton to="/"> (Public) </NavButton>

              <NavButton to="/protected"> Protected </NavButton>

              <NavButton to="/login">Log In</NavButton>

              <NavButton to="/register">Register</NavButton>

              <NavButton to="/activitylog"> Activity Log</NavButton>

              <NavButton to="/reflectionlog"> Reflection Log</NavButton>
            </Nav>
          </Header>
          {/* <Route exact path="/" component={App} /> */}
          <Route
            path="/activitylog"
            render={props => (
              <ActivityLog
                {...props}
                getActivityLog={this.props.getActivityLog}
                activitiesLog={this.props.activitiesLog}
                activities={this.props.activities}
                addActivity={this.props.addActivity}
                addActivityLog={this.props.addActivityLog}
              />
            )}
          />
          <Route
            path="/reflectionlog"
            render={props => (
              <ReflectionLog
                {...props}
                reflections={this.props.reflections}
                addReflection={this.props.addReflection}
                addReflectionLog={this.props.addReflectionLog}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.activitiesLog);
  return {
    activitiesLog: state.activitiesLog,
    activities: state.activities,
    hasLatestActivities: state.hasLatestActivities,
    reflections: state.reflections
  };
}

export default connect(
  mapStateToProps,
  {
    getActivities,
    // addActivity,
    getActivityLog,
    addActivityLog,
    getReflectionLog,
    // addReflection,
    addReflectionLog
  }
)(App);
