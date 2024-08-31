import { cubicBezier } from "framer-motion";

const popIn = cubicBezier(0.34, 0.05, 0.54, 1.19);
const popOut = cubicBezier(0.34, 0.05, 0.52, 0.99);

const scale = {
    hidden: {
        color: "#555555",
        scale: 0,
        transition: {
            ease: popOut,
            duration: 0.2,
        },
    },
    visible: {
        scale: 1,
        color: "#555555",
        transition: {
            ease: popIn,
            duration: 0.35,
            type: "tween",
        },
    },
};

const scaleMenu = {
    hidden: {
        color: "#555555",
        scale: 0,
        transition: {
            ease: popOut,
            duration: 0.2,
        },
    },
    visible: {
        scale: 1,
        color: "#555555",
        transition: {
            delay: 0.4,
            ease: popIn,
            duration: 0.3,
            type: "tween",
        },
    },
};

const fade = {
    hidden: {
        opacity: 0,
        transition: {
            ease: "easeOut",
            duration: 0.4,
            type: "tween",
        },
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
            type: "tween",
            delay: 0.2,
        },
    },
};

const scaleName = {
    hidden: { scale: 0, transition: { ease: "linear", duration: 0.1 } },
    visible: {
        scale: 1,
        transition: {
            ease: "linear",
            duration: 0.5,
            type: "tween",
        },
    },
};

const slideHorizontal = {
    hidden: {
        x: -window.innerWidth,
        opacity: 1,
        transition: {
            ease: cubicBezier(0.64, 0, 0.78, 0),
            duration: 0.45,
        },
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: cubicBezier(0.22, 1, 0.36, 1),
            duration: 0.45,
        },
    },
};

const slideVertical = {
    hidden: {
        y: window.innerHeight,
        opacity: 1,
        transition: {
            ease: cubicBezier(0.64, 0, 0.78, 0),
            duration: 0.45,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: cubicBezier(0.22, 1, 0.36, 1),
            duration: 0.45,
        },
    },
};

export default {
    scale,
    scaleName,
    fade,
    slideHorizontal,
    slideVertical,
    scaleMenu,
};
