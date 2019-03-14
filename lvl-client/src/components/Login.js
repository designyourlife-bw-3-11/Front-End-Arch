import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <h4>Username: </h4>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <h4>Password: </h4>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />

          <button> Log In </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
