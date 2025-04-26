import { React, useState } from "react";
import { motion } from "framer-motion";

export const AboutCards = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const cardVariants = {
        expanded: {
            width: "81vw",
            height: "97vh",
        },
        collapsed: {
            width: "7vw",
            height: "97vh",
        },
    };

    const cardImages = [];

    const cardTitles = ["me", "education", "tech stack", "resume"];

    return (
        <section className="px-[20px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-black font-creato text-black"></h1>
                <p className=" text-xl text-blue"></p>
            </div>
            <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-5">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={`card cursor-pointer flex flex-col bg-cover bg-center rounded-[40px] ${
                            index === expandedIndex ? "expanded" : ""
                        }`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={
                            index === expandedIndex ? "expanded" : "collapsed"
                        }
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)}
                        style={{
                            backgroundColor: "black",
                            // Subtract the extra height
                        }}
                    >
                        <div className="card-content flex-grow flex flex-col justify-end">
                            <div className="card-footer rounded-b-[40px] bg-red-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                                <h2 className="text-xl font-semibold text-white text-center">
                                    {cardTitles[index]}{" "}
                                </h2>
                                {index === expandedIndex && (
                                    <p className="mt-2 text-gray-300 text-center">
                                        "Lorem ipsum dolor sit amet,
                                        consectetur"
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
