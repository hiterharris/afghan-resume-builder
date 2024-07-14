import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { contentLanguages } from './db/contentLanguages';

import Homepage from './Pages/Homepage/Homepage';
import Templates from './Pages/Templates/Templates';
import Theme from './Pages/Themes/Themes';

function App() {
  const [english, setEnglish] = useState(true);
  const language = contentLanguages[english ? 'en' : 'da'];

  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Hardik Desai" />
          <meta property="og:title" content="Resume Builder - Create Professional Resumes Online" />
          <meta property="og:description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Navbar language={language} />
        <Routes>
          <Route exact path="/" element={<Homepage english={english} setEnglish={setEnglish} language={language} />} />
          <Route exact path="/templates" element={<Templates english={english} setEnglish={setEnglish} language={language} />} />
          <Route exact path="/theme" element={<Theme english={english} setEnglish={setEnglish} language={language} />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
