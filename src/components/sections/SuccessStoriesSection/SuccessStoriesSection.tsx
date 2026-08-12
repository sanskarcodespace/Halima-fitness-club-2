import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { ImagePlaceholder } from '../../primitives/ImagePlaceholder/ImagePlaceholder';
import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';

export interface ClientStoryItem {
  id: string;
  clientIdentifier: string;
  program: string;
  duration: string;
  focusTheme: string;
  startingContext: string;
  coachingSupport: string;
  resultExperience: string;
  hasRealStory: boolean;
}

export const INITIAL_STORIES: ClientStoryItem[] = [
  {
    id: 'story-1',
    clientIdentifier: '[CLIENT STORY REQUIRED]',
    program: 'Weight Loss & Nutrition Coaching',
    duration: '[DURATION AS STATED]',
    focusTheme: 'Sustainable Meal Structure & Daily Energy',
    startingContext: 'Faced inconsistent eating schedules, afternoon energy slumps, and difficulty maintaining workout consistency during busy workweeks.',
    coachingSupport: 'Guided daily hydration pacing, realistic home meal frameworks, and 25-minute joint-friendly home workouts with weekly virtual follow-up.',
    resultExperience: '[RESULT / EXPERIENCE REQUIRED]',
    hasRealStory: false
  },
  {
    id: 'story-2',
    clientIdentifier: '[CLIENT STORY REQUIRED]',
    program: '21 Days Weight Loss Challenge',
    duration: '21-Day Sprint',
    focusTheme: 'Habit Reset & Morning Routine Consistency',
    startingContext: 'Struggled with sedentary daily routine, irregular sleep, and lack of accountability to begin a structured wellness habit.',
    coachingSupport: 'Structured daily habit check-ins, portion awareness guidance, and participation in live group mobility sessions.',
    resultExperience: '[RESULT / EXPERIENCE REQUIRED]',
    hasRealStory: false
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
        eyebrow="Authentic Client Journeys"
        eyebrowVariant="accent"
        title={
          <>
            Client Lifestyle <span className="text-accent-orange">Success Stories</span>
          </>
        }
        subtitle="Real experiences and sustainable habit transformations will be featured here as client stories become available."
        align="center"
      />

      <div className="stories-container stack stack-lg">
        {/* Ethical Transparency Banner */}
        <div className="ethical-notice-card split">
          <div className="ethical-notice-left">
            <Icon name="shield" size={20} className="ethical-icon" />
            <div className="stack stack-none">
              <span className="ethical-title">Authentic Lifestyle Journeys</span>
              <p className="ethical-desc">
                Real experiences will be featured here as client stories become available. Halima Fitness Club focuses on long-term wellness, sustainable habit creation, and individual consistency rather than aggressive or fabricated before-and-after claims.
              </p>
            </div>
          </div>
          <PlaceholderNotice label="[STORIES IN VERIFICATION]" />
        </div>

        {/* Editorial Story Cards List */}
        <div className="stories-editorial-list stack stack-lg">
          {INITIAL_STORIES.map((story) => (
            <Card
              key={story.id}
              variant="surface"
              className="editorial-story-card"
            >
              <div className="story-grid">
                {/* Left Column: Visual Story Context */}
                <div className="story-visual-col stack stack-sm">
                  <ImagePlaceholder
                    aspectRatio="4/3"
                    category="lifestyle"
                    title="Client Lifestyle Journey"
                    caption="[PHOTO OPTIONAL] • Authentic client imagery will appear upon verification"
                  />

                  <div className="story-meta-pills cluster cluster-xs">
                    <Badge variant="primary" icon={<Icon name="sparkles" size={12} />}>
                      {story.program}
                    </Badge>
                    <Badge variant="neutral" icon={<Icon name="clock" size={12} />}>
                      {story.duration}
                    </Badge>
                  </div>
                </div>

                {/* Right Column: Narrative Editorial Breakdown */}
                <div className="story-content-col stack stack-md">
                  <div className="story-header stack stack-none">
                    <div className="split story-title-row">
                      <h3 className="story-client-title">{story.clientIdentifier}</h3>
                      <PlaceholderNotice label="[CLIENT STORY REQUIRED]" />
                    </div>
                    <span className="story-focus-theme">{story.focusTheme}</span>
                  </div>

                  {/* Narrative Steps */}
                  <div className="narrative-steps stack stack-xs">
                    <div className="narrative-block">
                      <strong className="narrative-label">1. Starting Challenge:</strong>
                      <p className="narrative-text">{story.startingContext}</p>
                    </div>

                    <div className="narrative-block">
                      <strong className="narrative-label">2. Coaching Experience:</strong>
                      <p className="narrative-text">{story.coachingSupport}</p>
                    </div>
                  </div>

                  {/* Result / Experience Box */}
                  <div className="story-result-box stack stack-none">
                    <strong className="result-label">3. Stated Result &amp; Lifestyle Shift:</strong>
                    <div className="result-status-row split">
                      <p className="result-text">
                        Detailed personal reflection and wellness outcome as authorized by the client.
                      </p>
                      <PlaceholderNotice label="[RESULT / EXPERIENCE REQUIRED]" />
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Success Stories Scoped Styles */}
      <style>{`
        .stories-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .ethical-notice-card {
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-lg);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-secondary-border);
          align-items: center;
          gap: 1.25rem;
        }

        .ethical-notice-left {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .ethical-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ethical-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .ethical-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 3px 0 0 0;
        }

        .editorial-story-card {
          padding: 1.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        @media (min-width: 768px) {
          .editorial-story-card {
            padding: 2rem;
          }
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .story-grid {
            grid-template-columns: 360px 1fr;
            gap: 2.25rem;
          }
        }

        .story-visual-col {
          display: flex;
          flex-direction: column;
        }

        .story-meta-pills {
          margin-top: 0.5rem;
        }

        .story-title-row {
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .story-client-title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-primary-900);
          margin: 0;
        }

        .story-focus-theme {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .narrative-steps {
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
          padding: 0.85rem 0;
          gap: 0.75rem;
        }

        .narrative-block {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .narrative-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .narrative-text {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .story-result-box {
          padding: 1rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          gap: 0.35rem;
        }

        .result-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .result-status-row {
          align-items: center;
          gap: 0.75rem;
        }

        .result-text {
          font-size: var(--text-xs);
          color: var(--color-primary-800);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .stories-cta-row {
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
