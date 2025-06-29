import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ColorPsychologyQuiz from './pages/ColorPsychologyQuiz';
import CommunityForum from './pages/CommunityForum';
import TravelMap from './pages/TravelMap';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<ColorPsychologyQuiz />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/map" element={<TravelMap />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;