import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cors from "cors";
const MotionLink = motion(Link);

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            "https://u5e1gszaa1.execute-api.us-east-2.amazonaws.com/default", // Replace with your API Gateway endpoint
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: [email],
                    subject: subject,
                    html: `<strong>${message}</strong>`,
                }),
            }
        );

        const result = await response.json();
        if (response.ok) {
            setPopupMessage("Thank you, I'll get back to you soon");
            setPopupVisible(true);
            setTimeout(() => setPopupVisible(false), 3000);
            setEmail("");
            setSubject("");
            setMessage("");
        } else {
            setPopupMessage("Error: Please try again");
            setPopupVisible(true);
            setTimeout(() => setPopupVisible(false), 3000);
        }
    };

    return (
        <motion.div
            className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send
                    </button>
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
    );
};

export default Contact;
