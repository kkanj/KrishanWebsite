import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    650, "i build software", 
                    1501, "",
                    180, "autonomous vehicle software",
                    1501, "",
                    180, "space exploration software",
                    1501, "",
                    180, "robot software",
                    1501, "",
                    
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