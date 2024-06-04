import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import NavigationBar from "../components/NavigationBar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import MarqueeText from "../components/Marquee.jsx";

const Splash = () => {
    return (
        <div className="flex h-screen">
            <NavLink to="/Home" className="m-auto text-center">
                <div className={styles.Name}>
                    Krishan Kanji
                    </div>
                <div className={`${styles.FSD} `}>
                    <Typewriter />
                </div>
            </NavLink>
        </div>
    );
};

export default Splash;
