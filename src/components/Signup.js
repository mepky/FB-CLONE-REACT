import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>

        <div className="field">
          <input type="name" placeholder="Your Full Name " />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm_password" required />
        </div>
        <div className="field">
          <button>Sign Up</button>
        </div>
      </form>
    );
  }
}

export default Signup;
