import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/additional/main">
          Main
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/Results/results">Results</NavLink>  
            {!user &&(
            <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login/login">Login</NavLink>  
            <NavLink className="nav-item nav-link" to="/login/register">Register</NavLink> 
            </React.Fragment>
          )} 
            {user && user.class === "xylobolus" && <NavLink className="nav-item nav-link" to="/additional/tournament">Tournament</NavLink>}  
            {user && <NavLink className="nav-item nav-link" to="/login/logout">Logout</NavLink>}  
          </div>
          
        </div>
      </nav>
    );
}


export default NavBar;
