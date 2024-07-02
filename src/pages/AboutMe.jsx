import { React, useState, useEffect } from "react";
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
} from "../assets/index.js";

const about = () => {
    return (
        <motion.div
            className="h-screen w-full flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.05,
            }}
        >
            <motion.div
                className="bg-gradient-to-r from-[#272727] to-[#555555] h-screen w-1/2"
                variants={animations.slide}
            >
                <motion.div
                    className="text-white font-sfpro h-screen flex flex-col justify-center mx-16 space-y-2"
                    variants={animations.fade}
                >
                    <div className="font-light text-size1 tracking-widest">
                        Krishan Kanji
                    </div>
                    <div className="font-bold text-size4 uppercase tracking-widest -space-y-4">
                        <div>Student</div>
                        <div>Software Engineer</div>
                        <div>Full Stack Developer</div>
                    </div>
                    <div className="text-size2 font-normal mr-[145px]">
                        Hi, I'm Krishan, Lorem ipsum dotum postem, eacts poterem
                        sonductiom socar, potar soncreates. creates botara
                        pogaraon dontaragous ponst voltaic, ipsact cortus tange.
                        Pancer forgoc bimki dascuo plon humings. Lorem ipsum
                        dotum postem, eacts poterem sonductiom socar, potar
                        soncreates. creates botara ponst voltaic, ipsact cortus
                        tange. Pancer forgoc bimki dascuo plon humings.{" "}
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="flex-grow w-1/2 grid grid-cols-3 gap-11 p-[200px]">
                <motion.div
                    className={`col-span-2 ${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#003262", // Target background color on hover
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
                    <BerkeleyLogo className="w-[70%] h-auto" />
                </motion.div>
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#D2E6F4", // Target background color on hover
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
                    <Linkedin className="w-[45%] h-auto" />
                </motion.div>
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#B0CCAC", // Target background color on hover
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
                </motion.div>
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#FFF4BD", // Target background color on hover
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
                </motion.div>
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#A094B9", // Target background color on hover
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
                </motion.div>
                <motion.div
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#E89F9F", // Target background color on hover
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
                    <Certificate className="w-[45%] h-auto" />
                </motion.div>
                <motion.div
                    className={`col-span-2 ${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.65 }}
                >
                    yo fam
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default about;
