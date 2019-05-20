import React, { Component } from "react";

function validate(email, password, confirmPassword) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0 || !email.includes("@"),
    password: password.length <= 8,
    confirmPassword: confirmPassword !== password
  };
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
      this.state.password,
      this.state.confirmPassword
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(
      this.state.email,
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
            className={errors.password ? "error" : ""}
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input
            className={errors.password ? "error" : ""}
            type="password"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
          <button disabled={isDisabled}>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Register;