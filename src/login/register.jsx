import React, { Component } from "react";
import * as userService from "../services/userService"

function validate(email, username, password, confirmPassword) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0 || !email.includes("@") || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    username: username.length === 0,
    password: password.length < 8,
    confirmPassword: confirmPassword !== password || confirmPassword < 8
  };
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",

      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleUsernameChange = evt => {
    this.setState({ username: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleConfirmPasswordChange = evt => {
    this.setState({ confirmPassword: evt.target.value });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.email,
      this.state.username,
      this.state.password,
      this.state.confirmPassword
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  onSubmit = async () =>{
    try{
      const response = await userService.register(this.state);
      console.log(response);
      console.log(response.data['token']);
      localStorage.setItem('token', response.data['token']);
      this.props.history.push("/Main");
    } catch(ex){
      if(ex.eresponse && ex.response.status === 400){
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }

    }
    
  }

  render() {
    const errors = validate(
      this.state.email,
      this.state.username,
      this.state.password,
      this.state.confirmPassword
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div className="container col-sm-12 col-md-8">
        <form onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
          <input
            className={errors.email ? "error" : ""}
            type="text"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            className={errors.username ? "error" : ""}
            type="text"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            className={errors.password ? "error" : ""}
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input
            className={errors.confirmPassword ? "error" : ""}
            type="password"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
          <button disabled={isDisabled} onClick={this.onSubmit}>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Register;
