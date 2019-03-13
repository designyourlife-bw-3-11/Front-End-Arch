import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";
import Register from "./components/Register";
import ActivityLog from "./components/activitylog/ActivityLog";
import { getActivities, addActivity, addActivityLog } from "./actions";
import { connect } from "react-redux";
// import styled from "styled-components";

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
          <h1> LVL </h1>

          <ul>
            <li>
              <Link to="/"> (Public) </Link>
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
            <li>
              <Link to="/activitylog"> Activity Log</Link>
            </li>
          </ul>
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
  { getActivities, addActivity, addActivityLog }
)(App);
