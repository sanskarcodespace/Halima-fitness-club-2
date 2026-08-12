import React, { useState } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../components/primitives/SectionHeading/SectionHeading';
import { Button } from '../components/primitives/Button/Button';
import { Card } from '../components/primitives/Card/Card';
import { Accordion } from '../components/primitives/Accordion/Accordion';
import { Input, Textarea } from '../components/primitives/FormControl/FormControl';
import { Icon } from '../components/primitives/Icon/Icon';
import { PlaceholderShield } from '../components/shared/PlaceholderShield/PlaceholderShield';
import { CtaBanner } from '../components/shared/CtaBanner/CtaBanner';
import { BUSINESS_CONFIG } from '../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../config/navigation.config';
import { INITIAL_CONTENT } from '../content/initialContent';

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

export const HomePage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  // Convert FAQ data for the Accordion primitive
  const faqAccordionItems = INITIAL_CONTENT.faq.map((item) => ({
    id: item.id,
    title: item.question,
    content: <p style={{ margin: 0 }}>{item.answer}</p>
  }));

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
          SECTION 7: FAQ SECTION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.FAQ}
        background="subtle"
        padding="standard"
        containerSize="narrow"
      >
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          eyebrowVariant="primary"
          title={
            <>
              Got Questions? <span className="text-primary-green">We Have Answers</span>
            </>
          }
          subtitle="Everything you need to know about Coach Halima's online coaching framework."
          align="center"
        />

        <Accordion
          items={faqAccordionItems}
          defaultOpenIds={['faq-1']}
        />
      </SectionWrapper>

      {/* =========================================================================
          SECTION 8: CONTACT & CONSULTATION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.CONTACT}
        background="surface"
        padding="standard"
        containerSize="wide"
      >
        <SectionHeading
          eyebrow={INITIAL_CONTENT.contact.eyebrow}
          eyebrowVariant="accent"
          title={
            <>
              Book Your Free Consultation with{' '}
              <span className="text-accent-orange">{BUSINESS_CONFIG.coach.name}</span>
            </>
          }
          subtitle={INITIAL_CONTENT.contact.subheading}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Direct Verified Contact Channels */}
          <div className="stack stack-lg">
            <Card variant="surface" className="stack stack-md">
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>Direct Contact Channels</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                Reach out directly via email or Instagram to discuss online coaching availability and custom goals.
              </p>

              {/* Email Contact Card */}
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-secondary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-700)',
                    flexShrink: 0
                  }}
                >
                  <Icon name="mail" size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Email Inquiries</span>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    {BUSINESS_CONFIG.email}
                  </span>
                </div>
              </a>

              {/* Instagram Profile Card */}
              <a
                href={BUSINESS_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-accent-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent-600)',
                    flexShrink: 0
                  }}
                >
                  <Icon name="instagram" size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Official Instagram</span>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    {BUSINESS_CONFIG.instagram.handle}
                  </span>
                </div>
              </a>

              {/* Safe Placeholder Protections for Unprovided Contact Channels */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-placeholder-bg)',
                  border: '1px dashed var(--color-placeholder-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div className="cluster cluster-sm">
                  <Icon name="alert" size={16} style={{ color: 'var(--color-placeholder-text)' }} />
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-placeholder-text)' }}>
                    Pending Contact Configurations:
                  </span>
                </div>
                <div className="cluster cluster-sm">
                  <PlaceholderShield value={BUSINESS_CONFIG.contactPlaceholders.whatsapp} />
                  <PlaceholderShield value={BUSINESS_CONFIG.contactPlaceholders.phone} />
                </div>
              </div>
            </Card>
          </div>

          {/* Consultation Request Form Control */}
          <Card variant="surface">
            <form onSubmit={handleFormSubmit} className="stack stack-md">
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>
                Book Free Consultation
              </h3>

              {formSubmitted && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-success-bg)',
                    border: '1px solid var(--color-success-border)',
                    color: 'var(--color-success-text)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500
                  }}
                >
                  Thank you! Your consultation request has been received. Coach Halima will get back to you directly.
                </div>
              )}

              <Input
                label={INITIAL_CONTENT.contact.formFields.nameLabel}
                placeholder="Enter your name"
                required
              />

              <Input
                type="email"
                label={INITIAL_CONTENT.contact.formFields.emailLabel}
                placeholder="you@example.com"
                required
              />

              <Input
                label={INITIAL_CONTENT.contact.formFields.goalLabel}
                placeholder="e.g. Sustainable nutrition, routine consistency"
              />

              <Textarea
                label={INITIAL_CONTENT.contact.formFields.messageLabel}
                placeholder="Tell Coach Halima about your current routine & wellness goals..."
                rows={3}
              />

              <Button
                type="submit"
                variant="accent"
                size="lg"
                fullWidth
                rightIcon={<Icon name="arrow-right" size={18} />}
              >
                {CTA_CONFIG.primary.label}
              </Button>
            </form>
          </Card>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          REUSABLE CONVERSION CTA BANNER
          ========================================================================= */}
      <SectionWrapper background="main" padding="standard" containerSize="wide">
        <CtaBanner primaryCtaText={CTA_CONFIG.primary.label} />
      </SectionWrapper>
    </main>
  );
};
