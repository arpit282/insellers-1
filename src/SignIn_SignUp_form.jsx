import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ChangeTab from "./popup";

const SignIn_SignUp_form = () => {
  return (
    <>
      <div class="form">
        <div class="head" className="signup">
          <div onclick="changeTab(this)" data-tab="login" class="login-tab">
            Login
          </div>
          <div onclick="changeTab(this)" data-tab="signup" class="signup-tab">
            Signup
          </div>
        </div>
        <div class="body" id="form-body">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default SignIn_SignUp_form;
