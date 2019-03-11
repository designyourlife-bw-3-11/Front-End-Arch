import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

export class Register extends Component {
    state = {
        credentials: {
            username: "",
            password: "",
            confirmPassword: "",
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    register = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push("/protected");
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.register}>
                    <input
                        type="text"
                        name= "username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.confirmPassword}
                        onChange={this.handleChanges}
                    />

                    <button> Register </button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { register }
)(Register);