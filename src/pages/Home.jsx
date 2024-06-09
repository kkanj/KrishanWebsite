import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, useAnimate, stagger } from "framer-motion";

const MotionLink = motion(Link);

const Home = () => {
    return (
        <div>
            <div>
                <motion.div 
                className="grid grid-cols-3 gap-11 p-10 md:grid-cols-2 lg:grid-cols-3 h-screen"
                
                >
                    <MotionLink
                        to="/AboutMe"
                        className={`row-span-2 ${styles.Card}`}
                        initial={{ translateX: -1000 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -1000 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            about
                        </div>
                    </MotionLink>

                    <MotionLink
                        to="/Projects"
                        className={`col-span-2 ${styles.Card}`}
                        initial={{ translateY: -1000 }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: -1000 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            projects
                        </div>
                    </MotionLink>
                    <motion.div className={`${styles.Card}`}
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 1, scale: 0}}
                    transition={{ duration: 0.15}}
                    >
                        <div className="text-center">
                            <div className={styles.Name}>Krishan Kanji</div>
                            <div className={`${styles.FSD}`}>
                                full-stack developer
                            </div>
                        </div>
                    </motion.div>
                    <MotionLink
                        to="/Contact"
                        className={`row-span-2 ${styles.Card}`}
                        initial={{ translateX: 1000 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 1000 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            contact
                        </div>
                    </MotionLink>
                    <MotionLink
                        to="/Placeholder"
                        className={`col-span-2 ${styles.Card}`}
                        initial={{ translateY: 1000 }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: 1000 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            experience
                        </div>
                    </MotionLink>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
