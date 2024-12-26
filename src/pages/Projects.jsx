import React from "react";
import { NavMenu } from "../components/NavMenu";
import { motion, cubicBezier } from "framer-motion";
import styles from "../styling/Home.module.js";
import projects from "../components/projectData";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            staggerChildren: 0.1,
            duration: 0.1,
            ease: cubicBezier(0.34, 0.05, 0.54, 1.19),
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
};

const TitleCard = ({ title }) => {
    return (
        <motion.div
            className="col-span-2 rounded-[21px] drop-shadow-lg relative w-full bg-card-bg overflow-hidden shadow-lg hover:shadow-xl flex items-center justify-center text-center p-8 "
            whileHover={{ scale: 1.03 }}
        >
            <h1 className="font-sfpro font-bold text-size3 lg:text-size6 text-name-text tracking-wide">
                {title}
            </h1>
        </motion.div>
    );
};

const ProjectCard = ({ image, title, language, description, link }) => {
    return (
        <motion.div
            className="rounded-[21px] drop-shadow-lg relative bg-card-bg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer aspect-[1/1]"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(link, "_blank")}
        >
            <img src={image} alt={title} className="w-full h-58 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{language}</p>
            </div>
            <motion.div
                className="absolute inset-0 bg-[#151517] bg-opacity-80 text-white p-4 opacity-0 flex items-center justify-center text-center transition-opacity duration-300 backdrop-blur-sm"
                whileHover={{ opacity: 1 }}
            >
                <p>{description}</p>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    // Destructure the first project and the rest
    const [firstProject, ...otherProjects] = projects;

    return (
        <div className="h-screen flex flex-col">
            <NavMenu />

            <main className="flex-1 w-screen overflow-y-auto mx-auto p-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="flex justify-center sm:col-span-1 md:col-span-2"
                        variants={cardVariants}
                    >
                        <TitleCard title="My Projects" />
                    </motion.div>

                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center"
                            variants={cardVariants}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Projects;
