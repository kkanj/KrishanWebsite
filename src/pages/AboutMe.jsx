import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { AboutCards } from "../components/AboutCards.jsx";
import berkeley from "../assets/images/berkeleyCard3.jpg";
import { NavMenu } from "../components/NavMenu.jsx";
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
            className="h-screen w-full flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.06,
            }}
        >
            <motion.div className="h-screen w-screen absolute overflow-hidden">
                <NavMenu />
            </motion.div>

            <motion.div
                className="bg-gradient-to-r from-[#272727] to-[#555555] h-screen w-1/2"
                variants={animations.slideHorizontal}
            >
                <motion.div
                    className="text-white font-sfpro h-screen flex flex-col justify-center mx-16 space-y-2"
                    variants={animations.fade}
                >
                    <div className="font-light text-size2 tracking-widest">
                        Krishan Kanji
                    </div>
                    <div className="font-bold text-size4 uppercase tracking-widest -space-y-4">
                        <div>Student</div>
                        <div>Software Engineer</div>
                        <div>Full Stack Developer</div>
                    </div>
                    <div className="text-size3 font-normal mr-[145px]">
                        Hi, I'm Krishan Kanji, Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Quisque quis sagittis
                        massa, ac pharetra urna. Proin iaculis, augue sed
                        finibus dapibus, nisl quam egestas urna, vitae auctor
                        justo metus vitae lectus. In gravida, velit a venenatis
                        maximus, purus tortor placerat dui, ut ullamcorper arcu
                        ligula.{" "}
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="flex-grow w-1/2 grid grid-cols-2 gap-10 p-40">
                <MotionLink
                    to="https://cdss.berkeley.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`col-span-2 ${styles.Card} `}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.04,
                        backgroundColor: "#003262", // Target background color on hover
                        color: "#FFD100", // Target text color on hover
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
                        backgroundColor: "#FFDAB9", // Target background color on hover
                        color: "#BA5E0B",
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
