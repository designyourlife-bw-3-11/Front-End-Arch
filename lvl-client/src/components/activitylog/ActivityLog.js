import React, { Component } from "react";
import { addActivity, getActivities } from "../../actions";
import { connect } from "react-redux";

class activityLog extends Component {
  state = {
    description: "",
    results: "",
    enjoyment: "",
    activities: this.props.activities
  };

  componentDidMount = () => {
    this.props.getActivities();
    // this.setState({ activities: activities });
  };

  handleFormChanges = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddActivity = e => {
    e.preventDefault();

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
            {" "}
            {activity.name}{" "}
          </option>
        );
      });
    return (
      <div>
        <form onSubmit={addActivity}>
          <select>{activityOptions}</select>

          <input
            type="text"
            placeholder="Description"
            autoComplete="off"
            value={this.state.description}
            onChange={this.handleFormChanges}
          />

          <input
            type="text"
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

          <button type="submit"> Add Activity</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(
  mapStateToProps,
  { getActivities, addActivity }
)(activityLog);
