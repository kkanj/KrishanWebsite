import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styling/Home.module.js";
import Typewriter from "../components/Typewriter.jsx";
import { motion } from "framer-motion";
import animations from "../styling/animations.js";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

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
                <div className="m-auto text-center">
                    <div className={styles.Name}>Krishan Kanji</div>
                    <div className={`${styles.FSD} `}>
                        <Typewriter />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Splash;
