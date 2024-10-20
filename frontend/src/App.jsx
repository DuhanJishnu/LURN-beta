import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import SignUp from './components/SignUp.jsx';
import TypewriterPage from './components/TypeWrite.jsx';
import './index.css';

function App() {    
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<TypewriterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
