import { react } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styling/Home.module";

function Typewriter() {
    return (
        <span className={`${styles.ColorGradient} font-sfpro font-medium`}>
            <TypeAnimation
                sequence={[
                    "I'm a student at The University of California, Berkeley.",
                    1500,
                    "I'm studying Computer Science & Data Science.",
                    1500,
                    "Check out my projects below!",
                    1500,
                ]}
                wrapper="span"
                speed={55}
                style={{ display: "inline-block" }}
                repeat={Infinity}
            />
        </span>
    );
}

export default Typewriter;
