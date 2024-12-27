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
                // Removed p-4 so the image can fill the card
                "relative rounded-[21px] bg-card-bg w-full drop-shadow-lg hover:shadow-xl cursor-pointer",
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
            staggerChildren: 0.05,
            duration: 0.2,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
};

const Projects = () => {
    return (
        <div className="bg-white text-zinc-900 h-screen overflow-y-auto">
            <NavMenu />
            <div className="px-8 ">
                <motion.div className="pt-16 md:pt-0 bg-white rounded-[21px] pl-1 md:pl-16 ">
                    <h1 className="mb-2 text-size4 md:text-size7 font-sfpro font-bold text-[#232427]">
                        My Projects
                    </h1>
                    <p className="text-dark-gray font-sfpro font-light text-size2 md:text-size3 -mt-5 lg:-mt-7 tracking-tight">
                        Showcasing some of the things I’ve worked on.
                    </p>
                </motion.div>
                <motion.div
                    className="grid w-full grid-cols-12 gap-7 py-4 mb-24 md:mb-10 px-0 md:px-16"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                >
                    {/* First block with white background, no card styling */}

                    {/* Other project blocks */}
                    {projects.map((project, index) => (
                        <Block
                            key={index}
                            link={project.link}
                            className={twMerge(
                                "col-span-12",
                                project.className
                            )}
                        >
                            {/* Image with no padding to fill the card */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-t-[21px]"
                            />
                            {/* Container for text, with padding if desired */}
                            <div className="p-4">
                                <h2 className="font-sfpro text-size2 font-bold tracking-tight text-name-text">
                                    {project.title}
                                </h2>
                                <p className="font-sfpro text-size1 font-light tracking-wider text-dark-gray">
                                    {project.language}
                                </p>
                            </div>
                        </Block>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
