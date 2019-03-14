import React from "react";
import { connect } from "react-redux";
import Activity from "./Activity";

class ActivityList extends React.Component {
  render() {
    // console.log(this.props.activities);
    return (
      <div className="Activity-List">
        <h1> Activities List</h1>
        {this.props.activitiesLog.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(ActivityList);
