import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent.jsx";
import Portal from "./components/Portal.jsx";
import Welcome from "./components/Welcome.jsx";
import OurVision from "./pages/OurVision.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Quiz from "./pages/Quiz.jsx";
import Flashcards from "./pages/Flashcard.jsx";
import Flowchart from "./pages/Flowchart.jsx";
import Compare from "./pages/Compare.jsx";
import MindMap from "./pages/MindMap.jsx";
import "./index.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/vision" element={<OurVision />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth" element={<Portal />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/flashcard" element={<Flashcards />} />
                    <Route path="/flowchart" element={<Flowchart />} />
                    <Route path="/compare" element={<Compare />} />
                    
                    <Route path="/mindmap" element={<MindMap />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
