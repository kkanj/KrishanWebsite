import { react } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import {
    Splash,
    AboutMe,
    Home,
    Projects,
    Contact,
    Experience,
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
            <AnimatePresence mode="wait" initial={location.pathname == "/"}>
                
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/experience" element={<Experience />} />
                    </Routes>
                
            </AnimatePresence>
        </div>
    );
}

export default App;
