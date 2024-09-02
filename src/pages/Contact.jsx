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
import SendButton from "../components/SendButton.jsx";

const MotionLink = motion(Link);
const MotionA = motion.a;

const contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [popupVisible, setPopupVisible] = useState(false); // Step 2: Popup visibility state
    const [popupMessage, setPopupMessage] = useState(""); // Step 2: Popup message state
    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            subject: subject,
            message: message, // Use message directly
        });

        console.log("Request Body:", requestBody); // Log the JSON string

        const response = await fetch(
            "https://u5e1gszaa1.execute-api.us-east-2.amazonaws.com/default", // Replace with your API Gateway endpoint
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody, // Use the pre-stringified requestBody
            }
        );

        if (response.ok) {
            const result = await response.json();
            setPopupMessage("Thank you, I'll get back to you soon");
            setPopupVisible(true);
            setTimeout(() => setPopupVisible(false), 3000);
            setEmail("");
            setSubject("");
            setMessage("");
            setFirstName("");
            setLastName("");
        } else {
            const errorText = await response.text();
            setPopupMessage(`Failed to send message. Error: ${errorText}`);
            setPopupVisible(true);
            setTimeout(() => setPopupVisible(false), 3000);
        }
    };

    return (
        <motion.div
            className="h-screen w-full flex overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                staggerChildren: 0.06,
            }}
        >
            <motion.div className="h-screen w-screen absolute overflow-hidden z-0">
                <NavMenu />
            </motion.div>

            <motion.div className="h-screen w-1/2" variants={animations.fade}>
                <motion.div
                    className="text-[#2D2D2D] font-sfpro h-screen flex flex-col justify-center mx-16 space-y-4 px-20"
                    variants={animations.slideHorizontal}
                >
                    <h1 className="text-4xl font-bold -mb-5 px-1">
                        I’d Love to hear from you.{" "}
                    </h1>
                    <h1 className="text-size2 font-bold pb-3 px-1">
                        Leave a message below, and I’ll get back to you as soon
                        as possible.{" "}
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full py-16 bg-[#F9F9F9] p-8 rounded-2xl outline outline-3 outline-[#D9D9D9] shadow-md z-20"
                    >
                        <div className="mb-5">
                            <input
                                type="text"
                                id="subject"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="shadow appearance-none outline outline-2 outline-[#727986] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-[#4169e1] "
                                required
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="text"
                                id="subject"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="shadow appearance-none outline outline-2 outline-[#727986] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-[#4169e1] "
                                required
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none outline outline-2 outline-[#727986] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-[#4169e1] "
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="shadow appearance-none outline outline-2 outline-[#727986] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:outline-[#4169e1] "
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="mb-16">
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none outline outline-2 outline-[#727986] rounded-xl w-full py-2 px-3 h-40 text-gray-700 leading-tight focus:outline focus:outline-[#4169e1] "
                                required
                                placeholder="Type your message here..."
                            />
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <SendButton type="submit" />
                        </div>
                    </form>
                    {popupVisible && (
                        <motion.div
                            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            {popupMessage}
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
            <motion.div
                variants={animations.slideVertical}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex-grow w-1/2 grid grid-cols-2 gap-10 p-40 bg-gradient-to-r to-[#272727] from-[#555555]"
            >
                <MotionA
                    href="mailto:krishankanji@berkeley.edu?cc=krishankanji2003@gmail.com"
                    target="_blank"
                    className={`${styles.Card}`}
                    variants={animations.scale}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#F2C0D2", // Target background color on hover
                        color: "#7A3850",
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
                    }}
                >
                    <Mail className="w-[45%] h-auto" />
                </MotionA>

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
                        color: "#258075",
                        outline: "4px solid ",
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
                        <img
                            src={googlemeet}
                            className="w-[45%] h-auto"
                            alt="Google Meet"
                        />
                    ) : (
                        <img
                            src={GoogleMeetGray}
                            className="w-[45%] h-auto"
                            alt="Google Meet Gray"
                        />
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
                    }}
                >
                    <Map className="w-[45%] h-auto" />
                </MotionLink>
            </motion.div>
        </motion.div>
    );
};

export default contact;
