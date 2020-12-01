import React from "react";
import ReactDOM from "react-dom";

const SignUp = () => {
  return (
    <>
      <div class="signup">
        <div class="form-row">
          <label for="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div class="form-row">
          <label for="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div class="form-row">
          <label for="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="form-row">
          <label for="">Retype Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="rem-row">
          <input type="checkbox" id="agr" />
          <label for="agr">Agree terms & conditions.</label>
        </div>
        <div class="form-row">
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
