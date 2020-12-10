// import React from "react";
// import ReactDOM from "react-dom";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ChangeTab from "./popup";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

// const SignIn_SignUp_form = () => {
//   return (
//     <>
//       <div class="form">
//         <div class="head" className="signup">
//           <div onclick="changeTab(this)" data-tab="login" class="login-tab">
//             Login
//           </div>
//           <div onclick="changeTab(this)" data-tab="signup" class="signup-tab">
//             Signup
//           </div>
//         </div>
//         <div class="body" id="form-body">
//           <SignIn />
//           <SignUp />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn_SignUp_form;
class SignIn_SignUp_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLogin: false,
      activeSignUp: false
    };
  }

  render() {
    return (
      <div class="form">
        <div class="head" className="signup">
          <div
            onClick={() =>
              this.setState({
                activeLogin: true,
                activeSignUp: false
              })
            }
            data-tab="login"
            className={this.state.activeLogin ? "active_class" : null}
          >
            Login
          </div>
          <div
            onClick={() =>
              this.setState({
                activeLogin: false,
                activeSignUp: true
              })
            }
            data-tab="signup"
            className={this.state.activeSignUp ? "active_class" : null}
          >
            Signup
          </div>
        </div>
        <div class="body" id="form-body">
          <SignIn />
          <SignUp />
        </div>
      </div>
    );
  }
}
export default SignIn_SignUp_form;
