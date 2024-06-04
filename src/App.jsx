import { react } from "react";
import "./App.css";
import {
    Splash,
    AboutMe,
    Home,
    Projects,
    Contact,
    Project0,
    Placeholder,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="bg-background h-screen w-screen">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Splash />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project0" element={<Project0 />} />
                        <Route path="/placeholder" element={<Placeholder />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
