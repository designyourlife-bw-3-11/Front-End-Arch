import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: grey;
  width: 8rem;
  margin-left: 2rem;
`;

const Input = styled.input`
  margin-left: 1rem;
  margin-bottom: 1.3rem;
`;

class reflectionLog extends Component {
  state = {
    date: "",
    reflectionSummary: ""
  };

  //   componentDidMount = () => {
  //     this.setState({ activities: this.props.activities });
  //     console.log(this.props.activities);
  //   };

  //   componentDidUpdate = (prevProps, prevState) => {
  //     if (prevState.activities !== this.props.activities)
  //       this.setState({ activities: this.props.activities });
  //     // console.log("update", this.props.activities);
  //   };

  //   handleFormChanges = e => {
  //     e.preventDefault();
  //     const { name, value } = e.target;
  //     this.setState({ [name]: value });
  //   };

  //   handleAddActivity = e => {
  //     const { description, results, enjoyment } = this.state;
  //     e.preventDefault();
  //     this.props.addActivity({ description, results, enjoyment });
  //   };

  //   handleAddActivityLog = e => {
  //     e.preventDefault();
  //     const {
  //       logDate,
  //       outcomes,
  //       enjoyment,
  //       engagement,
  //       logActivity
  //     } = this.state;
  //     const logData = {
  //       date: new Date(logDate),
  //       outcomes,
  //       activities: [{ name: logActivity, enjoyment, engagement }]
  //     };
  //     this.props.addActivityLog(logData);
  //   };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddReflectionLog}>
          <h3> This is Your Reflection Log</h3>
          <Input
            type="text"
            name="date"
            placeholder="Date"
            value={this.state.logDate}
            onChange={this.handleFormChanges}
          />
          <Input
            type="text"
            name="reflectionSummary"
            placeholder="Reflection on your Weeks activities"
            value={this.state.reflectionSummary}
            onChange={this.handleFormChanges}
          />

          <Button type="submit"> Add Reflection </Button>
        </form>
      </div>
    );
  }
}

export default reflectionLog;
