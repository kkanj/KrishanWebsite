import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    650, "i build software", 
                    1501, "i build ", 
                    180, "i build space robots",
                    1501, "",
                    180, "i'm building the future", 
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