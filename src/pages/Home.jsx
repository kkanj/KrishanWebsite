import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import NavigationBar from "../components/NavigationBar.jsx";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="">
                <div>
                    <NavigationBar />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
