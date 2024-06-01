import Marquee from "react-fast-marquee";
import React from "react";
import {
    csharp,
    css,
    html,
    java,
    javascript,
    python,
    reactImg,
    sql,
    tailwind,
} from "../assets/index.js";
import styles from "../styling/Home.module.js";

const MarqueeText = () => (
    <div className="pr-[75px]">
        <Marquee speed={100}>
            <div className={`flex flex-row space-x-[60px]`}>
                <img className={styles.TechStackMarquee} src={csharp} alt="C#" />
                <img className={styles.TechStackMarquee} src={css} alt="CSS" />
                <img className={styles.TechStackMarquee} src={html} alt="HTML" />
                <img className={styles.TechStackMarquee} src={java} alt="Java" />
                <img className={styles.TechStackMarquee} src={javascript} alt="JavaScript" />
                <img className={styles.TechStackMarquee} src={python} alt="Python" />
                <img className={styles.TechStackMarquee} src={reactImg} alt="React" />
                <img className={styles.TechStackMarquee} src={sql} alt="SQL" />
                <img className={styles.TechStackMarquee} src={tailwind} alt="Tailwind" />
                {/* Duplicate */}
                <img className={styles.TechStackMarquee} src={csharp} alt="C#" />
                <img className={styles.TechStackMarquee} src={css} alt="CSS" />
                <img className={styles.TechStackMarquee} src={html} alt="HTML" />
                <img className={styles.TechStackMarquee} src={java} alt="Java" />
                <img className={styles.TechStackMarquee} src={javascript} alt="JavaScript" />
                <img className={styles.TechStackMarquee} src={python} alt="Python" />
                <img className={styles.TechStackMarquee} src={reactImg} alt="React" />
                <img className={styles.TechStackMarquee} src={sql} alt="SQL" />
                <img className={styles.TechStackMarquee} src={tailwind} alt="Tailwind" />
                {/* Duplicate */}
                <img className={styles.TechStackMarquee} src={csharp} alt="C#" />
                <img className={styles.TechStackMarquee} src={css} alt="CSS" />
                <img className={styles.TechStackMarquee} src={html} alt="HTML" />
                <img className={styles.TechStackMarquee} src={java} alt="Java" />
                <img className={styles.TechStackMarquee} src={javascript} alt="JavaScript" />
                <img className={styles.TechStackMarquee} src={python} alt="Python" />
                <img className={styles.TechStackMarquee} src={reactImg} alt="React" />
                <img className={styles.TechStackMarquee} src={sql} alt="SQL" />
                <img className={styles.TechStackMarquee} src={tailwind} alt="Tailwind" />
                <div /> {/* Add's space */}
            </div>
        </Marquee>
    </div>
);

export default MarqueeText;
