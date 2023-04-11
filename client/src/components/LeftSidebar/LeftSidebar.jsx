 import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to='/' className="side-nav-links" activeClassname="active">
          <p>Home</p>
        </NavLink>
        
        <div className="side-nav-div">
          <div><p>PUBLIC</p></div>

          <NavLink to='/Questions' className="side-nav-links">
            <img
              src='https://raw.githubusercontent.com/Kalyan-velu/StackOverflow-clone/94550802d69dbc7e6a05e4d9851aaafc0d8c5e97/client/src/assets/Globe.svg'   alt="globe"></img>
            <p style={{paddingLeft: "10px"}}>Questions</p></NavLink>

          <NavLink to="/Tags" className="side-nav-links" activeClassName="active" style={{paddingLeft: "40px"}}>
            <p>Tags</p></NavLink>

          <NavLink to="/Users" className="side-nav-links" activeClassName="active" style={{paddingLeft: "40px"}}>
            <p>Users</p>
          </NavLink>
        
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
