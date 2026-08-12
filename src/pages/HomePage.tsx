import React, { useState } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../components/primitives/SectionHeading/SectionHeading';
import { Button } from '../components/primitives/Button/Button';
import { Card } from '../components/primitives/Card/Card';
import { Badge } from '../components/primitives/Badge/Badge';
import { Accordion } from '../components/primitives/Accordion/Accordion';
import { Input, Textarea } from '../components/primitives/FormControl/FormControl';
import { Icon } from '../components/primitives/Icon/Icon';
import { PlaceholderShield } from '../components/shared/PlaceholderShield/PlaceholderShield';
import { CtaBanner } from '../components/shared/CtaBanner/CtaBanner';
import { BUSINESS_CONFIG } from '../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../config/navigation.config';
import { INITIAL_CONTENT } from '../content/initialContent';

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
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.HOME}
        background="subtle"
        padding="hero"
        containerSize="wide"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: 'calc(80vh - 80px)'
          }}
          className="hero-grid"
        >
          <div className="stack stack-lg" style={{ maxWidth: '780px' }}>
            {/* Positioning Eyebrow */}
            <div className="cluster cluster-sm">
              <Badge variant="emerald" icon={<Icon name="sparkles" size={14} />}>
                {INITIAL_CONTENT.hero.badgeText}
              </Badge>
              <Badge variant="gold" icon={<Icon name="shield" size={14} />}>
                {BUSINESS_CONFIG.coach.experience} Experience
              </Badge>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12
              }}
            >
              Transform Your Health, <span className="text-gradient-gold">Nutrition</span> &amp; Lifestyle with{' '}
              <span className="text-gradient-emerald">Dedicated Coaching</span>
            </h1>

            {/* Subheadline & Coach Attribution */}
            <p
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '680px'
              }}
            >
              {INITIAL_CONTENT.hero.subheadline}
            </p>

            {/* CTA Triggers */}
            <div className="cluster" style={{ gap: '1rem', marginTop: '0.5rem' }}>
              <Button
                variant="gold"
                size="lg"
                href={CTA_CONFIG.primary.href}
                rightIcon={<Icon name="arrow-right" size={18} />}
              >
                {INITIAL_CONTENT.hero.primaryCtaText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={CTA_CONFIG.secondary.href}
                rightIcon={<Icon name="chevron-down" size={18} />}
              >
                {INITIAL_CONTENT.hero.secondaryCtaText}
              </Button>
            </div>

            {/* Key Highlight Metrics / Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {INITIAL_CONTENT.hero.keyHighlights.map((stat) => (
                <div key={stat.label} className="stack stack-sm">
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 800,
                      color: 'var(--color-primary-400)'
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 2: ABOUT COACH SECTION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.ABOUT}
        background="surface"
        padding="standard"
        containerSize="wide"
      >
        <SectionHeading
          eyebrow={INITIAL_CONTENT.about.eyebrow}
          title={
            <>
              Guidance Led By{' '}
              <span className="text-gradient-gold">{BUSINESS_CONFIG.coach.name}</span>
            </>
          }
          subtitle={`${BUSINESS_CONFIG.coach.title} • ${BUSINESS_CONFIG.coach.experience} Experience`}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {/* Coach Bio Card */}
          <Card variant="glass" className="stack stack-md">
            <div className="cluster cluster-sm">
              <Badge variant="gold" icon={<Icon name="award" size={14} />}>
                {BUSINESS_CONFIG.coach.title}
              </Badge>
              <Badge variant="neutral">{BUSINESS_CONFIG.coach.experience} Experience</Badge>
            </div>

            <div className="stack stack-sm">
              {INITIAL_CONTENT.about.bioParagraphs.map((para, idx) => (
                <p key={idx} style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
                  {para}
                </p>
              ))}
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-primary-300)'
              }}
            >
              <strong>Online Focus:</strong> {INITIAL_CONTENT.about.scopeNotice}
            </div>
          </Card>

          {/* 4 Coaching Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {INITIAL_CONTENT.about.pillars.map((pillar, idx) => (
              <Card key={idx} variant="elevated" interactive className="stack stack-sm">
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-400)'
                  }}
                >
                  <Icon
                    name={
                      idx === 0
                        ? 'nutrition'
                        : idx === 1
                        ? 'fitness'
                        : idx === 2
                        ? 'clock'
                        : 'lifestyle'
                    }
                    size={20}
                  />
                </div>
                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{pillar.title}</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0 }}>
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 3: PROGRAMS & SERVICES SECTION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.SERVICES}
        background="main"
        padding="standard"
        containerSize="wide"
      >
        <SectionHeading
          eyebrow="Coaching Programs"
          title={
            <>
              Personalized Online <span className="text-gradient-emerald">Coaching Programs</span>
            </>
          }
          subtitle="Designed to build sustainable daily habits, practical nutrition clarity, and consistent progress."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {INITIAL_CONTENT.programs.map((program) => (
            <Card
              key={program.id}
              variant="elevated"
              interactive
              className="stack stack-md"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div className="stack stack-md">
                <div className="split">
                  {program.badge && <Badge variant="gold">{program.badge}</Badge>}
                  <Badge variant="neutral">Online</Badge>
                </div>

                <div className="stack stack-xs">
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700 }}>{program.title}</h3>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gold-400)', fontWeight: 600 }}>
                    {program.tagline}
                  </span>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  {program.description}
                </p>

                <div className="stack stack-xs">
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    What's Included:
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {program.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 'var(--text-sm)' }}>
                        <Icon name="check" size={16} style={{ color: 'var(--color-primary-400)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Safe Pricing Placeholder Display */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div className="split">
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Program Investment:</span>
                  <PlaceholderShield value={program.pricing} />
                </div>

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  href={CTA_CONFIG.primary.href}
                  rightIcon={<Icon name="arrow-right" size={16} />}
                >
                  Inquire for Program
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 4: METHODOLOGY / HOW IT WORKS
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.METHODOLOGY}
        background="surface"
        padding="standard"
        containerSize="wide"
      >
        <SectionHeading
          eyebrow="Coaching Process"
          title={
            <>
              How The Online Coaching <span className="text-gradient-gold">Roadmap Works</span>
            </>
          }
          subtitle="A structured, supportive 4-step framework from initial consultation to long-term habit consistency."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {INITIAL_CONTENT.methodology.map((step) => (
            <Card key={step.stepNumber} variant="elevated" className="stack stack-md">
              <div className="split">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 800,
                    color: 'var(--color-primary-400)'
                  }}
                >
                  {step.stepNumber}
                </span>
                <Badge variant="neutral">Step {step.stepNumber}</Badge>
              </div>

              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{step.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                {step.description}
              </p>

              <div className="stack stack-xs" style={{ marginTop: 'auto' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Deliverables:
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {step.keyDeliverables.map((deliv, dIdx) => (
                    <li key={dIdx} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--color-gold-400)' }}>•</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 5: FAQ SECTION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.FAQ}
        background="main"
        padding="standard"
        containerSize="narrow"
      >
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Got Questions? <span className="text-gradient-emerald">We Have Answers</span>
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
          SECTION 6: CONTACT & CONSULTATION
          ========================================================================= */}
      <SectionWrapper
        id={SECTION_IDS.CONTACT}
        background="surface"
        padding="standard"
        containerSize="wide"
      >
        <SectionHeading
          eyebrow={INITIAL_CONTENT.contact.eyebrow}
          title={
            <>
              Start Your Consultation with{' '}
              <span className="text-gradient-gold">{BUSINESS_CONFIG.coach.name}</span>
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
            <Card variant="glass" className="stack stack-md">
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>Direct Contact Channels</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                Reach out directly via email or Instagram to discuss custom coaching availability.
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
                  backgroundColor: 'var(--color-bg-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-400)',
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
                  backgroundColor: 'var(--color-bg-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold-400)',
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
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  border: '1px dashed rgba(245, 158, 11, 0.3)',
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

          {/* Consultation Request Form Control Scaffold */}
          <Card variant="glass">
            <form onSubmit={handleFormSubmit} className="stack stack-md">
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>
                Request Consultation
              </h3>

              {formSubmitted && (
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid var(--color-primary-400)',
                    color: '#FFFFFF',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  Thank you! Your inquiry has been received. Coach Halima will get back to you via email.
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
                placeholder="e.g. Daily nutrition, workout consistency, energy"
              />

              <Textarea
                label={INITIAL_CONTENT.contact.formFields.messageLabel}
                placeholder="Tell Coach Halima about your current fitness and nutrition habits..."
                rows={4}
              />

              <Button
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                rightIcon={<Icon name="arrow-right" size={18} />}
              >
                {INITIAL_CONTENT.contact.formFields.submitLabel}
              </Button>
            </form>
          </Card>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          REUSABLE CTA BANNER SCAFFOLD
          ========================================================================= */}
      <SectionWrapper background="main" padding="standard" containerSize="wide">
        <CtaBanner />
      </SectionWrapper>
    </main>
  );
};
