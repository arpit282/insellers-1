import React from "react";
import ReactDOM from "react-dom";

const SignIn = () => {
  return (
    <>
      <div class="login">
        <div class="form-row">
          <label for="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div class="form-row">
          <label for="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="rem-row">
          <input type="checkbox" id="rem" />
          <label for="rem">Remember me</label>
        </div>
        <div class="form-row">
          <button>Login</button>
        </div>
        <div class="row">
          <span>OR</span>
        </div>
        <div class="footer">
          <div class="social-form fb">
            <i class="fa fa-facebook"></i> Login with Facebook
          </div>
          <div class="social-form google">
            <i class="fa fa-google"></i> Login with Google
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
