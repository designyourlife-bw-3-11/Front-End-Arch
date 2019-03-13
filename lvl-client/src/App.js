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
          <header>
            <h1> LVL </h1>
            <nav>
              <Link to="/"> (Public) </Link>

              <Link to="/protected"> Protected </Link>

              <Link to="/login"> Log In</Link>

              <Link to="/register">Register</Link>

              <Link to="/activitylog"> Activity Log</Link>
            </nav>
          </header>
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
