import React, { useState, useEffect } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";
import "../styling/NavMenu.css";

export const NavMenu = () => {
    const [menuWidth, setMenuWidth] = useState("300px");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

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

    // Handle menu state
    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    // Custom handler to close menu and navigate
    const handleNavigate = (path) => (event) => {
        event.preventDefault();
        setMenuOpen(false); // Close menu immediately
        setTimeout(() => {
            navigate(path);
        }, 50); // Small delay to ensure menu closing animation starts first
    };

    return (
        <Menu
            width={menuWidth}
            isOpen={menuOpen}
            onStateChange={handleStateChange}
            // Faster transition for closing
            burgerButtonClassName="bm-burger-button-custom"
            crossButtonClassName="bm-cross-button-custom"
            menuClassName="bm-menu-custom"
        >
            <Link
                className="menu-item inline-block text-size1 md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2"
                to="/"
                onClick={handleNavigate("/")}
            >
                Home
            </Link>
            <Link
                className="menu-item inline-block text-size1 md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2"
                to="/about"
                onClick={handleNavigate("/about")}
            >
                About
            </Link>
            <Link
                className="menu-item inline-block text-size1 md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2"
                to="/contact"
                onClick={handleNavigate("/contact")}
            >
                Contact
            </Link>
            <Link
                className="menu-item inline-block text-size1 md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2"
                to="/projects"
                onClick={handleNavigate("/projects")}
            >
                Projects
            </Link>
            <Link
                className="menu-item inline-block text-size1 md:text-size2 xl:text-size2 2xl:text-size3 text-white font-creato font-light tracking-tight select-none px-0 md:px-2"
                to="/experience"
                onClick={handleNavigate("/experience")}
            >
                Experience
            </Link>
        </Menu>
    );
};
