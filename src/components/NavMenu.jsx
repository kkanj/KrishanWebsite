import React, { useState, useEffect } from "react";
import { stack as Menu } from "react-burger-menu"; // Import the desired menu type
import "../styling/NavMenu.css";

export const NavMenu = () => {
    const [menuWidth, setMenuWidth] = useState("300px"); // Default width

    // Adjust the width based on screen size
    useEffect(() => {
        const updateMenuWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 640) {
                setMenuWidth("150px");
            } else if (screenWidth <= 768) {
                setMenuWidth("200px");
            } else if (screenWidth <= 1024) {
                setMenuWidth("225px");
            } else if (screenWidth <= 1536) {
                setMenuWidth("250px");
            } else {
                setMenuWidth("300px");
            }
        };

        // Initial check and add resize listener
        updateMenuWidth();
        window.addEventListener("resize", updateMenuWidth);

        // Cleanup listener
        return () => window.removeEventListener("resize", updateMenuWidth);
    }, []);

    return (
        <Menu width={menuWidth}>
            <a
                className="menu-item inline-block text-size1  md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2 "
                href="/"
            >
                Home
            </a>
            <a
                className="menu-item inline-block text-size1  md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2 "
                href="/about"
            >
                About
            </a>
            <a
                className="menu-item inline-block text-size1  md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2 "
                href="/contact"
            >
                Contact
            </a>
            <a
                className="menu-item inline-block text-size1  md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2 "
                href="/projects"
            >
                Projects
            </a>
            <a
                className="menu-item inline-block text-size1  md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2 "
                href="/experience"
            >
                Experience
            </a>
        </Menu>
    );
};
