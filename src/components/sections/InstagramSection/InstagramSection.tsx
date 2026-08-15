import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';
import { InstagramFeedWidget } from './InstagramFeedWidget';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { CTA_CONFIG } from '../../../config/navigation.config';

export const InstagramSection: React.FC = () => {
  const contentPillars = [
    {
      id: 'ig-pillar-1',
      title: 'Nutrition & Kitchen Tips',
      imageSrc: '/images/ig-nutrition.jpg',
      category: 'nutrition' as const,
      tag: 'Mindful Eating',
      description: 'Practical home-cooking recipes, portion awareness, and balanced meal structuring.'
    },
    {
      id: 'ig-pillar-2',
      title: 'Home Movement & Mobility',
      imageSrc: '/images/ig-workout.jpg',
      category: 'fitness' as const,
      tag: 'Daily Activity',
      description: 'Quick 15-minute home workout demos, posture corrections, and joint-friendly stretches.'
    },
    {
      id: 'ig-pillar-3',
      title: '21-Day Habit Motivation',
      imageSrc: '/images/ig-habits.jpg',
      category: 'coaching' as const,
      tag: 'Habit Consistency',
      description: 'Daily mindset reminders, morning routine pacing, and lifestyle accountability.'
    },
    {
      id: 'ig-pillar-4',
      title: 'Coaching Q&As & Lifestyle',
      imageSrc: '/images/ig-coaching.jpg',
      category: 'lifestyle' as const,
      tag: 'Ask Coach Halima',
      description: 'Answers to common wellness questions, hydration tips, and healthy habit building.'
    }
  ];

  return (
    <SectionWrapper
      id="community"
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="instagram-section"
    >
      <SectionHeading
        eyebrow="Join Our Online Community"
        eyebrowVariant="primary"
        title={
          <>
            Follow Coach Halima on <span className="text-accent-orange">Instagram</span>
          </>
        }
        subtitle="Stay inspired with daily nutrition advice, guided home workout snippets, and sustainable lifestyle motivation."
        align="center"
      />

      <div className="instagram-container stack stack-lg">
        {/* Profile Card Header Banner */}
        <Card variant="surface" className="instagram-profile-banner split">
          <div className="profile-info-cluster">
            {/* Gradient Avatar Icon */}
            <div className="ig-avatar-ring" aria-hidden="true">
              <div className="ig-avatar-inner">
                <Icon name="instagram" size={26} />
              </div>
            </div>

            <div className="stack stack-none">
              <div className="cluster cluster-xs">
                <h3 className="ig-handle-text">{BUSINESS_CONFIG.instagram.handle}</h3>
                <span className="ig-verified-badge" title="Official Account">
                  <Icon name="check" size={11} />
                </span>
              </div>
              <span className="ig-coach-name">{BUSINESS_CONFIG.coach.name} • {BUSINESS_CONFIG.coach.title}</span>
              <span className="ig-bio-snippet">Online Nutrition, Fitness &amp; Habit Coaching • 6+ Years Exp.</span>
            </div>
          </div>

          {/* Direct Follow CTA */}
          <div className="profile-action-group">
            <Button
              variant="accent"
              size="md"
              href={BUSINESS_CONFIG.instagram.url}
              isExternal
              rightIcon={<Icon name="arrow-right" size={16} />}
              className="ig-follow-btn"
              aria-label={`Follow Coach Halima on Instagram: ${BUSINESS_CONFIG.instagram.handle}`}
            >
              Follow {BUSINESS_CONFIG.instagram.handle}
            </Button>
          </div>
        </Card>

        {/* 4 Content Theme Cards */}
        <div className="instagram-pillars-grid">
          {contentPillars.map((pillar) => (
            <Card
              key={pillar.id}
              variant="surface"
              className="ig-pillar-card stack stack-sm"
            >
              {/* Media Preview Box */}
              <div className="ig-media-box">
                <div className="ig-img-wrapper">
                  <img
                    src={pillar.imageSrc}
                    alt={`${pillar.title} — @sadiya_fitcoach`}
                    className="ig-img"
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                  />
                </div>
                <div className="ig-overlay-tag">
                  <Badge variant="primary" icon={<Icon name="instagram" size={11} />}>
                    {pillar.tag}
                  </Badge>
                </div>
              </div>

              {/* Card Meta & Description */}
              <div className="stack stack-none ig-card-details">
                <h4 className="ig-pillar-title">{pillar.title}</h4>
                <p className="ig-pillar-desc">{pillar.description}</p>
              </div>

              {/* Card Footer */}
              <div className="ig-card-footer split">
                <span className="ig-handle-tag">{BUSINESS_CONFIG.instagram.handle}</span>
                <a
                  href={BUSINESS_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-card-follow-btn"
                  aria-label="Follow on Instagram"
                >
                  <Icon name="instagram" size={13} />
                  Follow
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* ── Live Instagram Feed ─────────────────────────────────────── */}
        <div className="ig-live-feed-section">
          <InstagramFeedWidget />
        </div>

        {/* Authenticity & Integration Note */}
        <div className="ig-integration-note split">
          <div className="cluster cluster-sm">
            <Icon name="shield" size={16} className="note-shield-icon" />
            <span className="note-text">
              <strong>Authentic Social Presence: </strong> We never display fabricated like counts, artificial follower metrics, or fake testimonial screenshots. Visit our official profile on Instagram to view active reels, stories, and community posts.
            </span>
          </div>

          <a
            href={BUSINESS_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-visit-link"
          >
            <span>Visit Profile</span>
            <Icon name="arrow-right" size={13} />
          </a>
        </div>

        {/* Bottom Consultation Link */}
        <div className="ig-cta-row cluster cluster-md">
          <span className="cta-prompt-text">Looking for structured personalized guidance?</span>
          <Button
            variant="outline"
            size="md"
            href={CTA_CONFIG.primary.href}
            rightIcon={<Icon name="arrow-right" size={16} />}
          >
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* Instagram Section Scoped Styles */}
      <style>{`
        .instagram-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .instagram-profile-banner {
          padding: 1.5rem 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          align-items: center;
          gap: 1.25rem;
          box-shadow: var(--shadow-xs);
        }

        .profile-info-cluster {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }

        .ig-avatar-ring {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ig-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #062217;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ig-handle-text {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .ig-verified-badge {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #38BDF8;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ig-coach-name {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-primary-700);
        }

        .ig-bio-snippet {
          font-size: 11px;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }

        .ig-follow-btn {
          white-space: nowrap;
          background: linear-gradient(135deg, #E1306C 0%, #C13584 100%) !important;
          border-color: #C13584 !important;
          color: #FFFFFF !important;
        }

        .ig-follow-btn:hover {
          background: linear-gradient(135deg, #C13584 0%, #833AB4 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(225, 48, 108, 0.35);
        }

        /* Pillars Grid */
        .instagram-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 600px) {
          .instagram-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .instagram-pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .ig-pillar-card {
          padding: 1rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xs);
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .ig-pillar-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-sm);
        }

        .ig-media-box {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .ig-img-wrapper {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: var(--radius-md);
        }
        .ig-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.35s ease;
        }
        .ig-pillar-card:hover .ig-img { transform: scale(1.04); }

        .ig-overlay-tag {
          position: absolute;
          top: 8px;
          left: 8px;
        }

        .ig-card-details {
          margin-top: 0.5rem;
        }

        .ig-pillar-title {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
          margin: 0;
        }

        .ig-pillar-desc {
          font-size: 11px;
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 3px 0 0 0;
        }

        .ig-card-footer {
          align-items: center;
          padding-top: 0.65rem;
          border-top: 1px solid var(--color-border-subtle);
          margin-top: 0.5rem;
        }

        .ig-handle-tag {
          font-size: 10px;
          font-weight: 700;
          color: var(--color-primary-700);
        }

        .ig-card-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 10px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          padding: 3px 9px;
          border-radius: 99px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .ig-card-follow-btn:hover { opacity: 0.88; transform: scale(1.04); }

        .ig-live-feed-section {
          margin-top: 0.5rem;
        }

        .ig-integration-note {
          padding: 0.95rem 1.25rem;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          align-items: center;
          gap: 1rem;
        }

        .note-shield-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
        }

        .note-text {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
        }

        .ig-visit-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          font-weight: 700;
          color: #E1306C;
          text-decoration: none;
          white-space: nowrap;
        }

        .ig-visit-link:hover {
          text-decoration: underline;
        }

        .ig-cta-row {
          justify-content: center;
          align-items: center;
          padding-top: 0.5rem;
        }

        .cta-prompt-text {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-primary-900);
        }
      `}</style>
    </SectionWrapper>
  );
};
