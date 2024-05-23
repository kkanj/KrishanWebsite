import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import {logo} from "../assets/index.js";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
        <NavLink to="/">
            <img src = {logo} alt = "logo" className={`${styles.Logo} -ml-[12px] mb-[5px]`}/>
        </NavLink>
    
      <div className = {styles.MenuPlacement}>
        
        <NavLink to="/AboutMe">
            <div className = {styles.MenuItem}>
                About Me.
            </div>
        </NavLink>
        <NavLink to="/Projects">
            <div className = {styles.MenuItem}>
                Projects.
            </div>
        </NavLink>
        <NavLink to="/Contact">
            <div className = {styles.MenuItem}>
                Contact.
            </div>
        </NavLink>
        
                    
      </div>

    </div>

    );
  
  };
  
  export default NavigationBar;