import React from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import Hero from '../components/Hero';
import ProductHighlights from '../components/ProductHighlights';
import FAQSection from '../components/FAQSection';
import FloatingAIAssistant from '../components/FloatingAIAssistant';
import FloatingMockTestWidget from '../components/FloatingMockTestWidget';
import Footer from '../components/Footer';

export default function LandingPage({ isLoginOpen, onOpenLogin, onCloseLogin }) {
  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070F] text-white selection:bg-[#2F80FF] selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Sticky Glassmorphism Navbar */}
      <Navbar onOpenLogin={onOpenLogin} />

      {/* Login Modal (UI Only) */}
      <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} />

      {/* Floating Mock Test Widget – Right Side, Fixed */}
      <FloatingMockTestWidget onStartMockTest={onOpenLogin} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onStartJourney={onOpenLogin}
          onExploreFeatures={() => handleScrollToSection('#highlights')}
        />

        {/* 2. Product Highlights (6 Premium Glass Cards) */}
        <ProductHighlights />

        {/* 3. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Floating AI Chatbot – Bottom Right */}
      <FloatingAIAssistant />

      {/* Footer */}
      <Footer />
    </div>
  );
}
