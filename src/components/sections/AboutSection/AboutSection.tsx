import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Button } from '../../primitives/Button/Button';
import { Card } from '../../primitives/Card/Card';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { ImagePlaceholder } from '../../primitives/ImagePlaceholder/ImagePlaceholder';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export const AboutSection: React.FC = () => {
  const philosophyPillars = [
    {
      title: 'Personalized Nutrition Support',
      description: 'Practical, balanced dietary guidance tailored to your daily schedule without extreme or unsustainable diets.',
      icon: 'nutrition' as const
    },
    {
      title: 'Custom Fitness & Workout Guidance',
      description: 'Low-impact, sustainable home movement plans customized for your baseline fitness level.',
      icon: 'fitness' as const
    },
    {
      title: 'Lifestyle & Habit Optimization',
      description: 'Mindful routine structuring focusing on sleep quality, daily hydration, stress, and consistent vitality.',
      icon: 'lifestyle' as const
    },
    {
      title: 'Regular Follow-Up & Accountability',
      description: 'Scheduled virtual check-ins and one-on-one reviews to keep you motivated, supported, and on track.',
      icon: 'clock' as const
    }
  ];

  return (
    <SectionWrapper
      id={SECTION_IDS.ABOUT}
      background="surface"
      padding="standard"
      containerSize="wide"
      className="about-section"
    >
      <SectionHeading
        eyebrow="Meet Your Coach"
        eyebrowVariant="primary"
        title={
          <>
            Dedicated Virtual Guidance Led By{' '}
            <span className="text-primary-green">{BUSINESS_CONFIG.coach.name}</span>
          </>
        }
        subtitle={`${BUSINESS_CONFIG.coach.title} • ${BUSINESS_CONFIG.coach.experience} Experience`}
        align="center"
      />

      <div className="about-grid">
        {/* =====================================================================
            LEFT COLUMN: Coach Visual Representation & Verified Badges
            ===================================================================== */}
        <RevealWrapper delay={1} className="about-visual-col stack stack-md">
          <Card variant="surface" className="about-visual-card">
            {/* Clear Placeholder for Coach Photograph */}
            <div className="coach-image-wrapper">
              <ImagePlaceholder
                aspectRatio="3/4"
                category="coaching"
                title="Coach Halima Sadiya"
                caption="Certified Health & Wellness Coach"
              />
              <div className="coach-placeholder-tag">
                <Badge variant="placeholder">
                  [COACH PHOTOGRAPH / VISUAL PLACEHOLDER]
                </Badge>
              </div>
            </div>

            {/* Coach Quick Card Information */}
            <div className="coach-details-card stack stack-sm">
              <div className="split">
                <span className="coach-name">{BUSINESS_CONFIG.coach.name}</span>
                <span className="font-hindi coach-hindi-name">{BUSINESS_CONFIG.hindiName}</span>
              </div>

              <div className="cluster cluster-sm">
                <Badge variant="accent" icon={<Icon name="award" size={13} />}>
                  {BUSINESS_CONFIG.coach.title}
                </Badge>
                <Badge variant="primary" icon={<Icon name="shield" size={13} />}>
                  {BUSINESS_CONFIG.coach.experience} Experience
                </Badge>
              </div>

              <div className="coach-scope-box">
                <Icon name="lifestyle" size={16} className="scope-icon" />
                <span>
                  <strong>100% Online Coaching: </strong> Virtual consulting &amp; follow-up (No physical gym facility).
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Introduction, Achievement Context, Philosophy & CTAs
            ===================================================================== */}
        <div className="about-content-col stack stack-lg">
          {/* Main Introduction Paragraph */}
          <div className="stack stack-sm">
            <h3 className="about-subtitle">
              Empowering Sustainable Lifestyle, Nutrition &amp; Fitness Changes
            </h3>
            <p className="about-intro-lead">
              "Online Health &amp; Wellness Coach helping individuals improve their nutrition, fitness and lifestyle through personalized guidance, workout support and regular follow-up."
            </p>
          </div>

          {/* Achievement Context Box */}
          <div className="about-achievement-card">
            <div className="achievement-icon-box">
              <Icon name="sparkles" size={22} />
            </div>
            <div className="stack stack-xs">
              <span className="achievement-title">Proven Coaching Background</span>
              <p className="achievement-text">
                6+ years of experience in guiding clients toward healthier lifestyle and weight-management goals; conducted online wellness programs and 21-day transformation challenges.
              </p>
            </div>
          </div>

          {/* Coaching Philosophy 4 Pillars Grid */}
          <div className="stack stack-sm">
            <h4 className="philosophy-header">Core Coaching Philosophy</h4>
            <div className="philosophy-grid">
              {philosophyPillars.map((pillar, idx) => (
                <div key={idx} className="philosophy-card">
                  <div className="philosophy-icon-box">
                    <Icon name={pillar.icon} size={18} />
                  </div>
                  <div className="stack stack-xs">
                    <h5 className="philosophy-card-title">{pillar.title}</h5>
                    <p className="philosophy-card-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="about-cta-row">
            <Button
              variant="accent"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={18} />}
            >
              {CTA_CONFIG.primary.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={CTA_CONFIG.secondary.href}
              rightIcon={<Icon name="chevron-down" size={18} />}
            >
              {CTA_CONFIG.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scoped Styles for About Section */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 5vw, 3.5rem);
          align-items: start;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        .about-visual-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .coach-image-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .coach-placeholder-tag {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
        }

        .coach-name {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .coach-hindi-name {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .coach-scope-box {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.75rem 0.85rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          color: var(--color-primary-800);
          line-height: var(--leading-normal);
        }

        .scope-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .about-subtitle {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--color-text-main);
          letter-spacing: -0.015em;
          line-height: var(--leading-tight);
          margin-bottom: 0.25rem;
        }

        .about-intro-lead {
          font-size: var(--text-base);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          font-weight: 500;
          margin: 0;
        }

        /* Achievement Box */
        .about-achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #F0FDF4 0%, #E8F5EE 100%);
          border: 1px solid var(--color-secondary-border);
          box-shadow: var(--shadow-xs);
        }

        .achievement-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background-color: #FFFFFF;
          border: 1px solid var(--color-secondary-border);
          color: var(--color-accent-600);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .achievement-title {
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .achievement-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        /* Philosophy Grid */
        .philosophy-header {
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-text-main);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.25rem;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 640px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .philosophy-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          transition: border-color var(--transition-fast);
        }

        .philosophy-card:hover {
          border-color: var(--color-secondary-border);
        }

        .philosophy-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 6px;
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .philosophy-card-title {
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }

        .philosophy-card-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .about-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </SectionWrapper>
  );
};
