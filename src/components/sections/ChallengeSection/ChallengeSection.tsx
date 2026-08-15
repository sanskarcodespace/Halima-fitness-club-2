import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';

import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';
import { CTA_CONFIG } from '../../../config/navigation.config';

export const ChallengeSection: React.FC = () => {
  const challengePillars = [
    {
      title: 'Daily Habit Architecture',
      description: 'Establish structured morning hydration, regular meal timing, and evening wind-down habits to build lasting consistency.',
      icon: 'sparkles' as const
    },
    {
      title: 'Practical Nutrition Guidelines',
      description: 'Learn sustainable, balanced meal structures and portion awareness using everyday home cooking without starvation extremes.',
      icon: 'nutrition' as const
    },
    {
      title: 'Guided Home Movement',
      description: 'Incorporate manageable 20–30 minute daily functional movement and mobility routines customized for your baseline.',
      icon: 'fitness' as const
    },
    {
      title: 'Virtual Accountability & Follow-up',
      description: 'Daily habit check-ins and direct feedback from Coach Halima to keep you motivated and supported throughout the 21 days.',
      icon: 'clock' as const
    }
  ];

  return (
    <SectionWrapper
      id="challenge"
      background="surface"
      padding="standard"
      containerSize="wide"
      className="challenge-section"
    >
      <SectionHeading
        eyebrow="Featured Guided Sprint"
        eyebrowVariant="accent"
        title={
          <>
            21 Days <span className="text-accent-orange">Weight Loss Challenge</span>
          </>
        }
        subtitle="A structured 21-day guided wellness sprint designed to help you reset your habits, build daily routine consistency, and kickstart a healthier lifestyle."
        align="center"
      />

      <div className="challenge-grid">
        {/* =====================================================================
            LEFT COLUMN: Campaign Visual & Sprint Journey Structure
            ===================================================================== */}
        <div className="challenge-visual-col stack stack-md">
          <Card variant="surface" className="challenge-visual-card">
            {/* Real Healthy Nutrition Image */}
            <div className="challenge-img-wrapper">
              <img
                src="/images/challenge-nutrition.jpg"
                alt="Nutritious balanced meal spread — healthy eating for the 21-day wellness challenge"
                className="challenge-img"
                loading="lazy"
                width="1280"
                height="720"
                decoding="async"
              />
            </div>

            {/* Sprint Milestone Timeline */}
            <div className="sprint-milestones-box stack stack-xs">
              <span className="sprint-box-title">The 21-Day Sprint Progression</span>
              <div className="sprint-timeline">
                <div className="timeline-phase">
                  <div className="phase-marker marker-1">1</div>
                  <div className="stack stack-none">
                    <strong className="phase-title">Days 1–7: Habit Reset &amp; Kickoff</strong>
                    <span className="phase-desc">Align daily hydration, meal timing, and simple morning movement.</span>
                  </div>
                </div>

                <div className="timeline-phase">
                  <div className="phase-marker marker-2">2</div>
                  <div className="stack stack-none">
                    <strong className="phase-title">Days 8–14: Routine Momentum</strong>
                    <span className="phase-desc">Strengthen daily workout consistency and mindful portion control.</span>
                  </div>
                </div>

                <div className="timeline-phase">
                  <div className="phase-marker marker-3">3</div>
                  <div className="stack stack-none">
                    <strong className="phase-title">Days 15–21: Long-Term Anchoring</strong>
                    <span className="phase-desc">Consolidate new daily rhythms and plan your ongoing wellness journey.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Batch Schedule Placeholder Notice */}
            <div className="next-batch-card split">
              <div className="stack stack-none">
                <span className="batch-label">Next Challenge Cohort:</span>
                <span className="batch-sub">Inquire to join the upcoming batch</span>
              </div>
              <PlaceholderNotice label="[SCHEDULE TO BE ANNOUNCED]" />
            </div>
          </Card>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Positioning, 4 Pillars, Disclaimer & Actions
            ===================================================================== */}
        <div className="challenge-content-col stack stack-md">
          {/* Main Positioning Block */}
          <div className="stack stack-xs">
            <div className="cluster cluster-sm">
              <Badge variant="accent" icon={<Icon name="sparkles" size={13} />}>
                Guided Wellness Journey
              </Badge>
              <Badge variant="neutral">100% Online Cohort</Badge>
            </div>

            <h3 className="challenge-main-heading">
              Break Inertia and Build Sustainable Habits in 21 Days
            </h3>

            <p className="challenge-intro-text">
              Halima Fitness Club has guided individuals through transformative 21-day challenges focused on realistic lifestyle upgrades. Instead of drastic restrictions, this sprint provides structured daily guidance, direct coach follow-up, and practical habit education to help you regain control of your health.
            </p>
          </div>

          {/* 4 Guided Pillars */}
          <div className="challenge-pillars-grid">
            {challengePillars.map((pillar, idx) => (
              <div key={idx} className="challenge-pillar-card">
                <div className="pillar-icon-box" aria-hidden="true">
                  <Icon name={pillar.icon} size={16} />
                </div>
                <div className="stack stack-none">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pre-Challenge Consultation Callout */}
          <div className="challenge-consult-box">
            <Icon name="user" size={16} className="consult-icon" />
            <span>
              <strong>Personalized Consultation: </strong> We conduct an initial discovery consultation before every challenge to ensure the format aligns with your schedule and baseline health.
            </span>
          </div>

          {/* Mandatory Safe Supporting Disclaimer */}
          <div className="challenge-disclaimer-note" role="note">
            <Icon name="shield" size={16} className="disclaimer-note-icon" />
            <p className="disclaimer-note-text">
              <strong>Important Note: </strong> Individual experiences vary. The challenge is designed as a guided wellness journey and does not guarantee a specific result.
            </p>
          </div>

          {/* Action Row */}
          <div className="challenge-cta-row">
            <Button
              variant="accent"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={18} />}
            >
              Book Free Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="sparkles" size={18} />}
            >
              Ask About the 21-Day Challenge
            </Button>
          </div>
        </div>
      </div>

      {/* Challenge Section Scoped Styles */}
      <style>{`
        .challenge-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: start;
        }

        @media (min-width: 1024px) {
          .challenge-grid {
            grid-template-columns: 0.95fr 1.15fr;
          }
        }

        .challenge-visual-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .challenge-img-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--color-bg-subtle);
        }

        .challenge-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .sprint-milestones-box {
          padding: 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .sprint-box-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-800);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.25rem;
        }

        .sprint-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .timeline-phase {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .phase-marker {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #FFFFFF;
          margin-top: 2px;
        }

        .marker-1 {
          background-color: var(--color-primary-600);
        }

        .marker-2 {
          background-color: var(--color-accent-600);
        }

        .marker-3 {
          background-color: var(--color-primary-800);
        }

        .phase-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-text-main);
        }

        .phase-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.35;
        }

        .next-batch-card {
          align-items: center;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
        }

        .batch-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .batch-sub {
          font-size: var(--text-xs);
          color: var(--color-primary-700);
        }

        .challenge-main-heading {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-text-main);
          letter-spacing: -0.015em;
          line-height: var(--leading-tight);
          margin: 0.25rem 0 0 0;
        }

        .challenge-intro-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0.25rem 0 0 0;
        }

        /* Pillars Grid */
        .challenge-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 600px) {
          .challenge-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .challenge-pillar-card {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .pillar-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }

        .pillar-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.35;
          margin: 2px 0 0 0;
        }

        .challenge-consult-box {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.75rem 0.95rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          color: var(--color-primary-800);
          line-height: var(--leading-normal);
        }

        .consult-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Disclaimer Note */
        .challenge-disclaimer-note {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          background-color: #FEF3C7;
          border: 1px solid #FDE68A;
        }

        .disclaimer-note-icon {
          color: #B45309;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-note-text {
          font-size: var(--text-xs);
          color: #78350F;
          line-height: var(--leading-normal);
          margin: 0;
        }

        .challenge-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 0.25rem;
        }
      `}</style>
    </SectionWrapper>
  );
};
