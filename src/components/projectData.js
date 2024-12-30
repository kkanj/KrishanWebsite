import portalGif from "../assets/images/portal.gif";
import gif2048 from "../assets/images/2048Mac.png";
import joopi  from "../assets/images/joopiphone.png";
import jobjam from "../assets/images/JobJamMockup.png";
import cnn from "../assets/images/cnn.png";
import rnn from "../assets/images/rnn.png";

const projects = [
    {
        image: portalGif,
        title: "Portal Prowler",
        language: "Java",
        description:
            "A game engine built entirely from scratch in Java, featuring efficient custom data structures and dynamic world generation. The game includes engaging mechanics like stamina management, item upgrades, and escalating challenges, ensuring optimized gameplay across all devices.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-3 2xl:row-span-1 ", 
    },
    {
        image: cnn,
        title: "Image Classification Neural Network (CIFAR-10)",
        language: "PyTorch, TensorFlow",
        description: "Developed a deep understanding of neural network architecture by implementing key components such as vectorized backpropagation, batch normalization, and dropout. Designed and optimized convolutional neural networks (CNNs) and trained models on the CIFAR-10 dataset using PyTorch, achieving hands-on experience with modern deep learning workflows.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ", 
    },
    {
        image: joopi,
        title: "Joopi",
        language: "Expo Go, Express, Node.js, Firebase",
        description: "A social and dating app for the Asian American community, focused on creating genuine connections through cultural bonds. \n(Internship)",
        link: "https://example.com/project3",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 2xl:col-span-3 2xl:row-span-2  ", // Default span
    },
    {
        image: jobjam,
        title: "JobJam",
        language: "React, Express, Node.js, Firebase",
        description: "A platform designed to connect job seekers with part-time employment opportunities. Features include an employer dashboard, job listings, application tracking, and personalized job recommendations. \n(Internship)",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-6 2xl:row-span-1  ", 
    },
    {
        image: gif2048,
        title: "2048",
        language: "Java",
        description: "A simple clone of the popular game, 2048, built in Java.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-3 2xl:row-span-1  ", 
    },
    {
        image: rnn,
        title: "AI Headlines Generator and Summarizer (LSTM)",
        language: "PyTorch, TensorFlow",
        description: "Designed and trained an LSTM-based neural network to generate realistic news headlines and a Transformer model to summarize lengthy news articles effectively.",
        link: "https://example.com/project3",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-4 2xl:row-span-1  ", // Default span
    },
    {
        image: cnn,
        title: "Advanced PyTorch Model Design",
        language: "PyTorch, TensorFlow",
        description: "Explored PyTorch through three levels of abstraction, starting with low-level tensor operations, advancing to modular neural network design with nn.Module, and culminating in high-level architecture construction with nn.Sequential. Concluded with an open-ended challenge to achieve maximum accuracy on the CIFAR-10 dataset by experimenting with custom architectures, optimizers, and hyperparameters.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-3 2xl:row-span-1  ", 
    },
    {
        image: rnn,
        title: "Detecting Faulty Commits on GitHub using Machine Learning",
        language: "PyTorch, TensorFlow",
        description: "An end-to-end machine learning pipeline to identify faulty commits in GitHub repositories. Used features such as commit changes and author info, to train a model to classify commits as faulty or non-faulty. This project could improve code quality and reduce the time spent on code reviews.",
        link: "https://example.com/project2",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-1 2xl:col-span-5 2xl:row-span-1  ", 
    },
    {
        image: jobjam,
        title: "Tetris",
        language: "Java",
        description: "A simple clone of the popular game, Tetris, built in Java.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-3 2xl:row-span-1  ", 
    },
    {
        image: jobjam,
        title: "NGordNet",
        language: "Java",
        description: "This project involves developing a browser-based tool that allows users to explore the history of word usage in English texts. Using a front-end interface, the tool will connect to a back-end Java service to process user input and generate relevant word data. The project emphasizes efficient design to handle complex cases in natural language processing and wordnet functionalities.",
        link: "https://example.com/project1",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-8 lg:row-span-1 2xl:col-span-3 2xl:row-span-1  ", 
    },
];

export default projects;
