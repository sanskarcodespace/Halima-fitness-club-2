import React from 'react';
import { HeroSection } from '../components/sections/HeroSection/HeroSection';
import { TrustSection } from '../components/sections/TrustSection/TrustSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection/WhyChooseUsSection';
import { ServicesSection } from '../components/sections/ServicesSection/ServicesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection/TestimonialsSection';
import { ConsultationCtaSection } from '../components/sections/ConsultationCtaSection/ConsultationCtaSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Cues (Short Introduction) */}
      <TrustSection />

      {/* 3. Key Benefits / Why Choose Us */}
      <WhyChooseUsSection />

      {/* 4. Small Preview of Programs (Featured top 3) */}
      <ServicesSection limit={3} />

      {/* 5. Small Testimonial Preview (Top 2) */}
      <TestimonialsSection limit={2} />

      {/* 6. Strong Consultation CTA */}
      <ConsultationCtaSection />
    </>
  );
};

export default HomePage;
