import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import {logo} from "../assets/index.js";

const NavigationBar = () => {
  return (
    <div className = "pl-[25px] py-[10px] border-r border-line-gray fixed top-0 bottom-0 px-[100px]">
        <div>
            <NavLink to="/">
                <img src = {logo} alt = "logo" className={`${styles.Logo} mb-[20px]`}/>
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
                <NavLink to="/Placeholder">
                    <div className = {styles.MenuItem}>
                        Placeholder.
                    </div>
                </NavLink>    
            </div>
        </div>
        <div className="absolute left-0 w-full border-b border-line-gray py-[20px]"/>
    </div>
    );
  
  };
  
  export default NavigationBar;