import React, { useState } from 'react';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { contentLanguages } from './db/contentLanguages';
import Homepage from './Pages/Homepage/Homepage';
import Templates from './Pages/Templates/Templates';
import Themes from './Pages/Themes/Themes';
import { isMobile } from 'react-device-detect';

function App() {
  const [english, setEnglish] = useState(true);
  const language = contentLanguages[english ? 'en' : 'da'];

  return (
    <ResumeState>
      <div className={isMobile ? 'App-mobile' : 'App'}>
        <Navbar language={language} english={english} setEnglish={setEnglish} />
        <Routes>
          <Route exact path="/" element={<Homepage language={language} />} />
          <Route exact path="/templates" element={<Templates language={language} />} />
          <Route exact path="/theme" element={<Themes language={language} />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
