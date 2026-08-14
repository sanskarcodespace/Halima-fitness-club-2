import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { CTA_CONFIG } from '../../../config/navigation.config';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export const WhyChooseUsSection: React.FC = () => {
  const differentiators = [
    {
      id: 'diff-personalized',
      title: 'Personalized 1-on-1 Support',
      tagline: 'Customized to Your Routine',
      description: 'Your nutrition frameworks and workout routines are individually tailored to your work schedule, home environment, and personal goals.',
      icon: 'user' as const,
      badge: 'Individualized'
    },
    {
      id: 'diff-online',
      title: '100% Online Convenience',
      tagline: 'Coaching From Home',
      description: 'Access live Zoom workouts and 1-on-1 consultations directly from your home, eliminating gym commutes, crowded facilities, and expensive equipment.',
      icon: 'sparkles' as const,
      badge: 'Virtual-First'
    },
    {
      id: 'diff-holistic',
      title: 'Holistic Wellness Focus',
      tagline: 'Nutrition, Fitness & Habits',
      description: 'We integrate balanced everyday nutrition, functional home movement, sleep hygiene, and daily hydration for complete lifestyle vitality.',
      icon: 'lifestyle' as const,
      badge: '360° Health'
    },
    {
      id: 'diff-followup',
      title: 'Consistent Follow-Up & Review',
      tagline: 'Direct Accountability',
      description: 'Regular virtual check-ins and progress assessments with Coach Halima Sadiya keep you motivated, consistent, and accountable.',
      icon: 'clock' as const,
      badge: '6+ Years Exp.'
    },
    {
      id: 'diff-batch',
      title: 'Small 20–25 Batch Size',
      tagline: 'Live Form Observation',
      description: 'Live online group classes are intentionally capped at 20–25 participants, ensuring Coach Halima can observe camera feeds and provide live posture feedback.',
      icon: 'shield' as const,
      badge: 'Personal Attention'
    },
    {
      id: 'diff-paths',
      title: 'Multiple Coaching Paths',
      tagline: 'Options For Every Lifestyle',
      description: 'Choose between dedicated 1-on-1 private coaching, high-momentum 21-day challenge sprints, or scheduled live group Zoom classes.',
      icon: 'award' as const,
      badge: 'Flexible Formats'
    },
    {
      id: 'diff-beginner',
      title: 'Beginner-Friendly Approach',
      tagline: 'Sustainable & Low-Impact',
      description: 'All routines and nutrition recommendations are designed for everyday individuals, emphasizing joint-friendly movements and realistic home cooking.',
      icon: 'heart' as const,
      badge: 'Non-Intimidating'
    },
    {
      id: 'diff-consultation',
      title: 'Free Initial Consultation',
      tagline: 'Clarity Before Choosing',
      description: 'Discuss your health goals, daily routine, and questions in an initial 1-on-1 discovery call before making any coaching commitment.',
      icon: 'check' as const,
      badge: 'Always Free'
    }
  ];

  return (
    <SectionWrapper
      id="why-choose-us"
      background="surface"
      padding="standard"
      containerSize="wide"
      className="why-choose-us-section"
    >
      <SectionHeading
        eyebrow="Our Coaching Standards"
        eyebrowVariant="primary"
        title={
          <>
            Why Choose <span className="text-primary-green">Halima Fitness Club</span>
          </>
        }
        subtitle="Experience compassionate, certified online health coaching built around sustainable lifestyle habits, practical nutrition, and regular personal follow-up."
        align="center"
      />

      <div className="why-choose-container stack stack-lg">
        {/* 8 Differentiator Cards Grid */}
        <div className="differentiators-grid">
          {differentiators.map((item, index) => (
            <RevealWrapper
              key={item.id}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <Card
                variant="surface"
                className="differentiator-card"
              >
                <div className="diff-card-header split">
                  <div className="diff-icon-box" aria-hidden="true">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <Badge variant="primary">{item.badge}</Badge>
                </div>

                <div className="diff-card-body stack stack-xs">
                  <h3 className="diff-title">{item.title}</h3>
                  <span className="diff-tagline">{item.tagline}</span>
                  <p className="diff-desc">{item.description}</p>
                </div>
              </Card>
            </RevealWrapper>
          ))}
        </div>

        {/* Reassurance Callout Bar */}
        <div className="diff-reassurance-bar">
          <div className="reassurance-content stack stack-none">
            <span className="reassurance-heading">Ready to Experience Personalized Online Guidance?</span>
            <p className="reassurance-sub">
              Schedule your free 1-on-1 virtual discovery consultation with Coach Halima Sadiya today.
            </p>
          </div>

          <Button
            variant="accent"
            size="lg"
            href={CTA_CONFIG.primary.href}
            rightIcon={<Icon name="arrow-right" size={18} />}
          >
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* Why Choose Us Scoped Styles */}
      <style>{`
        .why-choose-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .differentiators-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .differentiators-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .differentiators-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }

        .differentiator-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xs);
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .differentiator-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-sm);
        }

        .diff-card-header {
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .diff-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .diff-card-body {
          flex: 1;
        }

        .diff-title {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: var(--leading-snug);
          margin: 0;
        }

        .diff-tagline {
          font-size: var(--text-xs);
          color: var(--color-accent-700);
          font-weight: 600;
          margin-bottom: 0.25rem;
          display: block;
        }

        .diff-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        /* Reassurance Callout Bar */
        .diff-reassurance-bar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem 1.75rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #F0FDF4 0%, #E8F5EE 100%);
          border: 1px solid var(--color-secondary-border);
          box-shadow: var(--shadow-xs);
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .diff-reassurance-bar {
            flex-direction: row;
          }
        }

        .reassurance-heading {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .reassurance-sub {
          font-size: var(--text-sm);
          color: var(--color-primary-700);
          margin: 0.15rem 0 0 0;
        }
      `}</style>
    </SectionWrapper>
  );
};
