import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier } from "framer-motion";
import Typewriter from "../components/Typewriter.jsx";
import projects from "../components/projectData";

// Function to preload images
const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

const MotionLink = motion(Link);

const Home = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);
    useEffect(() => {
        // Preload images when the component mounts
        const imageUrls = projects.map((project) => project.image);
        preloadImages(imageUrls);
    }, []);

    useEffect(() => {
        setShowTypewriter(true);
    }, []);
    

    return (
        <div>
            <div>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 2xl:gap-10 p-2 md:p-4 xl:p-8 2xl:p-10 h-screen pb-24 md:pb-0"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{
                        staggerChildren: 0.12,
                    }}
                >
                    <MotionLink
                        to="/about"
                        className={`md:row-span-2 ${styles.Card} hover:outline-none `}
                        variants={animations.scale}
                        whileHover={{ scale: 1.025 }}
                        transition={{
                            type: "tween",
                            duration: 0.1,
                            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
                        }}
                        style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                    >
                        <div
                            className={`${styles.CardText} text-center transform-gpu`}
                        >
                            about
                        </div>
                    </MotionLink>

                    <MotionLink
                        to="/projects"
                        className={`md:col-span-2 ${styles.Card} hover:outline-none`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.025 }}
                        transition={{
                            type: "tween",
                            duration: 0.1,
                            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
                        }}
                        style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                    >
                        <div
                            className={`${styles.CardText} text-center transform-gpu`}
                        >
                            projects
                        </div>
                    </MotionLink>
                    <motion.div
                        className={`col-span-2 md:col-span-1 ${styles.Card} hover:outline-none`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                            type: "tween",
                            duration: 0.1,
                            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
                        }}
                        style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                    >
                        <div className="text-center transform-gpu ">
                            <div className={styles.Name}>Krishan Kanji</div>
                            <div
                                className={`${styles.FSD}`}
                                style={{ minHeight: "2em" }}
                            >
                                {showTypewriter ? <Typewriter /> : null}
                            </div>
                        </div>
                    </motion.div>
                    <MotionLink
                        to="/contact"
                        className={`md:row-span-2 ${styles.Card} hover:outline-none`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.025 }}
                        transition={{
                            type: "tween",
                            duration: 0.1,
                            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
                        }}
                        style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                    >
                        <div
                            className={`${styles.CardText} text-center transform-gpu`}
                        >
                            contact
                        </div>
                    </MotionLink>
                    <MotionLink
                        to="/experience"
                        className={`md:col-span-2 ${styles.Card} hover:outline-none`}
                        variants={animations.scale}
                        whileHover={{ scale: 1.025 }}
                        transition={{
                            type: "tween",
                            duration: 0.1,
                            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
                        }}
                        style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                    >
                        <div
                            className={`${styles.CardText} text-center transform-gpu`}
                        >
                            experience
                        </div>
                    </MotionLink>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
