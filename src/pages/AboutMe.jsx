import { React, useState, useEffect } from "react";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { AboutCards } from "../components/AboutCards.jsx";
import berkeley from "../assets/images/berkeleyCard3.jpg";

const about = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <motion.div
            className="flex flex-col h-screen"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.13,
            }}
        >
            <motion.div
                className={`${styles.Header} flex justify-center py-10`}
                variants={animations.fade}
                transition={{
                    type: "spring",
                    bounce: 0.72,
                }}
            >
                about
            </motion.div>
            <div className="grid grid-cols-5 gap-16 px-10 pb-10 flex-grow">
                <motion.div
                    className={`${styles.Card} text-center col-span-3 ${styles.CardText} cursor-pointer relative z-[9999]`}
                    variants={animations.scale}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                        type: "spring",
                        bounce: 0.72,
                        layout: {
                            duration: 1,
                            type: "spring",
                        },
                    }}
                    layout
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen && "me"}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="fixed inset-0 overflow-auto bg-red-500 z-[9999]"
                                initial={{
                                    width: "auto",
                                    height: "auto",
                                    top: 0,
                                    left: 0,
                                }}
                                animate={{
                                    width: "100vw",
                                    height: "100vh",
                                    top: 0,
                                    left: 0,
                                }}
                                exit={{
                                    width: "auto",
                                    height: "auto",
                                    top: 0,
                                    left: 0,
                                }}
                                transition={{ type: "tween" }}
                            >
                                HEY GUYS
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.div
                    className={`${styles.Card} text-center col-span-2 ${styles.CardText} cursor-pointer`}
                    variants={animations.scale}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                        type: "spring",
                        bounce: 0.72,
                    }}
                >
                    resume
                </motion.div>
                <motion.div
                    className={`${styles.Card} text-center col-span-2 ${styles.CardText} cursor-pointer`}
                    variants={animations.scale}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                        type: "spring",
                        bounce: 0.72,
                    }}
                >
                    tech stack
                </motion.div>
                <motion.div
                    className={`${styles.Card} text-center col-span-3 ${styles.CardText} cursor-pointer`}
                    variants={animations.scale}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                        type: "spring",
                        bounce: 0.72,
                    }}
                >
                    education
                </motion.div>
            </div>
        </motion.div>
    );
};

export default about;
