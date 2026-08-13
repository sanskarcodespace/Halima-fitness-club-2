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
import { SuccessStoriesSection } from '../components/sections/SuccessStoriesSection/SuccessStoriesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection/TestimonialsSection';
import { ConsultationCtaSection } from '../components/sections/ConsultationCtaSection/ConsultationCtaSection';
import { FaqSection } from '../components/sections/FaqSection/FaqSection';
import { ContactSection } from '../components/sections/ContactSection/ContactSection';
import { InstagramSection } from '../components/sections/InstagramSection/InstagramSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* =========================================================================
          SECTION 1: HOME / HERO SECTION
          ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          EVIDENCE-BASED TRUST / STATISTICS SECTION
          ========================================================================= */}
      <TrustSection />

      {/* =========================================================================
          SECTION 2: ABOUT COACH SECTION
          ========================================================================= */}
      <AboutSection />

      {/* =========================================================================
          SECTION 3: PROGRAMS & SERVICES OVERVIEW
          ========================================================================= */}
      <ServicesSection />

      {/* =========================================================================
          INTERACTIVE GOAL-BASED PROGRAM FINDER
          ========================================================================= */}
      <ProgramFinderSection />

      {/* =========================================================================
          DETAILED PROGRAM BREAKDOWNS (ALL 10 PROGRAMS)
          ========================================================================= */}
      <DetailedProgramsSection />

      {/* =========================================================================
          SECTION 4: ONLINE CLASSES SECTION (ZOOM LIVE COACHING)
          ========================================================================= */}
      <OnlineClassesSection />

      {/* =========================================================================
          MORNING AND EVENING CLASS SCHEDULE
          ========================================================================= */}
      <ClassScheduleSection />

      {/* =========================================================================
          FEATURED 21 DAYS WEIGHT LOSS CHALLENGE SPRINT
          ========================================================================= */}
      <ChallengeSection />

      {/* =========================================================================
          HOW IT WORKS (4-STEP ONLINE COACHING JOURNEY)
          ========================================================================= */}
      <HowItWorksSection />

      {/* =========================================================================
          WHY CHOOSE HALIMA FITNESS CLUB (8 GROUNDED DIFFERENTIATORS)
          ========================================================================= */}
      <WhyChooseUsSection />

      {/* =========================================================================
          SECTION 5: SUCCESS STORIES (ETHICAL EDITORIAL JOURNEYS)
          ========================================================================= */}
      <SuccessStoriesSection />

      {/* =========================================================================
          SECTION 6: TESTIMONIALS SECTION (AUTHENTIC FEEDBACK READY)
          ========================================================================= */}
      <TestimonialsSection />

      {/* =========================================================================
          HIGH-CONVERSION FREE CONSULTATION CTA
          ========================================================================= */}
      <ConsultationCtaSection />

      {/* =========================================================================
          SECTION 7: FAQ SECTION (ALL 14 QUESTIONS GROUNDED)
          ========================================================================= */}
      <FaqSection />

      {/* =========================================================================
          SECTION 8: CONTACT & CONSULTATION SECTION
          ========================================================================= */}
      <ContactSection />

      {/* =========================================================================
          SECTION 9: INSTAGRAM COMMUNITY & SOCIAL PROOF
          ========================================================================= */}
      <InstagramSection />

      {/* =========================================================================
          REUSABLE CONVERSION CTA BANNER
          ========================================================================= */}
      <SectionWrapper background="main" padding="standard" containerSize="wide">
        <CtaBanner primaryCtaText={CTA_CONFIG.primary.label} />
      </SectionWrapper>

      {/* =========================================================================
          FLOATING WHATSAPP LEAD GENERATION WIDGET
          ========================================================================= */}
      <FloatingWhatsAppWidget />
    </main>
  );
};
