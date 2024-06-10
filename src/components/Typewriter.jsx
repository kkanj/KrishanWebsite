import { react } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span>
            <TypeAnimation
                sequence={[
                    400,
                    "full-stack developer",
                    
                ]}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={1}
            />
        </span>
    );
}

export default Typewriter;
