import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { AboutCards } from "../components/AboutCards.jsx";
import berkeley from "../assets/images/berkeleyCard3.jpg";
import {
    BerkeleyLogo,
    Certificate,
    Github,
    Linkedin,
    Resume,
    Mail,
    Smile,
} from "../assets/index.js";
import { NavMenu } from "../components/NavMenu.jsx";

const MotionLink = motion(Link);
const MotionA = motion.a;

const contact = () => {
    return (
        <motion.div
            style={{ overflow: "hidden", height: "100vh" }}
            className="h-screen w-full flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.06,
            }}
        >
            <motion.div variants={animations.fade} className="z-20">
                <NavMenu />
            </motion.div>
            <motion.div
                className="bg-gradient-to-r from-[#272727] to-[#555555] h-screen w-1/2"
                variants={animations.slideVertical}
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
                        Hi, I’m Krishan Kanji, Lorem ipsum dolor sit amet,
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
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#F2C0D2", // Target background color on hover
                        color: "#7A3850",
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
                    }}
                >
                    <Smile className="w-[45%] h-auto" />
                </motion.div>

                <MotionA
                    href="/files/KrishanKanji-Resume.pdf" // Ensure this URL is accessible and points to the PDF file you want to preview
                    target="_blank" // Opens the PDF in a new tab
                    rel="noopener noreferrer"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#FFDCB0", // Target background color on hover
                        color: "#B86500",
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
                    }}
                >
                    <Github className="w-[45%] h-auto" />
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
                    }}
                >
                    <Mail className="w-[45%] h-auto" />
                </MotionLink>
            </motion.div>
        </motion.div>
    );
};

export default contact;
