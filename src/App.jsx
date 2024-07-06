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
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { NavMenu } from "./components/NavMenu";

function App() {
    const location = useLocation();
    return (
        <div className="bg-background h-screen w-screen">
            <AnimatePresence mode="wait" initial={false}>
                
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Splash />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project0" element={<Project0 />} />
                    <Route path="/placeholder" element={<Placeholder />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
