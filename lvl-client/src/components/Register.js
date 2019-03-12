import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { withRouter } from "react-router";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state.credentials;
    if (password === confirmPassword) {
      this.props.registerUser({
        username: this.state.credentials.username,
        password
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <h4>Username: </h4>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <h4> Password: </h4>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <h4>Confirm Password: </h4>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.credentials.confirmPassword}
            onChange={this.handleChanges}
          />

          <button> Register </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistering: state.isRegistering
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(Register)
);
