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
import InputEmail from "../components/Inputs/InputEmail.jsx";
import InputSubject from "../components/Inputs/InputSubject.jsx";
import InputMessage from "../components/Inputs/ImputMessage.jsx";
import InputLastName from "../components/Inputs/InputLastName.jsx";
import InputFirstName from "../components/Inputs/InputFirstName.jsx";

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
            className="h-screen w-full flex overflow-hidden "
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

            <motion.div
                className="h-screen w-1/2 bg-gradient-to-r from-[#ffffff] to-[#e8e8e8]"
                variants={animations.slideHorizontal}
            >
                {popupVisible && (
                    <div className="fixed inset-y-0 left-0 flex items-center justify-center w-1/2 z-50">
                        <motion.div
                            className="flex items-center justify-center bg-green-500 text-white p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {popupMessage}
                        </motion.div>
                    </div>
                )}
                <motion.div
                    className="text-[#2D2D2D] font-sfpro h-screen flex flex-col justify-center px-3 md:px-6 lg:px-9 xl:px-14"
                    variants={animations.slideHorizontal}
                >
                    <h1 className="text-size1 lg:text-size2 xl:text-size3 2xl:text-size5 font-bold -mb-1 xl:-mb-3 2xl:-mb-5">
                        I’d love to hear from you.{" "}
                    </h1>
                    <h1 className="text-size0 lg:text-size1 xl:text-size2 2xl:text-size3 font-bold pb-1 xl:pb-3">
                        Leave a message below, and I’ll get back to you as soon
                        as possible.{" "}
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full bg-[#F9F9F9] px-3 rounded-2xl outline outline-3 outline-[#D9D9D9] shadow-md z-20"
                    >
                        <div className="-mb-6">
                            <InputFirstName
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="text-size0"
                                required
                            />
                        </div>
                        <div className="-mb-6">
                            <InputLastName
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className=""
                                required
                            />
                        </div>
                        <div className="-mb-6">
                            <InputEmail
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=""
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="-mb-6">
                            <InputSubject
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className=""
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="-mb-6">
                            <InputMessage
                                type="text"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className=""
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center w-full py-2">
                            <SendButton type="submit" />
                        </div>
                    </form>
                </motion.div>
            </motion.div>
            <motion.div
                variants={animations.slideVertical}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex-grow w-1/2 grid grid-cols-2 gap-3 md:gap-5 2xl:gap-10 p-4 md:p-10 xl:p-20 2xl:p-40 bg-gradient-to-r to-[#272727] from-[#555555]"
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
