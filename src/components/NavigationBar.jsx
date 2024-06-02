import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import { logo, mail, linkedin, googlemeet } from "../assets/index.js";
import MarqueeText from "../components/Marquee.jsx";

const NavigationBar = () => {
    return (
        <div className="absolute h-full border-r border-line-gray w-[240px] mr-[60px]">
            <div className={styles.MenuDivision}>
                {/* Menu */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className={styles.Logo} />
                </NavLink>
                <div className={styles.MenuPlacement}>
                    <div>
                        <NavLink to="/AboutMe" className={styles.MenuItem}>
                            About Me.
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/Projects" className={styles.MenuItem}>
                            Projects.
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/Placeholder" className={styles.MenuItem}>
                            Placeholder.
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className={styles.MenuDivision}>
                {/* Projects */}
                <div className={styles.MenuSubHeader}>CATEGORY 1</div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
                </div>

                <div className={`${styles.MenuSubHeader} pt-[40px]`}>
                    CATEGORY 2
                </div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Project0" className={styles.MenuSubItem}>
                        Project 0
                    </NavLink>
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
                    <MarqueeText/>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
