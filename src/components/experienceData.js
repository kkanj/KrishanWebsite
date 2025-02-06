import around from "../assets/images/around.png";
import dna from "../assets/images/DNA.png";
import mars from "../assets/images/mars.png";

const experience = [
    {
        image: dna,
        title: "UC Berkeley DNA Sequencing Facility",
        language: "Software & Data Systems Engineer",
        description:
            "Developing a web-based sample submission and data retrieval portal for DNA sequencing customers. Leveraging the Berkeley Savio Supercomputer to process large-scale DNA sequencing data, enabling high-speed sequence analysis and automated customer data delivery. Working with Python, SQL, cloud computing, and bioinformatics tools to optimize sequencing workflows and improve accessibility for researchers.",
        link: "https://ucberkeleydnasequencing.com/home",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1 2xl:col-span-6 2xl:row-span-1 ",
    },
    {
        image: mars,
        title: "Mars Habitat at Berkeley",
        language: "Software Lead",
        description:
            "Leading the software development for our Mars Rover, focusing on autonomous navigation, sensor integration, SLAM, and data processing. Implementing pathfinding algorithms, object detection trained on NASA's Mars Terrain Database, and motor control using Python, C++, C, ROS. The project aims to send a rover to Mars ahead of human arrival, where it will autonomously navigate and locate sulfur deposits. The rover will then process the sulfur into sulfurized concrete, enabling it to construct a base and produce materials for future missions. This initiative supports long-term Martian habitation, aligning with the club’s mission—Mars Habitat at Berkeley.",
        link: "https://marshabitatatberkeley.weebly.com/",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1 2xl:col-span-6 2xl:row-span-1 ",
    },
    {
        image: around,
        title: "A Round Entertainment",
        language: "Lead Backend Software Engineering Intern",
        description:
            "Backend Team Lead - Built a scalable job-searching app backend (Node.js, Express, Firebase), boosting data retrieval efficiency by 30% and supporting 500K+ users. Created a complete database, implemented REST APIs with AES encryption, and reduced response times. Led intern teams, managed project plans, and resolved technical issues.",
        link: "https://www.aroundentgroup.com/",
        className:
            "md:col-span-6 md:row-span-1 lg:col-span-5 lg:row-span-1 2xl:col-span-5 2xl:row-span-1 ",
    },
];

export default experience;
