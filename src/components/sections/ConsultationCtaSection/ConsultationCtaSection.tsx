import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { CTA_CONFIG } from '../../../config/navigation.config';

export interface ConsultationCtaSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export const ConsultationCtaSection: React.FC<ConsultationCtaSectionProps> = ({
  id = 'consultation-cta',
  title = 'Take the First Step Toward Healthier Habits',
  subtitle = 'Not sure which program is right for you? Start with a free initial consultation to discuss your routine, challenges, and goals directly with Coach Halima Sadiya.',
  eyebrow = 'Free Initial Consultation • 100% Online',
  className
}) => {
  return (
    <SectionWrapper
      id={id}
      background="main"
      padding="standard"
      containerSize="wide"
      className={className}
    >
      <div className="consultation-cta-card">
        {/* Decorative Background Accents */}
        <div className="cta-backdrop-glow" aria-hidden="true" />

        <div className="consultation-cta-content stack stack-lg">
          {/* Eyebrow & Badges */}
          <div className="cluster cluster-sm cta-header-cluster">
            <Badge variant="accent" icon={<Icon name="sparkles" size={13} />}>
              {eyebrow}
            </Badge>
            <span className="cta-availability-pill">
              <span className="online-indicator" aria-hidden="true" />
              {BUSINESS_CONFIG.availability}
            </span>
          </div>

          {/* Main Headline & Supporting Paragraph */}
          <div className="stack stack-xs cta-text-block">
            <h2 className="consultation-cta-title">{title}</h2>
            <p className="consultation-cta-subtitle">{subtitle}</p>
          </div>

          {/* Trust Value Pillars */}
          <div className="cta-pillars-row">
            <div className="cta-pillar-item">
              <Icon name="check" size={16} className="pillar-check-icon" />
              <span>Always 100% Free</span>
            </div>
            <div className="cta-pillar-item">
              <Icon name="shield" size={16} className="pillar-check-icon" />
              <span>Zero Pressure / No Obligation</span>
            </div>
            <div className="cta-pillar-item">
              <Icon name="user" size={16} className="pillar-check-icon" />
              <span>Personalized Goal Discussion</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="consultation-cta-actions">
            <Button
              variant="accent"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={18} />}
              className="consultation-primary-btn"
            >
              Book Free Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#contact"
              rightIcon={<Icon name="message" size={18} />}
              className="consultation-whatsapp-btn"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Direct Email Link Footer */}
          <div className="cta-direct-contact">
            <span className="direct-label">Prefer to write directly?</span>
            <a
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="direct-email-link"
            >
              <Icon name="mail" size={14} />
              <span>{BUSINESS_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Reusable Free Consultation CTA */}
      <style>{`
        .consultation-cta-card {
          position: relative;
          background: linear-gradient(145deg, #062217 0%, #0D4A38 50%, #083324 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--radius-xl);
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem);
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(6, 34, 23, 0.4);
          text-align: center;
        }

        .cta-backdrop-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(235, 107, 54, 0.15) 0%, rgba(212, 175, 55, 0.08) 40%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .consultation-cta-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          align-items: center;
        }

        .cta-header-cluster {
          justify-content: center;
        }

        .cta-availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: var(--text-xs);
          font-weight: 600;
          color: #A3E635;
          background-color: rgba(163, 230, 53, 0.12);
          border: 1px solid rgba(163, 230, 53, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .online-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #A3E635;
          box-shadow: 0 0 8px #A3E635;
        }

        .cta-text-block {
          align-items: center;
        }

        .consultation-cta-title {
          font-family: var(--font-heading);
          font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
          font-weight: 800;
          color: #FFFFFF;
          line-height: var(--leading-tight);
          letter-spacing: -0.02em;
          margin: 0;
        }

        .consultation-cta-subtitle {
          font-size: clamp(var(--text-sm), 2vw, var(--text-base));
          color: rgba(255, 255, 255, 0.85);
          line-height: var(--leading-relaxed);
          max-width: 680px;
          margin: 0.5rem auto 0 auto;
        }

        .cta-pillars-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1.25rem 2rem;
          padding: 0.75rem 0;
        }

        .cta-pillar-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: var(--text-xs);
          font-weight: 600;
          color: #E2E8F0;
        }

        .pillar-check-icon {
          color: var(--color-accent-400);
          flex-shrink: 0;
        }

        .consultation-cta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .consultation-primary-btn {
          min-width: 220px;
        }

        .consultation-whatsapp-btn {
          color: #FFFFFF !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        .consultation-whatsapp-btn:hover {
          background-color: rgba(255, 255, 255, 0.18) !important;
          border-color: #FFFFFF !important;
        }

        .cta-direct-contact {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: var(--text-xs);
          color: rgba(255, 255, 255, 0.7);
          padding-top: 0.5rem;
        }

        .direct-email-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--color-accent-400);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color var(--transition-fast);
        }

        .direct-email-link:hover {
          color: #FFFFFF;
        }
      `}</style>
    </SectionWrapper>
  );
};
