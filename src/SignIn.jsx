import React from "react";
import ReactDOM from "react-dom";

const SignIn = () => {
  return (
    <>
      {/* <div class="wrapper">
        <div class="title-text">
          <div class="title login">Login Form</div>
          <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" class="slide login">
              Login
            </label>
            <label for="signup" class="slide signup">
              Signup
            </label>
            <div class="slider-tab"></div>
          </div>
          <div class="form-inner">
            <form action="#" class="login">
              <div class="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div class="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div class="signup-link">
                Not a member? <a href="">Signup now</a>
              </div>
            </form>
            <form action="#" class="signup">
              <div class="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div class="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div class="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
