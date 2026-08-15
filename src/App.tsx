import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ResultsPage } from './pages/ResultsPage';
import { ConsultationPage } from './pages/ConsultationPage';

// Scroll to top helper on route change for seamless multi-page UX
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Global Header Navigation */}
        <Header />

        {/* Main Route Content */}
        <div style={{ flex: '1 0 auto', paddingTop: '72px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Semantic Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
