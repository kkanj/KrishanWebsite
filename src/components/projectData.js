import portalGif from "../assets/images/portal.gif";
import gif2048 from "../assets/images/2048Mac.png";
import joopi from "../assets/images/joopiphone.png";
import jobjam from "../assets/images/JobJamMockup.png";
import cnn from "../assets/images/cnn.png";
import rnn from "../assets/images/rnn.png";
import tetris from "../assets/images/tetris.png";
import NGordNet from "../assets/images/NGordNet.png";
import spamham from "../assets/images/spamham.png";
import housing from "../assets/images/housing.png";
import spotsaver from "../assets/images/spotsaver.png";
import lstm from "../assets/images/lstm.png";
import pytorch from "../assets/images/pytorch.png";
import faultyCommits from "../assets/images/faultyCommits.svg";
import rover from "../assets/images/rover.png";
const projects = [
    {
        image: rover,
        title: "Autonomous Mars Rover Software",
        language: "ROS 2, C++, Python",
        description:
            "Developed autonomous navigation software for sulfur deposit collection in order to support autonomous habitat construction on Mars. Created a fault tolerant system using NVIDIA Jetson and Arduino Mega that implements custom SLAM with LIDAR/IMU/Camera sensor fusion, achieving <0.5m mapping accuracy through hierarchical A*/RRT* path planning and Dynamic Window Approach obstacle avoidance. Deployed on ROS 2 with terrain adaptive CNN classification and decision making for continuous operation in Mars like environments.",
        link: "https://example.com/rover-project",
        className:
            "md:col-span-12 md:row-span-1 lg:col-span-7 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ",
    },
    {
        image: cnn,
        title: "Image Classification Neural Network (CIFAR-10)",
        language: "PyTorch, TensorFlow",
        description:
            "Developed a deep understanding of neural network architecture by implementing key components such as vectorized backpropagation, batch normalization, and dropout. Designed and optimized convolutional neural networks (CNNs) and trained models on the CIFAR-10 dataset using PyTorch, achieving hands-on experience with modern deep learning workflows.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-5 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ",
    },

    {
        image: joopi,
        title: "Joopi",
        language: "Expo Go, Express, Node.js, Firebase",
        description:
            "A social and dating app for the Asian American community, focused on creating genuine connections through cultural bonds. \n(Internship)",
        link: "https://example.com/project3",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 2xl:col-span-3 2xl:row-span-2  ", // Default span
    },
    {
        image: faultyCommits,
        title: "Detecting Faulty Commits on GitHub using Machine Learning",
        language: "PyTorch, TensorFlow",
        description:
            "An end-to-end machine learning pipeline to identify faulty commits in GitHub repositories. Used features such as commit changes and author info, to train a model to classify commits as faulty or non-faulty. This project could improve code quality and reduce the time spent on code reviews.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ",
    },
    {
        image: spotsaver,
        title: "Spot Saver",
        language: "Python, Flask, OpenCV, Express, Node.js",
        description:
            " Spot Saver is a multilingual robotic assistant built on Boston Dynamics' Spot robot to aid first responders. It features high-resolution cameras for victim detection, real-time translation in 15+ languages, and a remote-control UI. Using the Bosdyn API, Groq’s AI accelerators, and Google Cloud Platform, it navigates hazards, bridges language barriers, and enhances rescue efforts with a flame-retardant design for durability.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-3 2xl:row-span-1  ",
    },
    {
        image: portalGif,
        title: "Portal Prowler",
        language: "Java",
        description:
            "A game engine built entirely from scratch in Java, featuring efficient custom data structures and dynamic world generation. The game includes engaging mechanics like stamina management, item upgrades, and escalating challenges, ensuring optimized gameplay across all devices.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-3 lg:row-span-1 2xl:col-span-3 2xl:row-span-1 ",
    },

    {
        image: lstm,
        title: "AI Headlines Generator and Summarizer (LSTM)",
        language: "PyTorch, TensorFlow",
        description:
            "Designed and trained an LSTM-based neural network to generate realistic news headlines and a Transformer model to summarize lengthy news articles effectively.",
        link: "https://example.com/project3",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-5 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ", // Default span
    },
    {
        image: rnn,
        title: "RNNs for Surname Classification",
        language: "PyTorch, TensorFlow",
        description:
            "A RNN-based model to classify the language of origin for a given last name. The neural network learns to predict the language based on the structure of the name, leveraging the sequential nature of characters in a name. The project includes training a neural network, evaluating its performance, and discussing the ethical implications of using such a model in real-world applications.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1 2xl:col-span-5 2xl:row-span-1  ",
    },
    {
        image: pytorch,
        title: "Advanced PyTorch Model Design",
        language: "PyTorch, TensorFlow",
        description:
            "Explored PyTorch through three levels of abstraction, starting with low-level tensor operations, advancing to modular neural network design with nn.Module, and culminating in high-level architecture construction with nn.Sequential. Concluded with an open-ended challenge to achieve maximum accuracy on the CIFAR-10 dataset by experimenting with custom architectures, optimizers, and hyperparameters.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1 2xl:col-span-4 2xl:row-span-1  ",
    },

    {
        image: tetris,
        title: "Tetris",
        language: "Java",
        description:
            "A simple clone of the popular game, Tetris, built in Java.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 2xl:col-span-3 2xl:row-span-2  ",
    },
    {
        image: NGordNet,
        title: "NGordNet",
        language: "Java, Spring Boot",
        description:
            "NGordNet is a browser-based tool that allows users to explore the history of word usage in English texts. Using a frontend interface, the tool will connect to a back-end Java service to process a user inputted word and generate relevant word data. The project emphasizes efficient design to handle complex cases in natural language processing and wordnet functionalities.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-4 2xl:row-span-1  ",
    },
    {
        image: housing,
        title: "Housing Data Analysis",
        language: "NumPy, Pandas, Matplotlib, Scikit-learn",
        description:
            "In this project, we dive into an extensive housing dataset from Cook County, Illinois, exploring the relationship between housing features and social context. I performing basic Exploratory Data Analysis (EDA) to uncover the structure of the data, adding new features, and cleaning the dataset. Once this was complete, I used machine learning techniques to predict housing prices and identify key factors that influence housing prices.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-5 2xl:row-span-1  ",
    },
    {
        image: jobjam,
        title: "JobJam",
        language: "React, Express, Node.js, Firebase",
        description:
            "A platform designed to connect job seekers with part-time employment opportunities. Features include an employer dashboard, job listings, application tracking, and personalized job recommendations. \n(Internship)",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ",
    },
    {
        image: spamham,
        title: "Spam vs Ham Email Classifier",
        language: "NumPy, Pandas, Matplotlib, Scikit-learn",
        description:
            "In this project, I created a binary classifier to distinguish between spam (junk, commercial) and ham (regular) emails. First, I focused on performing exploratory analysis, feature engineering from text data, and applying logistic regression to build the classifier. I then evaluated its performance while exploring methods to improve accuracy and reduce overfitting.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-5 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ",
    },
    {
        image: gif2048,
        title: "2048",
        language: "Java",
        description: "A simple clone of the popular game, 2048, built in Java.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-5 lg:row-span-1 2xl:col-span-4 2xl:row-span-1  ",
    },
];

export default projects;
