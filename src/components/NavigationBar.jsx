import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import { logo, mail, linkedin, googlemeet } from "../assets/index.js";

const NavigationBar = () => {
    return (
        <div className="absolute h-full border-r border-line-gray w-[240px] mr-[60px]">
            <div className={styles.MenuDivision}>
                {/* Menu */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className={styles.Logo} />
                </NavLink>
                <div className={styles.MenuPlacement}>
                    <NavLink to="/AboutMe">
                        <div className={styles.MenuItem}>About Me.</div>
                    </NavLink>
                    <NavLink to="/Projects">
                        <div className={styles.MenuItem}>Projects.</div>
                    </NavLink>
                    <NavLink to="/Placeholder">
                        <div className={styles.MenuItem}>Placeholder.</div>
                    </NavLink>
                </div>
            </div>

            <div className={styles.MenuDivision}>
                {/* Projects */}
                <div className={styles.MenuSubHeader}>CATEGORY 1</div>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>

                <div className={`${styles.MenuSubHeader} pt-[40px]`}>
                    CATEGORY 2
                </div>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>
                <NavLink to="/Project0">
                    <div className={styles.MenuSubItem}>Project 0</div>
                </NavLink>
            </div>
            <div className="pb-[40px] py-[30px] p-[30px] flex flex-col text-left space-y-[12px]">
                {/* Contact */}
                <div className={styles.MenuSubHeader}>CONTACT</div>
                <a
                    href="mailto:krishankanji@berkeley.edu?cc=krishankanji2003@gmail.com"
                    className={styles.MenuSubItem}
                    target="_blank"
                >
                    <img src={mail} className={styles.Icon} />
                    Mail
                </a>
                <a
                    href="https://www.linkedin.com/in/krishankanji/"
                    className={styles.MenuSubItem}
                    target="_blank"
                >
                    <img src={linkedin} className={styles.Icon} />
                    LinkedIn
                </a>
                <a
                    href="https://calendly.com/krishankanji2003/30min"
                    className={styles.MenuSubItem}
                    target="_blank"
                >
                    <img src={googlemeet} className={styles.Icon} />
                    Meet
                </a>
            </div>
        </div>
    );
};

export default NavigationBar;
