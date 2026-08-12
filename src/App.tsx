import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Header Navigation */}
      <Header />

      {/* Main Page Content */}
      <div style={{ flex: '1 0 auto' }}>
        <HomePage />
      </div>

      {/* Global Semantic Footer */}
      <Footer />
    </div>
  );
};

export default App;
