import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto dropdown">
            <nav className="navbar navbar-expand-lg navbar-light  mt-4">
              <div className="container-fluid">
                <img src="https://insellers.com/wp-content/uploads/2020/10/cropped-WhatsApp-Image-2020-10-30-at-1.25.42-PM-3-65x56.jpeg" alt=""/>
                <NavLink className="navbar-brand" to="/">
                  <h1 style={{fontWeight:'900'}} className='ml-4'>Insellers</h1>
                </NavLink>
                
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto dropdown-btn">
                    <li className="nav-item active mr-3">
                    <NavLink exact activeClassName='active_class' className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink exact activeClassName='active_class' className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink exact activeClassName='active_class' className="nav-link" to="/Blog">
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink exact activeClassName='active_class' className="nav-link" to="/Services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink exact activeClassName='active_class' className="nav-link" to="/Contact">
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink exact activeClassName='active_class' className="nav-link" to="/Sign">
                        SignIn/SignUp
                      </NavLink>
                    </li>
                  <NavLink to=''><SearchIcon className="ml-3 mt-2" /></NavLink>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
