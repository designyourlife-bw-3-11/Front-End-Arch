import React, { Component } from "react";
import { addActivity, getActivities } from "../../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  background: grey;
  width: 8rem;
  margin-left: 2rem;
`;

class activityLog extends Component {
  state = {
    description: "",
    results: "",
    enjoyment: "",
    activities: this.props.activities
  };

  componentDidMount = () => {
    this.props.getActivities();
    console.log(this.props.getActivities());
    // this.setState({ activities: activities });
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

    // const newActivity = {
    //   description: this.state.description,
    //   results: this.state.results,
    //   enjoyment: this.state.enjoyment
    // };

    // this.props.addActivity(newActivity);
    // console.log("newactivity", newActivity);

    // this.setState({
    //   description: "",
    //   results: "",
    //   enjoyment: "",
    //   activities: []
    // });
  };

  render() {
    const activityOptions =
      this.state.activities.length &&
      this.state.activities.map(activity => {
        console.log(activity);
        return (
          <option value={activity.name} key={activity.id}>
            {activity.name}
          </option>
        );
      });
    return (
      <div>
        <form onSubmit={addActivity}>
          <select>{activityOptions}</select>

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleFormChanges}
          />

          <input
            type="text"
            name="results"
            placeholder="Results"
            autoComplete="off"
            value={this.state.results}
            onChange={this.handleFormChanges}
          />

          <input
            type="number"
            name="enjoyment"
            value={this.state.enjoyment}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />

          <Button type="submit"> Add Activity </Button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

export default connect(
  mapStateToProps,
  { getActivities, addActivity }
)(activityLog);
