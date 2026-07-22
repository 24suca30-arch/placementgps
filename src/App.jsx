import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Code2, Map, FileCheck2, BookOpenCheck } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            isLoginOpen={isLoginOpen}
            onOpenLogin={openLogin}
            onCloseLogin={closeLogin}
          />
        }
      />
      <Route
        path="/practice"
        element={
          <PlaceholderPage
            title="Practice Arena"
            description="Practice coding, aptitude, logical reasoning, verbal ability, and technical MCQs with detailed explanations. Coming soon."
            icon={Code2}
            onOpenLogin={openLogin}
          />
        }
      />
      <Route
        path="/roadmap"
        element={
          <PlaceholderPage
            title="Personalized Roadmap"
            description="Receive a customized preparation plan based on your strengths, weaknesses, and dream company. Coming soon."
            icon={Map}
            onOpenLogin={openLogin}
          />
        }
      />
      <Route
        path="/resume-analyser"
        element={
          <PlaceholderPage
            title="Resume Analyser"
            description="Upload your resume and receive AI-powered ATS optimization suggestions. Coming soon."
            icon={FileCheck2}
            onOpenLogin={openLogin}
          />
        }
      />
      <Route
        path="/free-courses"
        element={
          <PlaceholderPage
            title="Free Courses"
            description="Discover curated YouTube videos, documentation, roadmaps, and courses—all completely free. Coming soon."
            icon={BookOpenCheck}
            onOpenLogin={openLogin}
          />
        }
      />
    </Routes>
  );
}
