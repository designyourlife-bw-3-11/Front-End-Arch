import React from "react";
import { connect } from "react-redux";
import { activityLogAction } from "../../actions";

const ActivityList = props => {
  return (
    <div className="Activity-List">
      {props.activities.map((activity, index) => (
        <h2 key={activity.id}> {activity.value} </h2>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(
  mapStateToProps,
  { activityLogAction }
)(ActivityList);
