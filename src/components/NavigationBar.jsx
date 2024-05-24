import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import {logo} from "../assets/index.js";

const NavigationBar = () => {
  return (
    <div className = "pl-[25px] py-[10px] border-r border-line-gray fixed top-0 bottom-0">
        <div>
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
                <div className = {styles.CategoryItem}>
                    Contact.
                </div>
            </NavLink>    
            </div>
        </div>
    </div>
    );
  
  };
  
  export default NavigationBar;