import React from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
    return (
        <div className="absolute inset-x-0 top-0 mt-10 flex justify-center ">
            <div className="bg-[#727986] shadow-lg rounded-full py-2 px-7 flex justify-center space-x-4 w-auto mx-auto text-size2 font-sfpro font-semibold">
                <div className="space-x-7">
                    <Link to="/home" className="text-white hover:text-[#99eeff]">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-[#99eeff]"
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="text-white hover:text-[#99eeff]"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:text-[#99eeff]"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/placeholder"
                        className="text-white hover:text-[#99eeff]"
                    >
                        Experience
                    </Link>
                </div>
            </div>
        </div>
    );
};
