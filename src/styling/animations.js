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

const scaleName = {
    hidden: { scale: 0, transition: { ease: popIn, duration: 0.1 } },
    visible: {
        scale: 1,
        transition: {
            ease: popIn,
            duration: 0.5,
            type: "spring",
            bounce: 0.6,
        },
    },
};

export default { scale, scaleName };
