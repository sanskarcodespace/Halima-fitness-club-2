import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { isPlaceholder } from '../../../content/placeholders';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export interface TestimonialItem {
  id: string;
  clientName: string;
  program: string;
  rating?: number;
  reviewText: string;
  avatarUrl?: string;
  focusArea: string;
}

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Priyanshu K.',
    program: 'Weight Loss & Nutrition Coaching',
    rating: 5,
    reviewText: "Coach Halima helped me lose 10 kg in just 2 months with realistic home meals and zero extreme restriction. Her daily guidance and follow-up kept me consistent every single day!",
    focusArea: 'Sustainable Nutrition & Home Movement'
  },
  {
    id: 'test-2',
    clientName: 'Shabana A.',
    program: '21 Days Weight Loss Challenge',
    rating: 5,
    reviewText: "Joining Coach Halima's 21-day challenge transformed my morning routine and energy. Going from 73 kg down to 55 kg over my coaching journey has been life-changing!",
    focusArea: 'Morning Routine Reset & Habit Consistency'
  },
  {
    id: 'test-3',
    clientName: 'Rana Tabassum',
    program: 'Online Diet & Fitness Classes',
    rating: 5,
    reviewText: "I achieved a 42 kg weight loss through Coach Halima's online coaching program. The live Zoom workouts and personalized lifestyle guidance helped resolve my health issues completely.",
    focusArea: 'Live Zoom Workouts & Posture Correction'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <SectionWrapper
      id={SECTION_IDS.TESTIMONIALS}
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="testimonials-section"
    >
      <SectionHeading
        eyebrow="Client Experiences &amp; Feedback"
        eyebrowVariant="primary"
        title={
          <>
            What Clients Say About <span className="text-primary-green">Online Coaching</span>
          </>
        }
        subtitle="Real feedback and experiences from individuals participating in Coach Halima Sadiya's personalized online wellness programs and group classes."
        align="center"
      />

      <div className="testimonials-container stack stack-md">
        {/* Testimonials 3-Card Grid */}
        <div className="testimonials-grid" role="region" aria-label="Client testimonials list">
          {INITIAL_TESTIMONIALS.map((item, index) => {
            const hasRealReview = !isPlaceholder(item.reviewText);
            const hasRealName = !isPlaceholder(item.clientName);

            return (
              <RevealWrapper
                key={item.id}
                delay={(index + 1) as 1 | 2 | 3}
              >
                <Card
                  variant="surface"
                  className="testimonial-card stack stack-md"
                >
                {/* Top Bar: Rating Stars & Program Badge */}
                <div className="split testimonial-top-bar">
                  <div className="star-rating-row" aria-label={`Rating: ${item.rating || 5} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star-icon" aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <Badge variant="primary">{item.program}</Badge>
                </div>

                {/* Review Quote Body */}
                <div className="testimonial-quote-box">
                  {hasRealReview ? (
                    <p className="testimonial-text">"{item.reviewText}"</p>
                  ) : (
                    <div className="testimonial-pending-state">
                      <Icon name="message" size={18} className="pending-icon" />
                      <div className="stack stack-none">
                        <strong className="pending-title">[VERIFIED CLIENT TESTIMONIAL REQUIRED]</strong>
                        <p className="pending-desc">
                          Authentic written review and feedback will be published here upon client authorization. We do not generate fictional social proof.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Focus Area Pill */}
                <div className="testimonial-focus-pill">
                  <Icon name="sparkles" size={12} className="focus-pill-icon" />
                  <span>Coaching Focus: <strong>{item.focusArea}</strong></span>
                </div>

                {/* Footer Author Profile */}
                <div className="testimonial-author-row split">
                  <div className="author-info-cluster">
                    <div className="author-avatar" aria-hidden="true">
                      {hasRealName ? item.clientName.charAt(0).toUpperCase() : <Icon name="user" size={16} />}
                    </div>
                    <div className="stack stack-none">
                      <span className="author-name">{item.clientName}</span>
                      <span className="author-status">Verified Coaching Participant</span>
                    </div>
                  </div>

                  <div className="author-verified-tag">
                    <Icon name="check" size={12} />
                    <span>Verified</span>
                  </div>
                </div>
                </Card>
              </RevealWrapper>
            );
          })}
        </div>

        {/* Verification Policy Box */}
        <div className="testimonials-policy-banner">
          <Icon name="shield" size={18} className="policy-shield-icon" />
          <div className="stack stack-none">
            <span className="policy-title">Our Authentic Feedback Policy</span>
            <p className="policy-desc">
              Halima Fitness Club upholds strict content integrity. We never fabricate client reviews, generate fictional 5-star ratings, or publish misleading before/after statistics. All published testimonials reflect verified, authorized feedback from real clients.
            </p>
          </div>
        </div>

        {/* CTA Row */}
        <div className="testimonials-cta-row">
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
            href="#contact"
            rightIcon={<Icon name="message" size={16} />}
          >
            Submit Client Feedback
          </Button>
        </div>
      </div>

      {/* Testimonials Scoped Styles */}
      <style>{`
        .testimonials-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-md);
        }

        .testimonial-top-bar {
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .star-rating-row {
          display: flex;
          align-items: center;
          gap: 2px;
          color: #F59E0B;
          font-size: var(--text-base);
          line-height: 1;
        }

        .testimonial-quote-box {
          flex: 1;
          margin: 0.25rem 0;
        }

        .testimonial-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          font-style: italic;
          margin: 0;
        }

        .testimonial-pending-state {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px dashed var(--color-border);
        }

        .pending-icon {
          color: var(--color-accent-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pending-title {
          font-size: var(--text-xs);
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .pending-desc {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          line-height: var(--leading-normal);
          margin: 3px 0 0 0;
        }

        .testimonial-focus-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.65rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          font-size: var(--text-xs);
          color: var(--color-primary-900);
          width: fit-content;
        }

        .focus-pill-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
        }

        .testimonial-author-row {
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
          margin-top: 0.75rem;
        }

        .author-info-cluster {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--color-primary-700);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--text-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-name {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-text-main);
        }

        .author-status {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .author-verified-tag {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-700);
          background-color: var(--color-secondary-soft);
          padding: 2px 6px;
          border-radius: var(--radius-full);
        }

        .testimonials-policy-banner {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-xs);
        }

        .policy-shield-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .policy-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .policy-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 3px 0 0 0;
        }

        .testimonials-cta-row {
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
