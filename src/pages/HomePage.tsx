import React from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper/SectionWrapper';
import { CtaBanner } from '../components/shared/CtaBanner/CtaBanner';
import { FloatingWhatsAppWidget } from '../components/shared/FloatingWhatsAppWidget/FloatingWhatsAppWidget';
import { CTA_CONFIG } from '../config/navigation.config';

import { HeroSection } from '../components/sections/HeroSection/HeroSection';
import { TrustSection } from '../components/sections/TrustSection/TrustSection';
import { AboutSection } from '../components/sections/AboutSection/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection/ServicesSection';
import { ProgramFinderSection } from '../components/sections/ProgramFinderSection/ProgramFinderSection';
import { DetailedProgramsSection } from '../components/sections/DetailedProgramsSection/DetailedProgramsSection';
import { OnlineClassesSection } from '../components/sections/OnlineClassesSection/OnlineClassesSection';
import { ClassScheduleSection } from '../components/sections/ClassScheduleSection/ClassScheduleSection';
import { ChallengeSection } from '../components/sections/ChallengeSection/ChallengeSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection/HowItWorksSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection/WhyChooseUsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection/TestimonialsSection';
import { SuccessStoriesSection } from '../components/sections/SuccessStoriesSection/SuccessStoriesSection';
import { ConsultationCtaSection } from '../components/sections/ConsultationCtaSection/ConsultationCtaSection';
import { ContactSection } from '../components/sections/ContactSection/ContactSection';
import { InstagramSection } from '../components/sections/InstagramSection/InstagramSection';
import { FaqSection } from '../components/sections/FaqSection/FaqSection';
import { BlogSection } from '../components/sections/BlogSection/BlogSection';
import { WellnessToolsSection } from '../components/sections/WellnessToolsSection/WellnessToolsSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust & Credibility */}
      <TrustSection />

      {/* 3. About Coach Halima */}
      <AboutSection />

      {/* 4. Programs & Services Overview */}
      <ServicesSection />

      {/* 5. Interactive Program Finder */}
      <ProgramFinderSection />

      {/* 6. Detailed Program Breakdown */}
      <DetailedProgramsSection />

      {/* 7. Live Online Classes */}
      <OnlineClassesSection />

      {/* 8. Class Schedule */}
      <ClassScheduleSection />

      {/* 9. 21 Days Challenge Sprint */}
      <ChallengeSection />

      {/* 10. How It Works (4-Step Online Coaching Journey) */}
      <HowItWorksSection />

      {/* 11. Why Choose Halima Fitness Club */}
      <WhyChooseUsSection />

      {/* 12. Testimonials */}
      <TestimonialsSection />

      {/* 13. Client Success Stories */}
      <SuccessStoriesSection />

      {/* 14. Free Consultation CTA */}
      <ConsultationCtaSection />

      {/* 15. Contact & Consultation Form */}
      <ContactSection />

      {/* 16. Instagram Community & Social Channel */}
      <InstagramSection />

      {/* 17. Grounded FAQ Section (All 14 Questions) */}
      <FaqSection />

      {/* 18. Health & Wellness Tips / Blog */}
      <BlogSection />

      {/* 19. Educational Wellness Tools & BMI Screening */}
      <WellnessToolsSection />

      {/* 20. Reusable High-Conversion CTA Banner */}
      <SectionWrapper background="main" padding="standard" containerSize="wide">
        <CtaBanner primaryCtaText={CTA_CONFIG.primary.label} />
      </SectionWrapper>

      {/* 21. Floating WhatsApp Lead Generation Widget */}
      <FloatingWhatsAppWidget />
    </main>
  );
};

export default HomePage;
