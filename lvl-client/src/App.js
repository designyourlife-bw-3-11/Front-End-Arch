import React, { Component } from "react";
import { connect } from "react-redux";
import "./app.less";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";
import Register from "./components/Register";
import ActivityLog from "./components/activitylog/ActivityLog";
import {
  getActivities,
  addActivity,
  addActivityLog,
  getReflections,
  addReflection,
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

  &:hover {
    color: #81fffe;
    padding-bottom: 3px;
    margin-bottom: 7px;
    border-bottom: 1.5px solid #81fffe;
  }
`;

class App extends Component {
  componentDidMount = () => {
    this.props.getActivities();
    // console.log(this.props.getActivities());
    // this.setState({ activities: activities });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!this.props.hasLatestActivities) this.props.getActivities();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header>
            <h1> LVL </h1>
            <Nav>
              <Link to="/"> (Public) </Link>

              <Link to="/protected"> Protected </Link>

              <Link to="/login">Log In</Link>

              <Link to="/register">Register</Link>

              <Link to="/activitylog"> Activity Log</Link>

              <Link to="/reflectionLog"> Reflection Log</Link>
            </Nav>
          </Header>
          {/* <Route exact path="/" component={App} /> */}
          <Route
            path="/activityLog"
            render={props => (
              <ActivityLog
                {...props}
                activities={this.props.activities}
                addActivity={this.props.addActivity}
                addActivityLog={this.props.addActivityLog}
              />
            )}
          />
          <Route
            path="/reflectionLog"
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
  return {
    activities: state.activities,
    hasLatestActivities: state.hasLatestActivities
  };
}

export default connect(
  mapStateToProps,
  {
    getActivities,
    addActivity,
    addActivityLog,
    getReflections,
    addReflection,
    addReflectionLog
  }
)(App);
