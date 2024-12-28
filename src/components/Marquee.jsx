import Marquee from "react-fast-marquee";
import React from "react";
import Csharp from "../assets/images/csharp.svg?react";
import Css from "../assets/images/css.svg?react";
import Html from "../assets/images/html.svg?react";
import Java from "../assets/images/java.svg?react";
import Javascript from "../assets/images/javascript.svg?react";
import Python from "../assets/images/python.svg?react";
import ReactImg from "../assets/images/react.svg?react";
import Sql from "../assets/images/sql.svg?react";
import Tailwind from "../assets/images/tailwind.svg?react";
import Vue from "../assets/images/vue.svg?react";

import styles from "../styling/Home.module.js";

const MarqueeText = () => (
    <div className="ml-[-30px]">
        <Marquee
            speed={40}
            gradient
            gradientColor="white"
            gradientWidth={60}
            autoFill
        >
            <div className={`flex flex-row space-x-[60px]`}>
                <Csharp className={styles.TechStackMarquee} />
                <Css className={styles.TechStackMarquee} />
                <Html className={styles.TechStackMarquee} />
                <Java className={styles.TechStackMarquee} />
                <Javascript className={styles.TechStackMarquee} />
                <Python className={styles.TechStackMarquee} />
                <ReactImg className={styles.TechStackMarquee} />
                <Sql className={styles.TechStackMarquee} />
                <Tailwind className={styles.TechStackMarquee} />
                <Vue className={styles.TechStackMarquee} />
                <div /> {/* Add's space */}
            </div>
        </Marquee>
    </div>
);

export default MarqueeText;
