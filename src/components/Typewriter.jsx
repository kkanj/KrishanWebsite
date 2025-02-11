import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    650, "software engineer", 1501, "", 180,
                    "student", 1501, "", 180,
                    "robotics engineer", 1501, "", 180,
                    "space enthusiast", 1501, "", 180,
                    "computer scientist", 1501, "", 180,
                    "data scientist", 1501, "", 180,
                    ""
                ]}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={Infinity}
            />
        </span>
    );
}

export default Typewriter;