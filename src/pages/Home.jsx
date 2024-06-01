import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import NavigationBar from "../components/NavigationBar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import MarqueeText from "../components/Marquee.jsx";

const Home = () => {
    return (
        <div className="">
            <div>
                <NavigationBar />
                <div className="pl-[310px] pt-[40px] text-size3 text-med-gray font-sfpro font-light">
                    <span className=" py-7">Hello, I'm </span>
                    <span className=" text-name-text font-normal">
                        Krishan!{" "}
                    </span>
                    <Typewriter />
                    <div className={styles.ParagraphGradient}>
                        I am a full-stack developer and student at UC Berkeley,
                        passionate about creating applications that are useful,
                        meaningful, and impactful. I strive to use my skills to
                        innovate, create, and solve real world problems. Lets
                        work together!
                    </div>

                    <MarqueeText className="pr-[100px]" />
                </div>
            </div>
        </div>
    );
};

export default Home;
