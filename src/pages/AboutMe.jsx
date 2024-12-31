import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { AboutCards } from "../components/AboutCards.jsx";
import berkeley from "../assets/images/berkeleyCard3.jpg";
import { NavMenuNew } from "../components/NavMenuNew.jsx";
import {
    BerkeleyLogo,
    Certificate,
    Github,
    Linkedin,
    Resume,
    Mail,
    Smile,
} from "../assets/index.js";

const MotionLink = motion(Link);
const MotionA = motion.a;

const about = () => {
    return (
        <motion.div
            className="h-screen w-full flex transform-gpu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.06,
            }}
        >
            <motion.div
                className="absolute z-50 transform-gpu flex justify-center items-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }} // Set duration and delay
            >
                <NavMenuNew className="pointer-events-auto" />
            </motion.div>

            <motion.div
                className="bg-gradient-to-r from-[#272727] to-[#555555] h-screen w-1/2 transform-gpu"
                variants={animations.slideHorizontal}
            >
                <motion.div
                    className="text-white font-sfpro h-screen flex flex-col justify-center mx-2 md:mx-4 lg:mx-10 xl:mx-16 space-y-1 2xl:space-y-2"
                    variants={animations.fade}
                >
                    <div className="font-light tracking-widest text-size0 md:text-size0 lg:text-size1 xl:text-size2">
                        Krishan Kanji
                    </div>
                    <div className="font-bold uppercase tracking-widest -space-y-1 md:-space-y-2 xl:-space-y-4 text-size0 md:text-size1 lg:text-size2 xl:text-size3 2xl:text-size4">
                        <div>Student</div>
                        <div>Software Engineer</div>
                    </div>
                    <div className="font-normal text-size0 md:text-size1 lg:text-size1 xl:text-size2">
                        Hi, I'm Krishan Kanji, a Computer Science and Data
                        Science student at UC Berkeley with a passion for
                        learning about the latest technologies, and building
                        projects that make a difference. Lately, I've immersed
                        myself in the world of artificial intelligence, learning
                        TensorFlow and PyTorch to develop custom neural
                        networks. I have also been exploring the intersection of
                        AI and robotics, which I believe will be imperative for
                        the progression of autonomy in tech. In my free time,
                        you'll find me coding, working on side projects, or just
                        exploring something new and exciting in the world of
                        tech.{" "}
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="flex-grow w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 2xl:gap-10 p-4 md:p-10 xl:p-14 2xl:p-22">
                <MotionLink
                    to="https://cdss.berkeley.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`md:col-span-2 ${styles.Card} `}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.04,
                        backgroundColor: "#003262", // Target background color on hover
                        color: "#FDB515", // Target text color on hover
                        outline: "4px solid",
                    }}
                    transition={{
                        scale: {
                            type: "spring",
                            bounce: 0.65,
                        },
                        backgroundColor: {
                            duration: 0.2, // Duration of the color transition
                            ease: "easeInOut", // This can be adjusted to other easing options
                            type: "tween", // Specify tween for the color transition
                        },
                        outline: {
                            duration: 0.4, // Duration for the outline transition
                            ease: "easeInOut", // Easing option for the outline transition
                            type: "tween", // Specify tween for the outline transition
                        },
                    }}
                >
                    <BerkeleyLogo className="w-[70%] h-auto" />
                </MotionLink>
                <MotionLink
                    to="https://www.linkedin.com/in/krishankanji/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#D2E6F4", // Target background color on hover
                        color: "#0077B5",
                        outline: "4px solid",
                    }}
                    transition={{
                        scale: {
                            type: "spring",
                            bounce: 0.65,
                        },
                        backgroundColor: {
                            duration: 0.2, // Duration of the color transition
                            ease: "easeInOut", // This can be adjusted to other easing options
                            type: "tween", // Specify tween for the color transition
                        },
                        outline: {
                            duration: 0.4, // Duration for the outline transition
                            ease: "easeInOut", // Easing option for the outline transition
                            type: "tween", // Specify tween for the outline transition
                        },
                    }}
                >
                    <Linkedin className="w-[45%] h-auto" />
                </MotionLink>
                <MotionLink
                    to="/contact"
                    rel="noopener noreferrer"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#B0CCAC", // Target background color on hover
                        color: "#3B6E55",
                        outline: "4px solid",
                    }}
                    transition={{
                        scale: {
                            type: "spring",
                            bounce: 0.65,
                        },
                        backgroundColor: {
                            duration: 0.2, // Duration of the color transition
                            ease: "easeInOut", // This can be adjusted to other easing options
                            type: "tween", // Specify tween for the color transition
                        },
                        outline: {
                            duration: 0.4, // Duration for the outline transition
                            ease: "easeInOut", // Easing option for the outline transition
                            type: "tween", // Specify tween for the outline transition
                        },
                    }}
                >
                    <Mail className="w-[45%] h-auto" />
                </MotionLink>

                <MotionA
                    href="/files/KrishanKanji-Resume.pdf" // Ensure this URL is accessible and points to the PDF file you want to preview
                    target="_blank" // Opens the PDF in a new tab
                    rel="noopener noreferrer"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#F6E6D8", // Target background color on hover
                        color: "#C46828",
                        outline: "4px solid",
                    }}
                    transition={{
                        scale: {
                            type: "spring",
                            bounce: 0.65,
                        },
                        backgroundColor: {
                            duration: 0.2, // Duration of the color transition
                            ease: "easeInOut", // This can be adjusted to other easing options
                            type: "tween", // Specify tween for the color transition
                        },
                        outline: {
                            duration: 0.4, // Duration for the outline transition
                            ease: "easeInOut", // Easing option for the outline transition
                            type: "tween", // Specify tween for the outline transition
                        },
                    }}
                >
                    <Resume className="w-[45%] h-auto" />
                </MotionA>
                <MotionLink
                    to="https://github.com/kkanj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#BCB1D5", // Target background color on hover
                        color: "#331662",
                        outline: "4px solid",
                    }}
                    transition={{
                        scale: {
                            type: "spring",
                            bounce: 0.65,
                        },
                        backgroundColor: {
                            duration: 0.2, // Duration of the color transition
                            ease: "easeInOut", // This can be adjusted to other easing options
                            type: "tween", // Specify tween for the color transition
                        },
                        outline: {
                            duration: 0.4, // Duration for the outline transition
                            ease: "easeInOut", // Easing option for the outline transition
                            type: "tween", // Specify tween for the outline transition
                        },
                    }}
                >
                    <Github className="w-[45%] h-auto" />
                </MotionLink>
            </motion.div>
        </motion.div>
    );
};

export default about;
