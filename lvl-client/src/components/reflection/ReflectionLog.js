import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addReflectionLog } from "../../actions";

const Button = styled.button`
  background: grey;
  width: 8rem;
  margin-left: 2rem;
`;

const Input = styled.input`
  margin-left: 1rem;
  margin-bottom: 1.3rem;
`;

const SummaryInput = styled.input`
  width: 25rem;
  height: 7rem;
  margin-left: 2rem;
`;

class reflectionLog extends React.Component {
  state = {
    date: "",
    reflectionSummary: "",
    reflections: []
  };

  componentDidMount = () => {
    this.setState({ reflections: this.props.reflections });
    console.log(this.props.reflections);
  };

  //   componentDidUpdate = (prevProps, prevState) => {
  //     if (prevState.activities !== this.props.activities)
  //       this.setState({ activities: this.props.activities });
  //     console.log("update", this.props.reflectionLog);
  //   };

  handleFormChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log("works");
    this.props.addReflectionLog(this.state);
    this.setState({ date: "", reflectionSummary: "" });
  };

  //   handleAddActivity = e => {
  //     const { description, results, enjoyment } = this.state;
  //     e.preventDefault();
  //     this.props.addActivity({ description, results, enjoyment });
  //   };

  //   handleAddActivityLog = e => {
  //     e.preventDefault();
  //     const { logDate, reflectionSummary } = this.state;
  //     const logData = {
  //       date: new Date(logDate),
  //       outcomes,
  //       reflections: [{ name: logReflection }]
  //     };
  //     this.props.addActivityLog(logData);
  //   };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddReflectionLog}>
          <h3>This is Your Reflection Log</h3>
          <Input
            style={{ margin: "20px auto", display: "block" }}
            type="text"
            name="logDate"
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleFormChanges}
          />
          <SummaryInput
            style={{ margin: "20px auto", display: "block" }}
            type="text"
            name="reflectionSummary"
            placeholder="Reflection on your Weeks activities"
            // value={this.state.reflectionSummary}
            // onChange={this.handleFormChanges}
          />

          <Button
            style={{ margin: "20px auto", display: "block" }}
            type="submit"
          >
            Add Reflection
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addReflectionLog }
)(reflectionLog);
