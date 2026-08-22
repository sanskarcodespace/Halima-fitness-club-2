import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ResultsPage } from './pages/ResultsPage';
import { ConsultationPage } from './pages/ConsultationPage';

// Lazy-loaded SEO program pages (code-split for performance)
const OnlineFitnessCoachingPage = lazy(() => import('./pages/programs/OnlineFitnessCoachingPage'));
const WeightLossCoachingPage = lazy(() => import('./pages/programs/WeightLossCoachingPage'));
const WeightGainCoachingPage = lazy(() => import('./pages/programs/WeightGainCoachingPage'));
const OnlineNutritionCoachingPage = lazy(() => import('./pages/programs/OnlineNutritionCoachingPage'));
const PersonalizedDietGuidancePage = lazy(() => import('./pages/programs/PersonalizedDietGuidancePage'));
const TwentyOneDayChallengePage = lazy(() => import('./pages/programs/TwentyOneDayChallengePage'));
const LifestyleWellnessCoachingPage = lazy(() => import('./pages/programs/LifestyleWellnessCoachingPage'));
const OnlineDietFitnessClassesPage = lazy(() => import('./pages/programs/OnlineDietFitnessClassesPage'));
const WeightManagementProgramPage = lazy(() => import('./pages/programs/WeightManagementProgramPage'));
const PersonalHealthCoachingPage = lazy(() => import('./pages/programs/PersonalHealthCoachingPage'));

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
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />

              {/* SEO Program Pages */}
              <Route path="/online-fitness-coaching" element={<OnlineFitnessCoachingPage />} />
              <Route path="/weight-loss-coaching" element={<WeightLossCoachingPage />} />
              <Route path="/weight-gain-coaching" element={<WeightGainCoachingPage />} />
              <Route path="/online-nutrition-coaching" element={<OnlineNutritionCoachingPage />} />
              <Route path="/personalized-diet-guidance" element={<PersonalizedDietGuidancePage />} />
              <Route path="/21-days-weight-loss-challenge" element={<TwentyOneDayChallengePage />} />
              <Route path="/lifestyle-wellness-coaching" element={<LifestyleWellnessCoachingPage />} />
              <Route path="/online-diet-fitness-classes" element={<OnlineDietFitnessClassesPage />} />
              <Route path="/weight-management-program" element={<WeightManagementProgramPage />} />
              <Route path="/personal-health-coaching" element={<PersonalHealthCoachingPage />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global Semantic Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
