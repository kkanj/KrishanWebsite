import { Home, Resume, Mail, Person, Lightbulb } from "../assets/index.js";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "react-circular-menu/styles.css";

export const NavMenuNew = (props) => {
    return (
        <CircleMenu
            startAngle={-450}
            rotationAngle={360}
            itemSize={4}
            radius={5}
            rotationAngleInclusive={false}
            className="transform-gpu"
        >
            <CircleMenuItem
                tooltip="Home"
                className="bg-[#727986] hover:bg-[#97a6c0] text-white"
            >
                <Home className="w-8 h-8"/>
            </CircleMenuItem>
            <CircleMenuItem
                tooltip="Contact"
                className="bg-[#727986] hover:bg-[#97a6c0] text-white"
            >
                <Mail className="w-8 h-8"/>
            </CircleMenuItem>
            <CircleMenuItem
                tooltip="Experience"
                className="bg-[#727986] hover:bg-[#97a6c0] text-white"
            >
                <Resume className="w-8 h-8" />
            </CircleMenuItem >

            <CircleMenuItem
                tooltip="Projects"
                className="bg-[#727986] hover:bg-[#97a6c0] text-white"
            >
                <Lightbulb className="w-9 h-9"/>
            </CircleMenuItem>

            <CircleMenuItem
                tooltip="About"
                className="bg-[#727986] hover:bg-[#97a6c0] text-white"
            >
                <Person className="w-8 h-8"/>
            </CircleMenuItem>
        </CircleMenu>
    );
};

export default NavMenuNew;
