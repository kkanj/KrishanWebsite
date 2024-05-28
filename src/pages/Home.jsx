import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import { logo } from "../assets/index.js";
import NavigationBar from "../components/NavigationBar.jsx";

const Home = () => {
    return (
        <div className="">
            <div>
                <NavigationBar />
                <div className="flex flex-row ml-[150px]">
                    <h1 className="text-nameText text-med-gray py-7">
                        Hi, I'm <span className="text-name-text font-sfpro">Krishan.</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
