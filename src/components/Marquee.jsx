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
import Ros from "../assets/images/ros.svg?react";
import Pytorch from "../assets/images/pytorch.svg?react";
import Tensorflow from "../assets/images/tensorflow.svg?react";
import Pandas from "../assets/images/pandas.svg?react";
import Numpy from "../assets/images/numpy.svg?react";
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
                <ReactImg className={styles.TechStackMarquee} />
                <Javascript className={styles.TechStackMarquee} />
                <Csharp className={styles.TechStackMarquee} />
                <Java className={styles.TechStackMarquee} />
                <Python className={styles.TechStackMarquee} />
                <Sql className={styles.TechStackMarquee} />
                <Ros className={styles.TechStackMarquee} />
                <Pytorch className={styles.TechStackMarquee} />
                <Tensorflow className={styles.TechStackMarquee} />
                <Pandas className={styles.TechStackMarquee} />
                <Numpy className={styles.TechStackMarquee} />
                <div /> {/* Add's space */}
            </div>
        </Marquee>
    </div>
);

export default MarqueeText;
