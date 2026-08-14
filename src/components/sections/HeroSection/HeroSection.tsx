import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Card } from '../../primitives/Card/Card';
import { Icon } from '../../primitives/Icon/Icon';
import { WhatsAppButton } from '../../shared/WhatsAppButton/WhatsAppButton';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { INITIAL_CONTENT } from '../../../content/initialContent';

export const HeroSection: React.FC = () => {

  return (
    <SectionWrapper
      id={SECTION_IDS.HOME}
      background="subtle"
      padding="hero"
      containerSize="wide"
      className="hero-section"
    >
      <div className="hero-grid">
        {/* =====================================================================
            LEFT COLUMN: Proposition, Headline, CTAs, & Trust Cues
            ===================================================================== */}
        <div className="hero-content stack stack-lg hero-content-enter">
          {/* Eyebrow Positioning Badges */}
          <div className="cluster cluster-sm">
            <Badge variant="primary" icon={<Icon name="sparkles" size={14} />}>
              {INITIAL_CONTENT.hero.badgeText}
            </Badge>
            <Badge variant="neutral" icon={<Icon name="shield" size={14} />}>
              {BUSINESS_CONFIG.coach.title}
            </Badge>
          </div>

          {/* Primary Main Single H1 */}
          <h1 className="hero-main-title">
            Transform Your Health.{' '}
            <span className="text-primary-green">Transform Your Life.</span>
          </h1>

          {/* Supporting Proposition Message */}
          <p className="hero-supporting-text">
            {INITIAL_CONTENT.hero.subheadline}
          </p>

          {/* 3-Tier CTA Action Hierarchy */}
          <div className="hero-cta-group">
            {/* Tier 1: Primary Action */}
            <Button
              variant="accent"
              size="lg"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={18} />}
              className="hero-btn-primary"
            >
              {INITIAL_CONTENT.hero.primaryCtaText}
            </Button>

            {/* Tier 2: Secondary Action */}
            <Button
              variant="outline"
              size="lg"
              href={CTA_CONFIG.secondary.href}
              rightIcon={<Icon name="chevron-down" size={18} />}
              className="hero-btn-secondary"
            >
              {INITIAL_CONTENT.hero.secondaryCtaText}
            </Button>

            {/* Tier 3: Tertiary Action (WhatsApp Us) */}
            <WhatsAppButton
              messageKey="consultation"
              variant="outline"
              size="lg"
              label="WhatsApp Us"
              className="hero-btn-tertiary"
            />
          </div>

          {/* Verified Supporting Trust Cues */}
          <div className="hero-trust-bar hero-trust-enter">
            <div className="trust-item">
              <span className="trust-val">{BUSINESS_CONFIG.coach.experience}</span>
              <span className="trust-label">Coaching Experience</span>
            </div>

            <div className="trust-divider" />

            <div className="trust-item">
              <span className="trust-val">Certified</span>
              <span className="trust-label">Health &amp; Wellness Coach</span>
            </div>

            <div className="trust-divider" />

            <div className="trust-item">
              <span className="trust-val">100% Online</span>
              <span className="trust-label">Personalized Virtual Follow-up</span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: Premium Visual Composition & Coach Representation
            ===================================================================== */}
        <div className="hero-visual-col hero-visual-enter">
          <Card variant="surface" className="hero-visual-card">
            {/* Real Wellness Lifestyle Image */}
            <div className="hero-image-wrapper">
              <img
                src="/images/hero-lifestyle.jpg"
                alt="Woman doing gentle yoga at home — online wellness coaching lifestyle"
                className="hero-lifestyle-img"
                loading="eager"
                width="800"
                height="600"
                decoding="async"
              />
            </div>

            {/* Coach Halima Sadiya Credential Card */}
            <div className="hero-coach-badge">
              <div className="coach-badge-avatar coach-badge-photo-wrapper">
                {/* When real coach photo is placed at /images/coach-halima.jpg, update src below */}
                <img
                  src="/images/coach-halima.jpg"
                  alt="Coach Halima Sadiya"
                  className="coach-badge-photo"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to initials avatar if photo not yet placed
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (sibling) sibling.style.display = 'flex';
                  }}
                />
                <span className="coach-badge-avatar-fallback" aria-hidden="true">HS</span>
              </div>
              <div className="stack stack-xs">
                <span className="coach-badge-name">{BUSINESS_CONFIG.coach.name}</span>
                <span className="coach-badge-title">
                  {BUSINESS_CONFIG.coach.title} • {BUSINESS_CONFIG.coach.experience} Exp.
                </span>
              </div>
            </div>

            {/* Value Highlights Pill Stack */}
            <div className="hero-floating-features">
              <div className="floating-feature-pill">
                <Icon name="check" size={15} className="feature-pill-icon" />
                <span>Personalized Daily Nutrition Guidance</span>
              </div>
              <div className="floating-feature-pill">
                <Icon name="check" size={15} className="feature-pill-icon" />
                <span>Custom Home Exercise &amp; Mobility Routines</span>
              </div>
              <div className="floating-feature-pill">
                <Icon name="check" size={15} className="feature-pill-icon" />
                <span>Regular 1-on-1 Virtual Check-ins &amp; Follow-up</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Hero Section Scoped Styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .hero-main-title {
          font-size: var(--text-5xl);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: var(--color-text-main);
          margin-bottom: var(--space-2);
        }

        .hero-supporting-text {
          font-size: var(--text-xl);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          max-width: 680px;
          margin-bottom: 0;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          margin-top: 0.25rem;
        }

        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          padding-top: 1.5rem;
          margin-top: 1rem;
          border-top: 1px solid var(--color-border);
          align-items: center;
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .trust-val {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-primary-700);
          line-height: 1.1;
        }

        .trust-label {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .trust-divider {
          display: none;
        }

        @media (min-width: 640px) {
          .trust-divider {
            display: block;
            width: 1px;
            height: 32px;
            background-color: var(--color-border);
          }
          .hero-trust-bar {
            display: flex;
            justify-content: space-between;
          }
        }

        /* Right Column Styling */
        .hero-visual-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
        }

        .hero-image-wrapper {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--color-bg-subtle);
        }

        .hero-lifestyle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: var(--radius-lg);
        }

        .hero-coach-badge {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
        }

        .coach-badge-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-primary-700);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .coach-badge-photo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .coach-badge-avatar-fallback {
          display: none;
          font-size: var(--text-sm);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #fff;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
        }

        .coach-badge-name {
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: 1.2;
        }

        .coach-badge-title {
          font-size: var(--text-xs);
          color: var(--color-primary-700);
          font-weight: 600;
        }

        .hero-floating-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .floating-feature-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .feature-pill-icon {
          color: var(--color-primary-600);
          flex-shrink: 0;
        }
      `}</style>
    </SectionWrapper>
  );
};
