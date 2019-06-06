import React, { Component } from "react";
import * as userService from "../services/userService";

function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0 || !email.includes("@") || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    password: password.length < 8
  };
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = async evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    
    alert(`Signed in with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  onSubmit = async () =>{
    try{
      console.log("Spierdoliło się czy nie?");
      const {data: jwt} = await userService.login(this.state);
      console.log(jwt);
      localStorage.setItem('token', jwt);
      window.location = "/";
    } catch(ex){
      if(ex.eresponse && ex.response.status === 400){
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }

    }
    
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div className="container col-sm-12 col-md-8">
        <form onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input
            className={errors.email ? "error" : ""}
            type="text"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            className={errors.password ? "error" : ""}
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button disabled={isDisabled} onClick={this.onSubmit}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
