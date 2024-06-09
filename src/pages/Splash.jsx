import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import NavigationBar from "../components/NavigationBar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import MarqueeText from "../components/Marquee.jsx";
import { motion } from "framer-motion";

const Splash = () => {
    return (
        <motion.div
        initial={{opacity: 0 }}
        animate={{opacity: 1, scale: 1}}
        exit={{scale: 0, opacity: 0}}
        transition={{ duration: 0.15}}
        >
            <div className="flex h-screen">
                <Link to="/Home" className="m-auto text-center">
                    <div className={styles.Name}>Krishan Kanji</div>
                    <div className={`${styles.FSD} `}>
                        <Typewriter />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Splash;
