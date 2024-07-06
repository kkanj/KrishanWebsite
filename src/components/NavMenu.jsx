import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import animations from "../styling/animations.js";

export const NavMenu = () => {
    const [active, setActive] = useState(false);
    return (
        <motion.div
            className="absolute flex items-center inset-0 place-content-center pointer-events-auto "
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animations.scaleMenu}
        >
            <MotionConfig
                transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                }}
            >
                <motion.button
                    initial={false}
                    animate={active ? "open" : "closed"}
                    onClick={() => setActive((pv) => !pv)}
                    className="relative h-16 w-16 rounded-full bg-[#727986] transition-colors hover:bg-[#626D73] focus:outline-none cursor-pointer"
                >
                    <motion.span
                        variants={VARIANTS.top}
                        className="absolute h-1 w-8 bg-white "
                        style={{
                            y: "-50%",
                            left: "50%",
                            x: "-50%",
                            top: "35%",
                        }}
                    />
                    <motion.span
                        variants={VARIANTS.middle}
                        className="absolute h-1 w-8 bg-white"
                        style={{
                            left: "50%",
                            x: "-50%",
                            top: "50%",
                            y: "-50%",
                        }}
                    />
                    <motion.span
                        variants={VARIANTS.bottom}
                        className="absolute h-1 w-8 bg-white"
                        style={{
                            x: "-50%",
                            y: "50%",
                            bottom: "35%",
                            left: "calc(50%)",
                        }}
                    />
                </motion.button>
            </MotionConfig>
        </motion.div>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50%)",
        },
    },
};
