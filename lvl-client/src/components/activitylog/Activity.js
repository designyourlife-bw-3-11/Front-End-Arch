import React from "react";
import "../../index.css";

const Activity = props => {
  return (
    <div className="Activity-card">
      <p> {props.activity.outcomes}</p>
      <p> {props.activity.date}</p>
      {props.activity.activities.map(item => (
        <>
          <p> {item.name}</p>
          <p> {item.enjoyment}</p>
        </>
      ))}
      {/* <p> {props.activity.engagement}</p> */}
    </div>
  );
};

export default Activity;
