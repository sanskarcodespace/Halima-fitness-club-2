import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

// Real transformation data — shared with consent by @sadiya_fitcoach
const TRANSFORMATIONS = [
  {
    id: 't1',
    src: '/images/result-client1.png',
    alt: 'Client before-and-after transformation — weight loss coaching with Coach Halima Sadiya',
    result: '10 kg lost in 2 months',
    label: 'Weight Loss Coaching',
  },
  {
    id: 't2',
    src: '/images/result-client2.png',
    alt: 'Client before-and-after — 73 kg to 55 kg online wellness coaching journey',
    result: '73 kg → 55 kg',
    label: 'Weight Management',
  },
  {
    id: 't3',
    src: '/images/result-rana-tabassum.png',
    alt: 'Rana Tabassum before-and-after — 42 kg transformation, health issues resolved with online coaching',
    result: '42 kg lost',
    label: 'Personal Health Coaching',
  },
];

export const SuccessStoriesSection: React.FC = () => {
  return (
    <SectionWrapper
      id={SECTION_IDS.SUCCESS_STORIES}
      background="surface"
      padding="standard"
      containerSize="wide"
      className="ss-section"
    >
      <SectionHeading
        eyebrow="Real Client Results"
        eyebrowVariant="accent"
        title={
          <>
            Client <span className="text-accent-orange">Success Stories</span>
          </>
        }
        subtitle="Real people. Real journeys. Coached 100% online by Coach Halima Sadiya."
        align="center"
      />

      {/* ── Disclaimer ────────────────────────────────────────────────── */}
      <div className="ss-disclaimer" role="note">
        <Icon name="shield" size={15} className="ss-disclaimer-icon" aria-hidden="true" />
        <p className="ss-disclaimer-text">
          <strong>Disclaimer:</strong> Results shown are genuine but not typical. Individual results vary based on
          personal commitment, consistency, lifestyle, and health status. Shared with consent from{' '}
          <strong>@sadiya_fitcoach</strong>.
        </p>
      </div>

      {/* ── Team Results Collage (full-width hero) ─────────────────────── */}
      <div className="ss-collage-card">
        <img
          src="/images/result-collage.jpg"
          alt="My Team Result — multiple real client before-and-after transformations from Halima Fitness Club"
          className="ss-collage-img"
          loading="lazy"
          width="1086"
          height="1448"
          decoding="async"
        />
        <div className="ss-collage-overlay">
          <span className="ss-collage-tag">Real People · Real Transformations · Real Success</span>
          <span className="ss-collage-handle">@sadiya_fitcoach</span>
        </div>
      </div>

      {/* ── Individual Transformation Cards ───────────────────────────── */}
      <div className="ss-cards-grid">
        {TRANSFORMATIONS.map((item) => (
          <div key={item.id} className="ss-card">
            {/* Photo */}
            <div className="ss-card-img-wrap">
              <img
                src={item.src}
                alt={item.alt}
                className="ss-card-img"
                loading="lazy"
                width="899"
                height="1599"
                decoding="async"
              />
              {/* Gradient result overlay */}
              <div className="ss-card-overlay" aria-hidden="true">
                <span className="ss-card-result">{item.result}</span>
              </div>
            </div>
            {/* Label row */}
            <div className="ss-card-footer">
              <span className="ss-card-label">
                <Icon name="sparkles" size={12} className="ss-card-label-icon" aria-hidden="true" />
                {item.label}
              </span>
              <span className="ss-card-source">@sadiya_fitcoach</span>
            </div>
            <p className="ss-card-disclaimer">Results not typical · Individual results may vary</p>
          </div>
        ))}
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div className="ss-cta">
        <Button
          variant="accent"
          size="lg"
          href={CTA_CONFIG.primary.href}
          rightIcon={<Icon name="arrow-right" size={18} />}
        >
          Book Free Consultation
        </Button>
        <span className="ss-cta-note">
          Start your own wellness journey — personalised, online, at your own pace.
        </span>
      </div>

      {/* ── Scoped styles ─────────────────────────────────────────────── */}
      <style>{`
        /* Disclaimer */
        .ss-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.8rem 1rem;
          background: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }
        .ss-disclaimer-icon { color: var(--color-primary-600); flex-shrink: 0; margin-top: 2px; }
        .ss-disclaimer-text { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.55; margin: 0; }

        /* ── Collage hero ──────────────────────────────────────────────── */
        .ss-collage-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          margin-bottom: 2rem;
          background: #000;
          /* Fixed height cinematic banner */
          height: 400px;
        }
        .ss-collage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Show the top portion where the faces + text are */
          object-position: center 25%;
          display: block;
        }
        .ss-collage-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
          color: #fff;
        }
        .ss-collage-tag {
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          opacity: 0.9;
        }
        .ss-collage-handle {
          margin-left: auto;
          font-size: var(--text-xs);
          font-style: italic;
          opacity: 0.75;
        }

        /* ── Cards grid — 3 equal columns ─────────────────────────────── */
        .ss-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          /* Force all rows to the same height */
          align-items: stretch;
        }

        /* Card */
        .ss-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          background: #fff;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .ss-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        /* ── Image wrapper — SAME fixed ratio for all cards ───────────── */
        .ss-card-img-wrap {
          position: relative;
          /* 4:5 is the most consistent crop for portrait before/after pairs */
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #111;
          flex-shrink: 0;
        }
        .ss-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Center so the full before+after pair is visible */
          object-position: center center;
          display: block;
          transition: transform 0.35s ease;
        }
        .ss-card:hover .ss-card-img {
          transform: scale(1.025);
        }

        /* Result label gradient overlay */
        .ss-card-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 0.9rem 0.65rem;
          background: linear-gradient(to top, rgba(10,37,21,0.88) 0%, transparent 100%);
          display: flex;
          align-items: flex-end;
        }
        .ss-card-result {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        /* Footer below image */
        .ss-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.85rem 0.25rem;
          gap: 0.5rem;
        }
        .ss-card-label {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-700);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .ss-card-label-icon { color: var(--color-primary-600); }
        .ss-card-source {
          font-size: 10px;
          color: var(--color-text-muted);
          font-style: italic;
        }
        .ss-card-disclaimer {
          margin: 0;
          padding: 0.3rem 0.85rem 0.65rem;
          font-size: 9px;
          color: var(--color-text-muted);
          font-style: italic;
          border-top: 1px solid var(--color-border);
        }

        /* CTA */
        .ss-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .ss-cta-note {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          text-align: center;
          max-width: 420px;
          line-height: 1.6;
        }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .ss-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .ss-collage-card { height: 320px; }
        }

        @media (max-width: 480px) {
          .ss-cards-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
          }
          .ss-collage-card { height: 240px; }
        }
      `}</style>
    </SectionWrapper>
  );
};
