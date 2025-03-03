import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    650, "I build software", 
                    1501, "I build ", 
                    180, "I build space robots",
                    1501, "",
                    180, "I'm building the future", 
                    1501, ""
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