import React from "react";
import './SignIn.css'
const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>

        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2">Login</button>
      </div>
    </div>
  );
};

export default SignIn;
