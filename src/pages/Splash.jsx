import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import Typewriter from "../components/Typewriter.jsx";
import { motion } from "framer-motion";
import animations from "../styling/animations.js";

const Splash = () => {
    return (
        <motion.div
            className="flex h-screen"
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className="m-auto text-center"
                variants={animations.scaleName}
                whileHover={{ scale: 1.08 }}
                transition={{
                    type: "spring",
                    bounce: 0.72,
                }}
            >
                <Link to="/Home" className="m-auto text-center">
                    <div className={styles.Name}>YO BRO</div>
                    <div className={`${styles.FSD} `}>
                        <Typewriter />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Splash;
