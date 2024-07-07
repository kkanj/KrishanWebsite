import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import animations from "../styling/animations.js";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import berkeley from "../assets/images/berkeleyCard3.jpg";
import {
    BerkeleyLogo,
    Certificate,
    Github,
    Linkedin,
    Resume,
    Mail,
    Smile,
    GoogleMeetGray,
    Map,
    Person,
    googlemeet,
} from "../assets/index.js";
import { NavMenu } from "../components/NavMenu.jsx";
import emailjs from "@emailjs/browser";
import { Send } from "../assets/index.js";

const MotionLink = motion(Link);
const MotionA = motion.a;

const contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const form = useRef();
    const [popupVisible, setPopupVisible] = useState(false); // Step 2: Popup visibility state
    const [popupMessage, setPopupMessage] = useState(""); // Step 2: Popup message state
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_1l65g4u", "template_918c0oj", form.current, {
                publicKey: "rmqyu3aX4pa1ywH_5",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setPopupMessage("Thank you, I'll get back to you soon"); // Step 3: Set success message
                    setPopupVisible(true); // Step 3: Show popup
                    setTimeout(() => setPopupVisible(false), 5000);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setPopupMessage("Error: Please try again"); // Step 3: Set error message
                    setPopupVisible(true); // Step 3: Show popup
                    setTimeout(() => setPopupVisible(false), 5000);
                }
            );
    };

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
            {popupVisible && ( // Step 4: Conditional rendering based on popupVisible state
                <div className="absolute top-0 left-0 right-1/2 bottom-0 flex justify-center items-center z-30 text-white">
                    <div className="bg-[#545454] px-8 py-4 rounded-2xl">
                        <p>{popupMessage}</p>
                    </div>
                </div>
            )}
            <motion.div className="h-screen w-screen absolute overflow-hidden z-0">
                <NavMenu />
            </motion.div>

            <motion.div
                className="bg-gradient-to-r from-[#272727] to-[#555555] h-screen w-1/2"
                variants={animations.slideHorizontal}
            >
                <motion.div
                    className="text-[#2D2D2D] font-sfpro h-screen flex flex-col justify-center mx-16 space-y-4 z-10"
                    variants={animations.fade}
                >
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="text-[#2D2D2D] font-sfpro h-screen flex flex-col justify-center mx-20 space-y-4 py-10 z-10 font-medium tracking-wide text-size2"
                    >
                        <div className="pl-1 py-1 font-sfpro font-semibold tracking-wider text-size9 bg-clip-text text-transparent bg-gradient-to-r from-[#727986] to-[#B6CDD7]">
                            Contact Me
                        </div>
                        <div className="text-white text-size4 pl-1 font-sfpro font-semibold tracking-wider py-1">
                            Let's Connect!
                        </div>
                        <input
                            type="text"
                            name="user_first_name"
                            placeholder="First Name"
                            className={`${styles.ContactInputBox} h-11 rounded-2xl `}
                        />
                        <input
                            type="text"
                            name="user_last_name"
                            placeholder="Last Name"
                            className={`${styles.ContactInputBox} h-11 rounded-2xl`}
                        />{" "}
                        {/* Note: Changed name attribute to user_last_name for clarity */}
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            className={`${styles.ContactInputBox} h-11 rounded-2xl`}
                        />
                        <textarea
                            name="message"
                            placeholder="Write something..."
                            className={`${styles.ContactInputBox} rounded-2xl h-72 py-3`}
                        ></textarea>
                        <button
                            type="submit"
                            className={`bg-[#727986] rounded-2xl focus:outline-none h-11 text-white hover:bg-[#8d96a6] transition-colors flex items-center justify-center`}
                        >
                            <Send
                                className="w-6 h-auto mr-2 tracking-wider"
                                style={{ stroke: "#ffffff" }}
                            />{" "}
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </motion.div>
            <motion.div className="flex-grow w-1/2 grid grid-cols-2 gap-10 p-40">
                <MotionLink
                    to="/contact"
                    rel="noopener noreferrer"
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
                    <Mail className="w-[45%] h-auto" />
                </MotionLink>

                <MotionA
                    
                    onClick={() => {
                        Calendly.initPopupWidget({
                            url: "https://calendly.com/krishankanji2003",
                        });
                        return false;
                    }}
                    
                    className={`${styles.Card} cursor-pointer`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#DBF4F1", // Target background color on hover
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
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? (
                        <img src={googlemeet} className="w-[45%] h-auto" alt="Google Meet" />
                    ) : (
                        <img src={GoogleMeetGray} className="w-[45%] h-auto" alt="Google Meet Gray" />
                    )}
                </MotionA>

                <MotionLink
                    to="/about"
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
                    <Person className="w-[45%] h-auto" />
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
                    <Map className="w-[45%] h-auto" />
                </MotionLink>
            </motion.div>
        </motion.div>
    );
};

export default contact;
