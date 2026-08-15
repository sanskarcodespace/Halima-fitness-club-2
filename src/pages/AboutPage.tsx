import React from 'react';
import { AboutSection } from '../components/sections/AboutSection/AboutSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection/HowItWorksSection';
import { FaqSection } from '../components/sections/FaqSection/FaqSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      {/* 1. About Coach Halima & Philosophy */}
      <AboutSection />

      {/* 2. Coaching Methodology / Approach */}
      <HowItWorksSection />

      {/* 3. Frequently Asked Questions */}
      <FaqSection />
    </>
  );
};

export default AboutPage;
