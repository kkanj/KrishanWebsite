import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 h-screen">
                <Link to="/AboutMe" className={`row-span-2 ${styles.Card}`}>
                    <div className={`${styles.CardText} text-center`}>
                        about.
                    </div>
                </Link>
                <Link to="/Projects" className={`col-span-2 ${styles.Card}`}>
                    <div className={`${styles.CardText} text-center`}>
                        projects.
                    </div>
                </Link>
                <div className={`${styles.Card}`}>
                    <div className="text-center">
                        <div className={styles.Name}>Krishan Kanji</div>
                        <div className={`${styles.FSD}`}>
                            full-stack developer.
                        </div>
                    </div>
                </div>
                <Link to="/Contact" className={`row-span-2 ${styles.Card}`}>
                    <div className={`${styles.CardText} text-center`}>
                        contact.
                    </div>
                </Link>
                <Link to="/Placeholder" className={`col-span-2 ${styles.Card}`}>
                    <div className={`${styles.CardText} text-center`}>
                        ideas...
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
