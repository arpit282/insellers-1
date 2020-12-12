import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto dropdown">
            <nav className="navbar navbar-expand-lg navbar-light  mt-4">
              <div className="container-fluid">
                <img
                  src="https://insellers.com/wp-content/uploads/2020/10/cropped-WhatsApp-Image-2020-10-30-at-1.25.42-PM-3-65x56.jpeg"
                  alt=""
                />
                <NavLink className="navbar-brand" to="/">
                  <h1 style={{ fontWeight: "900" }} className="ml-4">
                    Insellers
                  </h1>
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
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/About"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/Blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/Services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/Contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item active mr-3">
                      <NavLink
                        exact
                        activeClassName="active_class"
                        className="nav-link"
                        to="/Sign"
                      >
                        SignIn/SignUp
                      </NavLink>
                    </li>

                    <div className={classes.root} style={{ marginTop: "-7px" }}>
                      <Toolbar>
                        <div
                          className={classes.search}
                          style={{ background: "rgba(0,0,0,.02)" }}
                        >
                          <div className={classes.searchIcon}>
                            <SearchIcon />
                          </div>
                          <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                          />
                        </div>
                      </Toolbar>
                    </div>
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
