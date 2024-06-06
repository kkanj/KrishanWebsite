import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "../styling/Home.module.js";
import {
    logo,
    mail,
    linkedin,
    googlemeet,
    MenuBurger,
} from "../assets/index.js";
import MarqueeText from "../components/Marquee.jsx";

const NavigationBar = () => {
    return (
        <div className="absolute h-full border-r border-line-gray w-[240px] mr-[60px]">
            <div className={styles.MenuDivision}>
                <div className={styles.MenuPlacement}>
                    <div className="flex flex-row">
                        <Link to="/" >
                            <img src={logo} alt="logo" className={`${styles.Logo}`} />
                        </Link>
                        <MenuBurger className="w-[35px] h-[35px] ml-[109px] mt-[3px] fill-med-gray"/>
                    </div>
                    <div>
                        <Link to="/AboutMe" className={`${styles.MenuItem}`}>
                            About Me.
                        </Link>
                    </div>
                    <div>
                        <Link to="/Projects" className={styles.MenuItem}>
                            Projects.
                        </Link>
                    </div>
                    <div>
                        <Link to="/Placeholder" className={styles.MenuItem}>
                            Placeholder.
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.MenuDivision}>
                {/* Projects */}
                <div className={styles.MenuSubHeader}>CATEGORY 1</div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>

                <div className={`${styles.MenuSubHeader} pt-[40px]`}>
                    CATEGORY 2
                </div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>
                <div>
                    <Link to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </Link>
                </div>
            </div>
            <div className="pb-[40px] py-[30px] p-[30px] text-left space-y-[12px]">
                {/* Contact */}
                <div className={styles.MenuSubHeader}>CONTACT</div>
                <div>
                    <a
                        href="mailto:krishankanji@berkeley.edu?cc=krishankanji2003@gmail.com"
                        target="_blank"
                    >
                        <span className={`${styles.MenuSubItem}`}>
                            <img src={mail} className={styles.Icon} />
                            Mail
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/krishankanji/"
                        target="_blank"
                    >
                        <span className={`${styles.MenuSubItem}`}>
                            <img src={linkedin} className={styles.Icon} />
                            LinkedIn
                        </span>
                    </a>
                </div>
                <div>
                    <a
                        href="https://calendly.com/krishankanji2003/30min"
                        target="_blank"
                    >
                        <span className={`${styles.MenuSubItem}`}>
                            <img src={googlemeet} className={styles.Icon} />
                            Meet
                        </span>
                    </a>
                </div>
                <div className="absolute bottom-3 w-[209px]">
                    <MarqueeText />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
