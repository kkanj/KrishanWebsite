
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import {logo} from "../assets/index.js";
import NavigationBar from "../components/NavigationBar.jsx";

const Home = () => {
    return (
        <div className = "pl-[74px] py-10">
            <div className = "flex flex-col">
                <div className = "flex flex-row">
                    <img src = {logo} alt = "logo" className = "h-[128px] w-[128px]"/>
                    <h1 className = "text-name-text py-7">Krishan Kanji</h1>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div>
                    <NavigationBar/>
                </div>

                
            </div>
        </div>
    );
};

export default Home;
