import { Home, Resume, Mail, Person, Lightbulb } from "../assets/index.js";
import { Link } from "react-router-dom";
// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "../styling/menuStyles.css";
export const NavMenuNew = (props) => {
    return (
        <div className="absolute flex items-center inset-0 place-content-center pointer-events-auto">
            <CircleMenu
                startAngle={-450}
                rotationAngle={360}
                itemSize={4}
                radius={4.35}
                rotationAngleInclusive={false}
                className="transform-gpu flex justify-center items-center"
            >
                <CircleMenuItem
                    tooltip="Home"
                    className="bg-[#727986] hover:bg-[#8d939e] text-white"
                >
                    <Link
                        to="/"
                        className="no-underline text-inherit hover:text-white"
                    >
                        <Home className="w-8 h-8" />
                    </Link>
                </CircleMenuItem>

                <CircleMenuItem
                    tooltip="Contact"
                    className="bg-[#727986] hover:bg-[#8d939e] text-white"
                >
                    <Link
                        to="/contact"
                        className="no-underline text-inherit hover:text-white"
                    >
                        <Mail className="w-8 h-8" />
                    </Link>
                </CircleMenuItem>

                <CircleMenuItem
                    tooltip="Experience"
                    className="bg-[#727986] hover:bg-[#8d939e] text-white"
                >
                    <Link
                        to="/experience"
                        className="no-underline text-inherit hover:text-white"
                    >
                        <Resume className="w-8 h-8" />
                    </Link>
                </CircleMenuItem>

                <CircleMenuItem
                    tooltip="Projects"
                    className="bg-[#727986] hover:bg-[#8d939e] text-white"
                >
                    <Link
                        to="/projects"
                        className="no-underline text-inherit hover:text-white"
                    >
                        <Lightbulb className="w-9 h-9" />
                    </Link>
                </CircleMenuItem>

                <CircleMenuItem
                    tooltip="About"
                    className="bg-[#727986] hover:bg-[#8d939e] text-white"
                >
                    <Link
                        to="/about"
                        className="no-underline text-inherit hover:text-white"
                    >
                        <Person className="w-8 h-8" />
                    </Link>
                </CircleMenuItem>
            </CircleMenu>
        </div>
    );
};

export default NavMenuNew;
