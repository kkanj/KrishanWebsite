import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { NavMenu } from "../components/NavMenu";
import experiencedata from "../components/experienceData";
import MarqueeText from "../components/Marquee";


const Block = ({ className, children, link, ...rest }) => {
    return (
        <motion.div
            variants={childVariants}
            onClick={() => window.open(link, "_blank")}
            className={twMerge(
                "relative flex flex-col rounded-[21px] bg-card-bg w-full drop-shadow-lg hover:shadow-xl cursor-pointer",
                className
            )}
            {...rest}
            whileHover={{
                y: -13,
                transition: { type: "tween", duration: 0.2 },
            }}
        >
            {children}
        </motion.div>
    );
};

const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            type: "spring",
            staggerChildren: 0.06, // Stagger the children animations
            duration: 0.2,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.1,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
};

const childVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.25 } },
};

const experience = () => {
    return (
        <div className="bg-white text-zinc-900 h-screen overflow-y-auto">
            <NavMenu />
            <div className="px-8">
                <motion.div
                    className="pt-16 md:pt-0 bg-white rounded-[21px] pl-1 md:pl-16"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit" // Apply exit animation
                >
                    <motion.h1
                        className="mb-2 text-size4 md:text-size7 font-sfpro font-bold text-[#232427]"
                        variants={childVariants}
                    >
                        My experience
                    </motion.h1>
                    <motion.p
                        className="text-dark-gray font-sfpro font-light text-size2 md:text-size3 -mt-5 lg:-mt-7 tracking-tight"
                        variants={childVariants}
                    >
                        Some of the roles I've worked in.
                    </motion.p>
                </motion.div>
                <motion.div
                    className="grid w-full grid-cols-12 gap-7 py-4 mb-24 md:mb-10 px-0 md:px-16"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit" // Apply exit animation
                >
                    {/* First block with white background, no card styling */}

                    {/* Other project blocks */}
                    {experiencedata.map((project, index) => (
                        <Block
                            key={index}
                            link={project.link}
                            className={twMerge(
                                "col-span-12 md:col-span-6",
                                project.className
                            )}
                        >
                            {/* Image with no padding to fill the card */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover rounded-t-[21px] flex-grow h-96"
                            />
                            {/* Container for text, with fixed height */}
                            <div className="flex flex-col p-4">
                                <h2 className="font-sfpro text-size2 font-bold tracking-tight text-dark-gray">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap gap-2 py-1">
                                    {project.language
                                        .split(",")
                                        .map((lang, i) => (
                                            <span
                                                key={i}
                                                className="bg-light-gray text-dark-gray font-sfpro font-light tracking-wide px-3 rounded-full text-size1"
                                            >
                                                {lang.trim()}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <motion.div
                                className="absolute inset-0 rounded-[21px] bg-black bg-opacity-85 text-white font-sfpro text-size2 font-light tracking-wider p-4 opacity-0 flex items-center justify-center text-center transition-opacity duration-300 backdrop-blur-sm"
                                whileHover={{ opacity: 1 }}
                            >
                                <p className="">{project.description}</p>
                            </motion.div>
                        </Block>
                    ))}
                    <div className=" pl-8 pt-3 md:pl-8 col-span-12">
                        <MarqueeText />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default experience;
