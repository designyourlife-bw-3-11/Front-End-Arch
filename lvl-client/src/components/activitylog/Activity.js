import React from "react";

const Activity = props => {
  return (
    <div>
      {/* <p> {props.activity.results}</p>
      <p> {props.activity.enjoyment}</p> */}
      <p> {props.activity.activities}</p>
      {props.activity.activities.map(item => (
        <p> {item.enjoyment}</p>
      ))}
      {/* <p> {props.activity.outcomes}</p>
      <p> {props.activity.engagement}</p> */}
    </div>
  );
};

export default Activity;
