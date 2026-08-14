import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { CTA_CONFIG } from '../../../config/navigation.config';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Choose Your Goal',
      eyebrow: 'Step 1: Discovery',
      description: 'Identify what you want help with — whether sustainable weight loss, healthy weight gain, nutrition clarity, home fitness guidance, or better daily lifestyle habits.',
      icon: 'lifestyle' as const,
      highlight: 'Identify Your Priority'
    },
    {
      stepNumber: '02',
      title: 'Book a Free Consultation',
      eyebrow: 'Step 2: Conversation',
      description: 'Schedule an initial 1-on-1 discovery call with Coach Halima Sadiya to discuss your daily routine, dietary preferences, baseline activity, and personal goals.',
      icon: 'user' as const,
      highlight: 'Always 100% Free'
    },
    {
      stepNumber: '03',
      title: 'Select the Relevant Option',
      eyebrow: 'Step 3: Customization',
      description: 'Determine the best coaching format for your schedule — from personalized 1-on-1 virtual coaching and 21-day challenges to interactive live Zoom group classes.',
      icon: 'sparkles' as const,
      highlight: 'Tailored to Your Life'
    },
    {
      stepNumber: '04',
      title: 'Begin Your Guided Journey',
      eyebrow: 'Step 4: Action & Support',
      description: 'Start your selected coaching experience with customized meal recommendations, guided home movement plans, and consistent virtual follow-up check-ins.',
      icon: 'check' as const,
      highlight: 'Regular Follow-Up'
    }
  ];

  return (
    <SectionWrapper
      id="how-it-works"
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="how-it-works-section"
    >
      <SectionHeading
        eyebrow="Simple 4-Step Process"
        eyebrowVariant="primary"
        title={
          <>
            How Your <span className="text-primary-green">Coaching Journey</span> Begins
          </>
        }
        subtitle="A clear, low-friction pathway from your first conversation to continuous online guidance with Coach Halima Sadiya."
        align="center"
      />

      <div className="how-it-works-container stack stack-lg">
        {/* 4-Step Process Grid / Timeline */}
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <RevealWrapper
              key={step.stepNumber}
              delay={(Math.min(idx + 1, 4)) as 1 | 2 | 3 | 4}
            >
              <Card
                variant="surface"
                className="step-card"
              >
                {/* Step Header */}
                <div className="step-card-header split">
                  <span className="step-number-badge">{step.stepNumber}</span>
                  <div className="step-icon-box" aria-hidden="true">
                    <Icon name={step.icon} size={18} />
                  </div>
                </div>

                {/* Step Content */}
                <div className="step-card-body stack stack-xs">
                  <span className="step-eyebrow">{step.eyebrow}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>

                {/* Step Footer Highlight */}
                <div className="step-card-footer">
                  <Badge variant="primary" icon={<Icon name="check" size={12} />}>
                    {step.highlight}
                  </Badge>
                </div>

                {/* Connector line for desktop except last item */}
                {idx < steps.length - 1 && (
                  <div className="step-desktop-connector" aria-hidden="true" />
                )}
              </Card>
            </RevealWrapper>
          ))}
        </div>

        {/* Onboarding Notice Callout */}
        <div className="onboarding-notice-box">
          <Icon name="shield" size={16} className="onboarding-icon" />
          <span>
            <strong>Personalized Onboarding: </strong> Exact onboarding steps, schedule timings, and personalized program frameworks can vary based on individual needs and are confirmed during your free initial consultation.
          </span>
        </div>

        {/* Action Row */}
        <div className="how-it-works-cta-row">
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
            href={CTA_CONFIG.secondary.href}
            rightIcon={<Icon name="chevron-down" size={18} />}
          >
            Explore Programs
          </Button>
        </div>
      </div>

      {/* How It Works Scoped Styles */}
      <style>{`
        .how-it-works-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          position: relative;
        }

        @media (min-width: 640px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .step-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xs);
          position: relative;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .step-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-sm);
        }

        .step-card-header {
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .step-number-badge {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-primary-800);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-subtle);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-card-body {
          flex: 1;
        }

        .step-eyebrow {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .step-title {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: var(--leading-snug);
          margin: 0;
        }

        .step-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0.25rem 0 0 0;
        }

        .step-card-footer {
          margin-top: 1.25rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border);
        }

        .step-desktop-connector {
          display: none;
        }

        .onboarding-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          color: var(--color-primary-900);
          line-height: var(--leading-normal);
        }

        .onboarding-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .how-it-works-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </SectionWrapper>
  );
};
