import React, { Component } from "react";
// import { addActivity } from "../../actions";

import styled from "styled-components";
import ActivityList from "./ActivityList";

const Button = styled.button`
  background: grey;
  width: 8rem;
  margin-left: 2rem;
  margin: 20px;
  display: flex;
`;

const Input = styled.input`
  margin-left: 1rem;
  margin-bottom: 1.3rem;
  display: flex;
  align-content: center;
`;

class activityLog extends Component {
  state = {
    description: "",
    results: "",
    enjoyment: "",
    activities: [],
    logDate: "",
    outcomes: "",
    engagement: "",
    logActivity: ""
  };

  componentDidMount = () => {
    this.setState({ activities: this.props.activities });
    console.log(this.props.activities);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.activities !== this.props.activities)
      this.setState({ activities: this.props.activities });
    // console.log("update", this.props.activities);
  };

  handleFormChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddActivity = e => {
    const { description, results, enjoyment } = this.state;
    e.preventDefault();
    this.props.addActivity({ description, results, enjoyment });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log("works");
    this.props.addReflectionLog(this.state);
    // this.setState({ date: "", reflectionSummary: ""})
  };

  handleAddActivityLog = e => {
    e.preventDefault();
    const {
      logDate,
      outcomes,
      enjoyment,
      engagement,
      logActivity
    } = this.state;
    // debugger;
    const logData = {
      outcomes,
      date: new Date(logDate),
      activities: [{ name: logActivity, enjoyment, engagement }]
    };
    // debugger;
    this.props.addActivityLog(logData);
  };

  render() {
    const activityOptions =
      this.state.activities.length &&
      this.state.activities.map(activity => {
        // console.log(activity);
        return (
          <option value={activity.name} key={activity.id}>
            {activity.name}
          </option>
        );
      });
    return (
      <div>
        {/* <form onSubmit={this.handleAddActivity}>
          <select style={{ margin: "20px auto" }}>{activityOptions}</select>

          <Input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleFormChanges}
          />

          <Button type="submit"> Add Activity </Button>
        </form> */}

        <form onSubmit={this.handleAddActivityLog}>
          <select
            style={{ margin: "20px auto" }}
            onChange={this.handleFormChanges}
            name="logActivity"
            value={this.state.logActivity}
          >
            {activityOptions}
          </select>

          <Input
            type="text"
            name="logDate"
            placeholder="Date"
            value={this.state.logDate}
            onChange={this.handleFormChanges}
          />

          <Input
            type="text"
            name="outcomes"
            placeholder="Outcomes"
            autoComplete="off"
            value={this.state.outcomes}
            onChange={this.handleFormChanges}
          />

          <Input
            type="number"
            name="enjoyment"
            placeholder="Enjoyment (1-10)"
            value={this.state.enjoyment}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />

          <Input
            type="number"
            name="engagement"
            placeholder="Engagement (1-10)"
            value={this.state.engagement}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />

          <Button type="submit"> Add Activity Log </Button>

          <ActivityList {...this.props} />
        </form>
      </div>
    );
  }
}

export default activityLog;
