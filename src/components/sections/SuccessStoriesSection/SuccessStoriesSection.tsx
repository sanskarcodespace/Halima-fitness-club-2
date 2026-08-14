import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

// Real client transformation data — provided by client, used with consent
// Disclaimer is displayed on each card per ethical and legal requirements
const REAL_TRANSFORMATIONS = [
  {
    id: 'r1',
    imageSrc: '/images/result-client1.png',
    imageAlt: 'Client wellness transformation — before and after weight management coaching at Halima Fitness Club',
    result: '10 kg lost in 2 months',
    program: 'Weight Loss Coaching',
    source: '@sadiya_fitcoach'
  },
  {
    id: 'r2',
    imageSrc: '/images/result-client2.png',
    imageAlt: 'Client transformation 73 kg to 55 kg — online wellness coaching results at Halima Fitness Club',
    result: '73 kg → 55 kg',
    program: 'Weight Management Program',
    source: '@sadiya_fitcoach'
  },
  {
    id: 'r3',
    imageSrc: '/images/result-rana-tabassum.png',
    imageAlt: 'Rana Tabassum wellness journey — 42 kg weight loss with online coaching, health issues resolved',
    result: '42 kg lost — health improved',
    program: 'Personal Health Coaching',
    source: '@sadiya_fitcoach'
  }
];

export const SuccessStoriesSection: React.FC = () => {
  return (
    <SectionWrapper
      id={SECTION_IDS.SUCCESS_STORIES}
      background="surface"
      padding="standard"
      containerSize="wide"
      className="success-stories-section"
    >
      <SectionHeading
        eyebrow="Real Client Results"
        eyebrowVariant="accent"
        title={
          <>
            Client <span className="text-accent-orange">Success Stories</span>
          </>
        }
        subtitle="Real people. Real journeys. Coached online by Halima Fitness Club."
        align="center"
      />

      {/* Legal Disclaimer — displayed prominently above all results */}
      <div className="results-disclaimer-bar" role="note">
        <Icon name="shield" size={16} className="disclaimer-icon" aria-hidden="true" />
        <p className="disclaimer-text">
          <strong>Disclaimer:</strong> Results shown are real but not typical. Individual results vary based on
          personal commitment, consistency, lifestyle, and health status. These are genuine client journeys
          shared with consent from <strong>@sadiya_fitcoach</strong>.
        </p>
      </div>

      {/* Team Results Collage — Hero Visual */}
      <div className="results-collage-wrapper">
        <img
          src="/images/result-collage.jpg"
          alt="My Team Result — multiple real client transformations from Halima Fitness Club online coaching program"
          className="results-collage-img"
          loading="lazy"
          width="1080"
          height="1080"
          decoding="async"
          onError={(e) => {
            // Hide gracefully if image not yet placed
            (e.currentTarget as HTMLImageElement).closest('.results-collage-wrapper')?.setAttribute('style', 'display:none');
          }}
        />
        <div className="collage-attribution">
          <Icon name="sparkles" size={14} aria-hidden="true" />
          <span>Real People · Real Transformations · Real Success</span>
          <span className="collage-handle">@sadiya_fitcoach</span>
        </div>
      </div>

      {/* Individual Before/After Cards */}
      <div className="transformation-cards-grid">
        {REAL_TRANSFORMATIONS.map((item) => (
          <Card key={item.id} variant="surface" className="transformation-card">
            {/* Result Image */}
            <div className="transformation-img-wrapper">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="transformation-img"
                loading="lazy"
                width="480"
                height="640"
                decoding="async"
                onError={(e) => {
                  const wrapper = (e.currentTarget as HTMLImageElement).closest('.transformation-img-wrapper');
                  if (wrapper) (wrapper as HTMLElement).style.display = 'none';
                }}
              />
              {/* Result badge overlay */}
              <div className="transformation-result-badge">
                <span className="result-badge-text">{item.result}</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="transformation-card-footer">
              <Badge
                variant="primary"
                icon={<Icon name="sparkles" size={12} />}
              >
                {item.program}
              </Badge>
              <span className="transformation-source">{item.source}</span>
            </div>

            {/* Per-card micro disclaimer */}
            <p className="transformation-micro-disclaimer">
              Results not typical · Individual results may vary
            </p>
          </Card>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <div className="stories-cta-row">
        <Button
          variant="accent"
          size="lg"
          href={CTA_CONFIG.primary.href}
          rightIcon={<Icon name="arrow-right" size={18} />}
        >
          Book Free Consultation
        </Button>
        <span className="cta-sub-note">
          Start your own health journey — personalised, online, and at your own pace.
        </span>
      </div>

      {/* Section Scoped Styles */}
      <style>{`
        .success-stories-section .section-heading-wrapper {
          margin-bottom: 1.5rem;
        }

        /* ── Disclaimer Bar ─────────────────────────────────────────────── */
        .results-disclaimer-bar {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1.15rem;
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }

        .disclaimer-icon {
          color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        /* ── Collage ────────────────────────────────────────────────────── */
        .results-collage-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          margin-bottom: 2rem;
          background-color: #000;
          /* Let the square collage show at its natural ratio, capped */
          max-height: 560px;
        }

        .results-collage-img {
          width: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          max-height: 560px;
        }

        .collage-attribution {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
          color: #fff;
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .collage-handle {
          margin-left: auto;
          opacity: 0.85;
          font-style: italic;
          text-transform: none;
          letter-spacing: 0;
          font-weight: 500;
        }

        /* ── Individual Cards ────────────────────────────────────────────── */
        .transformation-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .transformation-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0.85rem;
          border: 1px solid var(--color-border);
        }

        .transformation-img-wrapper {
          position: relative;
          aspect-ratio: 3 / 4;
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--color-bg-subtle);
        }

        .transformation-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .transformation-result-badge {
          position: absolute;
          bottom: 0.5rem;
          left: 0.5rem;
          right: 0.5rem;
          background: linear-gradient(135deg, var(--color-primary-700), var(--color-primary-900));
          color: #fff;
          border-radius: var(--radius-sm);
          padding: 0.35rem 0.65rem;
          text-align: center;
        }

        .result-badge-text {
          font-size: var(--text-sm);
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        .transformation-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .transformation-source {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-style: italic;
        }

        .transformation-micro-disclaimer {
          font-size: 10px;
          color: var(--color-text-muted);
          margin: 0;
          font-style: italic;
          line-height: 1.4;
          border-top: 1px solid var(--color-border);
          padding-top: 0.5rem;
        }

        /* ── CTA Row ─────────────────────────────────────────────────────── */
        .stories-cta-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding-top: 0.5rem;
        }

        .cta-sub-note {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          text-align: center;
          max-width: 480px;
          line-height: var(--leading-relaxed);
        }

        /* ── Mobile ─────────────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .transformation-cards-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .results-collage-wrapper {
            max-height: 320px;
          }

          .results-collage-img {
            max-height: 320px;
          }
        }

        @media (max-width: 400px) {
          .transformation-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </SectionWrapper>
  );
};
