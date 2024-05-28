import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styling/Home.module.js";
import { logo } from "../assets/index.js";
import NavigationBar from "../components/NavigationBar.jsx";

const Home = () => {
    return (
        <div className="pl-[25px] py-[10px]">
            <div className="flex flex-col">
                <div className="flex">
                    <NavigationBar />
                    <div className="flex flex-row ml-[150px]">
                        <h1 className="text-nameText text-m-gray py-7">
                            This is{" "}
                            <span className="text-name-text">About me.</span>
                        </h1>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
        </div>
    );
};

export default Home;
