import React from 'react';
import { Card } from '../../primitives/Card/Card';
import { Badge } from '../../primitives/Badge/Badge';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { WhatsAppButton } from '../../shared/WhatsAppButton/WhatsAppButton';
import { CTA_CONFIG } from '../../../config/navigation.config';

// Map program categories to real images
const PROGRAM_IMAGES: Record<string, string> = {
  nutrition: '/images/program-nutrition.jpg',
  fitness: '/images/blog-fitness.jpg',
  lifestyle: '/images/blog-lifestyle.jpg',
  challenge: '/images/challenge-nutrition.jpg',
  coaching: '/images/program-weight-loss.jpg',
};
const DEFAULT_PROGRAM_IMG = '/images/program-weight-loss.jpg';

export interface DetailedProgramData {
  id: string;
  anchorId: string;
  title: string;
  tagline: string;
  category: 'nutrition' | 'fitness' | 'lifestyle' | 'challenge' | 'coaching';
  targetAudience: string;
  focusAreas: string[];
  supportIncludes: string[];
  coachingProcess: {
    step: string;
    description: string;
  }[];
  customCtaLabel?: string;
  customCtaHref?: string;
  isClassRelated?: boolean;
}

interface ProgramDetailCardProps {
  program: DetailedProgramData;
  reverseLayout?: boolean;
}

export const ProgramDetailCard: React.FC<ProgramDetailCardProps> = ({
  program,
  reverseLayout = false
}) => {
  return (
    <Card
      id={program.anchorId}
      variant="surface"
      className={`program-detail-card ${reverseLayout ? 'reverse-layout' : ''}`}
    >
      {/* Visual / Highlights Column */}
      <div className="program-detail-visual stack stack-md">
        <div className="program-img-wrapper">
          <img
            src={PROGRAM_IMAGES[program.category] ?? DEFAULT_PROGRAM_IMG}
            alt={`${program.title} — online wellness coaching program`}
            className="program-banner-img"
            loading="lazy"
            width="800"
            height="450"
            decoding="async"
          />
        </div>

        {/* Target Profile Box */}
        <div className="target-profile-box stack stack-xs">
          <div className="split">
            <span className="profile-label">
              <Icon name="user" size={14} style={{ color: 'var(--color-primary-700)' }} />
              <strong>Who Is This For?</strong>
            </span>
            <Badge variant="primary">Target Profile</Badge>
          </div>
          <p className="profile-text">{program.targetAudience}</p>
        </div>

        {/* High-Level Coaching Flow */}
        <div className="coaching-flow-box stack stack-xs">
          <span className="flow-title">How Virtual Coaching Works:</span>
          <div className="flow-steps-list">
            {program.coachingProcess.map((proc, idx) => (
              <div key={idx} className="flow-step-item">
                <span className="flow-step-number">{idx + 1}</span>
                <div className="stack stack-none">
                  <strong className="flow-step-title">{proc.step}</strong>
                  <span className="flow-step-desc">{proc.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Information & Focus Areas Column */}
      <div className="program-detail-content stack stack-md">
        <div className="stack stack-xs">
          <div className="cluster cluster-sm">
            <Badge variant="accent" icon={<Icon name="sparkles" size={13} />}>
              100% Online Coaching
            </Badge>
            <Badge variant="neutral">Personalized Guidance</Badge>
          </div>
          <h3 className="program-detail-title">{program.title}</h3>
          <p className="program-detail-tagline">{program.tagline}</p>
        </div>

        {/* Key Focus Areas */}
        <div className="stack stack-xs">
          <h4 className="detail-section-header">Key Program Focus Areas</h4>
          <div className="focus-pills-grid">
            {program.focusAreas.map((focus, idx) => (
              <div key={idx} className="focus-pill">
                <Icon name="check" size={14} className="focus-check" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Deliverables */}
        <div className="stack stack-xs">
          <h4 className="detail-section-header">What Your Virtual Support Includes</h4>
          <ul className="detail-support-list">
            {program.supportIncludes.map((item, idx) => (
              <li key={idx} className="detail-support-item">
                <div className="support-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action / Next Step Row */}
        <div className="program-detail-actions">
          <Button
            variant="accent"
            size="md"
            href={program.customCtaHref || CTA_CONFIG.primary.href}
            rightIcon={<Icon name="arrow-right" size={16} />}
          >
            {program.customCtaLabel || 'Book Free Consultation'}
          </Button>

          {/* WhatsApp Secondary or Class Option */}
          {program.isClassRelated ? (
            <WhatsAppButton
              messageKey="classes"
              variant="outline"
              size="md"
              label="WhatsApp: Join Classes"
            />
          ) : program.id === 'det-weight-loss' ? (
            <WhatsAppButton
              messageKey="weightLoss"
              variant="outline"
              size="md"
              label="WhatsApp: Weight Loss"
            />
          ) : (
            <WhatsAppButton
              customMessage={`Hi Coach Halima, I am interested in ${program.title}.`}
              variant="outline"
              size="md"
              label="WhatsApp Us"
            />
          )}
        </div>
      </div>

      {/* Scoped Styles for Program Detail Card */}
      <style>{`
        .program-detail-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          scroll-margin-top: 80px;
          margin-bottom: 2rem;
        }

        @media (min-width: 1024px) {
          .program-detail-card {
            grid-template-columns: 1fr 1.25fr;
            align-items: start;
            padding: 2.25rem;
          }

          .program-detail-card.reverse-layout {
            grid-template-columns: 1.25fr 1fr;
          }

          .program-detail-card.reverse-layout .program-detail-visual {
            order: 2;
          }

          .program-detail-card.reverse-layout .program-detail-content {
            order: 1;
          }
        }

        .target-profile-box {
          padding: 1rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);

        .program-img-wrapper {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }
        .program-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }
        .program-detail-card:hover .program-banner-img { transform: scale(1.03); }
        }

        .profile-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: var(--text-xs);
          color: var(--color-primary-900);
        }

        .profile-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .coaching-flow-box {
          padding: 1rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .flow-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-800);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .flow-steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.25rem;
        }

        .flow-step-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .flow-step-number {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--color-primary-700);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .flow-step-title {
          font-size: var(--text-xs);
          color: var(--color-text-main);
          font-weight: 700;
        }

        .flow-step-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.35;
        }

        .program-detail-title {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-primary-900);
          line-height: var(--leading-tight);
          margin: 0;
        }

        .program-detail-tagline {
          font-size: var(--text-base);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .detail-section-header {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 0.25rem 0;
        }

        .focus-pills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .focus-pills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .focus-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-text-main);
        }

        .focus-check {
          color: var(--color-primary-600);
          flex-shrink: 0;
        }

        .detail-support-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .detail-support-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
        }

        .support-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 7px;
        }

        .program-detail-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          margin-top: 0.5rem;
        }

        .whatsapp-notice-shield {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-primary-800);
        }
      `}</style>
    </Card>
  );
};
