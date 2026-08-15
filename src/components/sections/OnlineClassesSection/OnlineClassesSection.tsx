import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';

import { WhatsAppButton } from '../../shared/WhatsAppButton/WhatsAppButton';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

export const OnlineClassesSection: React.FC = () => {

  const classKeyFacts = [
    {
      metric: 'Zoom',
      label: 'Live Platform',
      detail: 'Interactive two-way video coaching environment',
      icon: 'sparkles' as const
    },
    {
      metric: '6 Days / Wk',
      label: 'Class Frequency',
      detail: 'Consistent weekday & Saturday routine (No Sunday classes)',
      icon: 'clock' as const
    },
    {
      metric: '60 Mins',
      label: 'Session Duration',
      detail: 'Structured warm-up, guided movement & cool-down',
      icon: 'lifestyle' as const
    },
    {
      metric: '20–25 Max',
      label: 'Limited Batch Size',
      detail: 'Small group size to preserve personal coach attention',
      icon: 'user' as const
    },
    {
      metric: 'Morning / Eve',
      label: 'Flexible Batches',
      detail: 'Convenient morning and evening schedule options',
      icon: 'clock' as const
    },
    {
      metric: 'On Request',
      label: 'Session Recordings',
      detail: 'Access recordings if you miss a scheduled live class',
      icon: 'award' as const
    }
  ];

  const classBenefits = [
    {
      title: 'Real-Time Form & Technique Feedback',
      description: 'Coach Halima observes your camera feed live to provide posture corrections and safe movement modifications.'
    },
    {
      title: 'Integrated Nutrition & Habit Insights',
      description: 'Each class integrates practical mini-lessons on meal planning, hydration, and mindful daily habits.'
    },
    {
      title: 'Supportive Group Energy & Accountability',
      description: 'Work out alongside like-minded participants in an uplifting, positive, and non-intimidating environment.'
    },
    {
      title: 'Zero Equipment Required',
      description: 'All routines are customized for home living rooms using functional bodyweight and gentle mobility exercises.'
    }
  ];

  return (
    <SectionWrapper
      id={SECTION_IDS.CLASSES}
      background="surface"
      padding="standard"
      containerSize="wide"
      className="online-classes-section"
    >
      <SectionHeading
        eyebrow="Interactive Virtual Coaching"
        eyebrowVariant="accent"
        title={
          <>
            Live Online <span className="text-primary-green">Fitness &amp; Diet Classes</span>
          </>
        }
        subtitle="Join structured 60-minute virtual group sessions conducted live on Zoom with dedicated personal attention from Coach Halima Sadiya."
        align="center"
      />

      {/* Main 2-Column Class Layout */}
      <div className="classes-grid">
        {/* =====================================================================
            LEFT COLUMN: Class Presentation, Atmosphere & Clear Options
            ===================================================================== */}
        <div className="classes-visual-col stack stack-md">
          <Card variant="surface" className="classes-visual-card">
            {/* Real Online Coaching Session Image */}
            <div className="classes-visual-img-wrapper">
              <img
                src="/images/online-classes.jpg"
                alt="Woman exercising at home via live Zoom coaching session — online fitness classes"
                className="classes-visual-img"
                loading="lazy"
                width="1280"
                height="720"
                decoding="async"
              />
            </div>

            {/* Trial Class vs Free Consultation Distinction Box */}
            <div className="trial-distinction-box stack stack-sm">
              <div className="trial-box-item stack stack-xs">
                <div className="split">
                  <span className="distinction-tag tag-trial">Trial Class Option</span>
                  <Badge variant="primary">On Request</Badge>
                </div>
                <p className="distinction-text">
                  <strong>Trial Class on Request: </strong> Experience a live 60-minute group Zoom class first-hand to see if the group energy and coaching style fit your daily routine.
                </p>
              </div>

              <div className="trial-divider" />

              <div className="trial-box-item stack stack-xs">
                <div className="split">
                  <span className="distinction-tag tag-consultation">1-on-1 Consultation</span>
                  <Badge variant="accent">Always Free</Badge>
                </div>
                <p className="distinction-text">
                  <strong>Free Initial Discovery Call: </strong> A dedicated 1-on-1 virtual consultation with Coach Halima to review your personal health history, schedule, and individual goals.
                </p>
              </div>
            </div>

            {/* 100% Online Note */}
            <div className="classes-scope-note">
              <Icon name="shield" size={16} className="scope-icon" />
              <span>
                <strong>Virtual-Only Coaching: </strong> Classes are hosted 100% online on Zoom. No physical gym attendance or gym equipment required.
              </span>
            </div>
          </Card>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Key Facts Grid, Benefits & 3-Tier CTAs
            ===================================================================== */}
        <div className="classes-content-col stack stack-md">
          {/* Confirmed Class Facts 6-Grid */}
          <div className="stack stack-xs">
            <h3 className="classes-section-subtitle">Confirmed Class Specifications</h3>
            <div className="class-facts-grid">
              {classKeyFacts.map((fact, idx) => (
                <div key={idx} className="class-fact-card">
                  <div className="fact-header">
                    <span className="fact-metric">{fact.metric}</span>
                    <div className="fact-icon-box" aria-hidden="true">
                      <Icon name={fact.icon} size={15} />
                    </div>
                  </div>
                  <strong className="fact-label">{fact.label}</strong>
                  <span className="fact-detail">{fact.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Class Benefits List */}
          <div className="stack stack-xs">
            <h3 className="classes-section-subtitle">Why Join Our Live Virtual Sessions</h3>
            <div className="class-benefits-grid">
              {classBenefits.map((benefit, idx) => (
                <div key={idx} className="class-benefit-item">
                  <div className="benefit-icon-box" aria-hidden="true">
                    <Icon name="check" size={15} />
                  </div>
                  <div className="stack stack-none">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-desc">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Tier CTA Action Row */}
          <div className="classes-cta-cluster">
            {/* Primary Action: Book Free Consultation */}
            <Button
              variant="accent"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={18} />}
            >
              Book Free Consultation
            </Button>

            {/* Secondary Action: Join Online Classes */}
            <Button
              variant="primary"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="sparkles" size={18} />}
            >
              Join Online Classes
            </Button>

            {/* Tertiary Action: WhatsApp Us */}
            <WhatsAppButton
              messageKey="classes"
              variant="outline"
              size="lg"
              label="WhatsApp Us"
            />
          </div>
        </div>
      </div>

      {/* Online Classes Scoped Styles */}
      <style>{`
        .classes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: start;
        }

        @media (min-width: 1024px) {
          .classes-grid {
            grid-template-columns: 0.95fr 1.15fr;
          }
        }

        .classes-visual-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .classes-visual-img-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--color-bg-subtle);
        }

        .classes-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .trial-distinction-box {
          padding: 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .distinction-tag {
          font-size: var(--text-xs);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .tag-trial {
          color: var(--color-primary-800);
        }

        .tag-consultation {
          color: var(--color-accent-700);
        }

        .distinction-text {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .trial-divider {
          height: 1px;
          background-color: var(--color-border);
          margin: 0.25rem 0;
        }

        .classes-scope-note {
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

        .classes-section-subtitle {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text-main);
          letter-spacing: -0.01em;
          margin: 0 0 0.25rem 0;
        }

        /* 6-Grid Facts */
        .class-facts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 600px) {
          .class-facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) and (max-width: 1023px) {
          .class-facts-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .class-fact-card {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0.85rem 1rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
        }

        .fact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .fact-metric {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-800);
          line-height: 1.1;
        }

        .fact-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fact-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .fact-detail {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.35;
          margin-top: 2px;
        }

        /* Benefits Grid */
        .class-benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem;
        }

        @media (min-width: 600px) {
          .class-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .class-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.75rem 0.85rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .benefit-icon-box {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-600);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .benefit-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }

        .benefit-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.35;
          margin: 2px 0 0 0;
        }

        /* CTA Cluster */
        .classes-cta-cluster {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          margin-top: 0.5rem;
        }

        .classes-whatsapp-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 0.9rem;
          border-radius: var(--radius-full);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-primary-800);
        }
      `}</style>
    </SectionWrapper>
  );
};
