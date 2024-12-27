import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { NavMenu } from "../components/NavMenu";
import projects from "../components/projectData";

const Block = ({ className, children, link, ...rest }) => {
    return (
        <motion.div
            initial={{ scale: 0.5, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
            }}
            onClick={() => window.open(link, "_blank")}
            className={twMerge(
                "relative flex flex-col rounded-[21px] bg-card-bg w-full drop-shadow-lg hover:shadow-xl cursor-pointer",
                className
            )}
            {...rest}
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
            type: "tween",
            staggerChildren: 0.1, // Stagger the children animations
            duration: 0.2,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            staggerChildren: 0.1, // Stagger the children animations
            duration: 0.2,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
};

const childVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.25 } },
};

const Projects = () => {
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
                        My Projects
                    </motion.h1>
                    <motion.p
                        className="text-dark-gray font-sfpro font-light text-size2 md:text-size3 -mt-5 lg:-mt-7 tracking-tight"
                        variants={childVariants}
                    >
                        Showcasing some of the things I’ve worked on.
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
                    {projects.map((project, index) => (
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
                            <div className="p-4 h-24">
                                <h2 className="font-sfpro text-size2 font-bold tracking-tight text-name-text">
                                    {project.title}
                                </h2>
                                <p className="font-sfpro text-size1 font-light tracking-wider text-dark-gray">
                                    {project.language}
                                </p>
                            </div>
                            <motion.div
                                className="absolute inset-0 rounded-[21px] bg-black bg-opacity-85 text-white font-sfpro font-size2 font-light tracking-wider p-4 opacity-0 flex items-center justify-center text-center transition-opacity duration-300 backdrop-blur-sm"
                                whileHover={{ opacity: 1 }}
                            >
                                <p>{project.description}</p>
                            </motion.div>
                        </Block>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
