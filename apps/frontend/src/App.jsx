import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent.jsx";
import SignUp from "./components/SignUp.jsx";
import Welcome from "./components/Welcome.jsx";
import OurVision from "./pages/OurVision.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Flashcards from "./pages/Flashcard.jsx";
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
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/flashcard" element={<Flashcards />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
