import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";


const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      
      <div className = {styles.MenuItemsPlacement}>
                    
        <NavLink to="/AboutMe">
            <div className = {styles.MenuItems}>
                About Me.
            </div>
        </NavLink>
        <NavLink to="/Projects">
            <div className = {styles.MenuItems}>
                Projects.
            </div>
        </NavLink>
        <NavLink to="/Contact">
            <div className = {styles.MenuItems}>
                Contact.
            </div>
        </NavLink>
        <NavLink to="/Home">
            <div className = {styles.MenuItems}>
                Home.
            </div>
        </NavLink>
                    
      </div>

    </div>

    );
  
  };
  
  export default NavigationBar;