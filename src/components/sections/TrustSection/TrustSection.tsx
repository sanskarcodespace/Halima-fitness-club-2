import React from 'react';
import { Container } from '../../primitives/Container/Container';
import { Icon } from '../../primitives/Icon/Icon';

export interface TrustItemData {
  id: string;
  metric: string;
  label: string;
  description: string;
  icon: 'award' | 'lifestyle' | 'sparkles' | 'user';
  accentColor?: string;
}

export const TRUST_ITEMS: TrustItemData[] = [
  {
    id: 'trust-exp',
    metric: '6+ Years',
    label: 'Coaching Experience',
    description: 'Guiding individuals toward sustainable health and daily wellness habits.',
    icon: 'award'
  },
  {
    id: 'trust-programs',
    metric: 'Online',
    label: 'Wellness Programs',
    description: 'Personalized nutrition guidance and custom home workout routines.',
    icon: 'lifestyle'
  },
  {
    id: 'trust-challenge',
    metric: '21-Day',
    label: 'Transformation Challenges',
    description: 'Structured kickstarts designed to build lasting momentum and routine consistency.',
    icon: 'sparkles'
  },
  {
    id: 'trust-coaching',
    metric: '1-on-1',
    label: 'Coaching & Guidance',
    description: 'Regular virtual check-ins and direct follow-up support with Coach Halima.',
    icon: 'user'
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section
      aria-label="Why Trust Halima Fitness Club"
      className="trust-section"
      style={{
        backgroundColor: '#F4F9F6',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        paddingBlock: 'clamp(2.5rem, 4vw, 3.5rem)',
        position: 'relative'
      }}
    >
      <Container size="wide">
        <div className="trust-grid">
          {TRUST_ITEMS.map((item, index) => (
            <div key={item.id} className="trust-card">
              {/* Header with icon and metric */}
              <div className="trust-card-top">
                <div className="trust-icon-box" aria-hidden="true">
                  <Icon name={item.icon} size={20} />
                </div>
                <div className="trust-metric-box">
                  <span className="trust-big-metric">{item.metric}</span>
                  <h3 className="trust-card-label">{item.label}</h3>
                </div>
              </div>

              {/* Supporting one-line description */}
              <p className="trust-card-desc">{item.description}</p>

              {/* Visual subtle divider on desktop except last item */}
              {index < TRUST_ITEMS.length - 1 && (
                <div className="trust-column-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* Scoped responsive styles */}
      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.75rem;
          }
        }

        .trust-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.25rem 1.35rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
          position: relative;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .trust-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-secondary-border);
        }

        .trust-card-top {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .trust-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-metric-box {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .trust-big-metric {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-primary-800);
          letter-spacing: -0.02em;
        }

        .trust-card-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0;
        }

        .trust-card-desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-snug);
          margin: 0;
          margin-top: 0.25rem;
        }

        .trust-column-divider {
          display: none;
        }
      `}</style>
    </section>
  );
};
