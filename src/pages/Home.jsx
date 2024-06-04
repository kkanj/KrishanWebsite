import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import NavigationBar from "../components/NavigationBar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import MarqueeText from "../components/Marquee.jsx";

const Home = () => {
    return (
        <div className="">
            <div>
                <NavigationBar />
            </div>
        </div>
    );
};

export default Home;
