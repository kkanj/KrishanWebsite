import { cubicBezier } from "framer-motion";

const popIn = cubicBezier(0.75, -0.01, 1, 0.81);

const scale = {
    hidden: {
        scale: 0,
        transition: {
            ease: popIn,
            duration: 0.15,
        },
    },
    visible: {
        scale: 1,
        transition: {
            ease: popIn,
            duration: 0.5,
            type: "spring",
            bounce: 0.3,
        },
    },
};

const fade = {
    hidden: {
        opacity: 0,
        transition: {
            ease: "easeOut",
            duration: 0.5,
            type: "tween",
        },
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            type: "tween",
        },
    },
};

const scaleName = {
    hidden: { scale: 0, transition: { ease: popIn, duration: 0.1 } },
    visible: {
        scale: 1,
        transition: {
            ease: popIn,
            duration: 0.5,
            type: "spring",
            bounce: 0.5,
        },
    },
};

const slide = {
    hidden: {
        x: -window.innerWidth,
        opacity: 0,
        transition: {
            ease: cubicBezier(0.87, 0, 0.13, 1),
            duration: 0.4,
        },
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: cubicBezier(0.87, 0, 0.13, 1),
            duration: 0.4,
        },
    },
};

export default { scale, scaleName, fade, slide };
