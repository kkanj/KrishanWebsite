import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier } from "framer-motion";

const MotionLink = motion(Link);

const Home = () => {
    return (
        <div>
            <div>
                <motion.div
                    className="grid grid-cols-3 gap-11 p-10 md:grid-cols-2 lg:grid-cols-3 h-screen"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{
                        staggerChildren: 0.13,
                    }}
                >
                    <MotionLink
                        to="/about"
                        className={`row-span-2 ${styles.Card}`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: "spring",
                            bounce: 0.72,
                        }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            about
                        </div>
                    </MotionLink>

                    <MotionLink
                        to="/projects"
                        className={`col-span-2 ${styles.Card}`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: "spring",
                            bounce: 0.65,
                        }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            projects
                        </div>
                    </MotionLink>
                    <motion.div
                        className={`${styles.Card}`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                            type: "spring",
                            bounce: 0.72,
                        }}
                    >
                        <div className="text-center">
                            <div className={styles.Name}>Krishan Kanji</div>
                            <div className={`${styles.FSD}`}>
                                full-stack developer
                            </div>
                        </div>
                    </motion.div>
                    <MotionLink
                        to="/contact"
                        className={`row-span-2 ${styles.Card}`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: "spring",
                            bounce: 0.72,
                        }}
                    >
                        <div className={`${styles.CardText} text-center`}>
                            contact
                        </div>
                    </MotionLink>
                    <MotionLink
                        to="/placeholder"
                        className={`col-span-2 ${styles.Card}`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: "spring",
                            bounce: 0.65,
                        }}
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
