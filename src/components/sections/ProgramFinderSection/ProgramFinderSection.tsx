import React, { useState } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { CTA_CONFIG } from '../../../config/navigation.config';

export interface GoalOption {
  id: string;
  label: string;
  sublabel: string;
  icon: 'lifestyle' | 'fitness' | 'nutrition' | 'sparkles' | 'user' | 'award' | 'clock';
  matchedProgram: {
    title: string;
    anchorId: string;
    tagline: string;
    whyItFits: string;
    deliverables: string[];
  };
}

export const GOAL_OPTIONS: GoalOption[] = [
  {
    id: 'goal-weight-loss',
    label: 'I want to lose weight',
    sublabel: 'Sustainable fat loss through nutrition & home workouts',
    icon: 'lifestyle',
    matchedProgram: {
      title: 'Weight Loss Coaching',
      anchorId: 'service-weight-loss',
      tagline: 'Personalized caloric and nutritional guidance for steady, lasting fat loss.',
      whyItFits: 'Designed for safe, sustainable reduction without restrictive starvation diets or strenuous gym machinery.',
      deliverables: ['Custom daily meal structures', 'Low-impact home workout routine', 'Weekly virtual progress reviews']
    }
  },
  {
    id: 'goal-weight-gain',
    label: 'I want healthy weight gain',
    sublabel: 'Nutrient-dense nutrition & home strength routines',
    icon: 'fitness',
    matchedProgram: {
      title: 'Weight Gain Coaching',
      anchorId: 'service-weight-gain',
      tagline: 'Structured high-nutrient meal plans and progressive home strength routines.',
      whyItFits: 'Focuses on wholesome caloric surplus blueprints and progressive resistance movement to build healthy body mass.',
      deliverables: ['Nutrient-dense meal blueprints', 'Bodyweight & home resistance workouts', 'Digestive wellness support']
    }
  },
  {
    id: 'goal-nutrition',
    label: 'I want support with nutrition',
    sublabel: 'Mindful eating, balanced macros & practical meal plans',
    icon: 'nutrition',
    matchedProgram: {
      title: 'Online Nutrition Coaching',
      anchorId: 'service-nutrition',
      tagline: 'Practical nutrition education and balanced macronutrient clarity suited to your schedule.',
      whyItFits: 'Gives you lifelong dietary confidence, portion control skills, and family-friendly eating structures without extreme fad diets.',
      deliverables: ['Custom macronutrient guidance', 'Family-friendly meal planning', 'Weekly food logging review']
    }
  },
  {
    id: 'goal-fitness',
    label: 'I want online fitness coaching',
    sublabel: 'Guided home workouts adapted to your current fitness level',
    icon: 'fitness',
    matchedProgram: {
      title: 'Online Fitness Coaching',
      anchorId: 'service-fitness',
      tagline: 'Tailored home exercise routines designed for joint comfort, core strength, and stamina.',
      whyItFits: 'Provides injury-safe, adaptable movement plans you can complete anywhere without requiring gym memberships.',
      deliverables: ['Custom home workout calendar', 'Video movement form feedback', 'Low-impact modification options']
    }
  },
  {
    id: 'goal-habits',
    label: 'I want better lifestyle habits',
    sublabel: 'Sleep quality, daily stress reduction & sustained vitality',
    icon: 'sparkles',
    matchedProgram: {
      title: 'Lifestyle & Wellness Coaching',
      anchorId: 'service-lifestyle-wellness',
      tagline: 'Holistic lifestyle guidance addressing sleep, stress, hydration, and daily vitality.',
      whyItFits: 'Helps overcome afternoon energy crashes, chronic stress, and irregular sleep patterns through actionable routine changes.',
      deliverables: ['Sleep hygiene protocol', 'Stress reduction breathing tools', 'Circadian hydration & energy audit']
    }
  },
  {
    id: 'goal-maintenance',
    label: 'I want weight management support',
    sublabel: 'Long-term lifestyle balance to prevent weight rebound',
    icon: 'award',
    matchedProgram: {
      title: 'Weight Management Program',
      anchorId: 'service-weight-mgmt',
      tagline: 'Long-term nutritional balance and stabilization coaching to lock in your progress.',
      whyItFits: 'Ideal for those who reached a target goal and want structured maintenance strategies for lifelong equilibrium.',
      deliverables: ['Maintenance macronutrient framework', 'Intuitive eating stabilization', 'Bi-weekly virtual follow-up']
    }
  },
  {
    id: 'goal-classes',
    label: 'I want to join online classes',
    sublabel: 'Interactive group sessions & masterclasses on nutrition & fitness',
    icon: 'user',
    matchedProgram: {
      title: 'Online Diet & Fitness Classes',
      anchorId: 'service-online-classes',
      tagline: 'Live interactive virtual group sessions covering nutrition fundamentals and guided movement.',
      whyItFits: 'Great for group learners seeking live interactive demonstrations, coach Q&As, and shared habit momentum.',
      deliverables: ['Live virtual group sessions', 'Direct Q&A with Coach Halima', 'Downloadable class summaries']
    }
  },
  {
    id: 'goal-personal-health',
    label: 'I want general personal health coaching',
    sublabel: 'Comprehensive 1-on-1 dedicated virtual mentorship',
    icon: 'clock',
    matchedProgram: {
      title: 'Personal Health Coaching',
      anchorId: 'service-personal-health',
      tagline: 'All-inclusive 1-on-1 dedicated virtual wellness coaching for holistic health transformation.',
      whyItFits: 'Offers dedicated, continuous 1-on-1 mentorship across nutrition, fitness, sleep, and lifestyle habit architecture.',
      deliverables: ['Dedicated 1-on-1 virtual sessions', 'Complete nutrition & fitness roadmap', 'Priority message support']
    }
  }
];

export const ProgramFinderSection: React.FC = () => {
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);

  const selectedGoal = GOAL_OPTIONS.find((g) => g.id === selectedGoalId) || null;

  const handleReset = () => {
    setSelectedGoalId(null);
  };

  return (
    <SectionWrapper
      id="program-finder"
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="program-finder-section"
    >
      <SectionHeading
        eyebrow="Interactive Decision Helper"
        eyebrowVariant="primary"
        title={
          <>
            Find the Right <span className="text-primary-green">Coaching Program</span> for You
          </>
        }
        subtitle="Select your primary health or wellness goal below to discover the most relevant online coaching approach for your lifestyle."
        align="center"
      />

      <div className="finder-container stack stack-lg">
        {/* Step 1: Goal Selection Grid */}
        {!selectedGoal ? (
          <div className="stack stack-md">
            <div className="finder-prompt-bar">
              <span className="finder-prompt-step">Step 1 of 1:</span>
              <h3 className="finder-prompt-title">What is your primary wellness goal right now?</h3>
            </div>

            <div className="goal-options-grid" role="group" aria-label="Select your primary wellness goal">
              {GOAL_OPTIONS.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setSelectedGoalId(goal.id)}
                  className="goal-option-card"
                  aria-pressed={selectedGoalId === goal.id}
                >
                  <div className="goal-icon-box" aria-hidden="true">
                    <Icon name={goal.icon} size={20} />
                  </div>
                  <div className="goal-text-content">
                    <strong className="goal-label">{goal.label}</strong>
                    <span className="goal-sublabel">{goal.sublabel}</span>
                  </div>
                  <Icon name="arrow-right" size={16} className="goal-arrow-icon" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Step 2: Matched Program Result Presentation */
          <div
            className="matched-result-wrapper stack stack-md"
            role="region"
            aria-live="polite"
            aria-label="Matched program recommendation"
          >
            {/* Active Selection Breadcrumb Header */}
            <div className="matched-header split">
              <div className="cluster cluster-sm">
                <span className="matched-goal-badge">Your Selected Goal:</span>
                <strong className="matched-goal-name">"{selectedGoal.label}"</strong>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="btn-reset-finder"
                aria-label="Change your selected goal"
              >
                <Icon name="x" size={14} />
                <span>Choose Another Goal</span>
              </button>
            </div>

            {/* Recommendation Card */}
            <Card variant="surface" className="matched-program-card">
              <div className="matched-card-inner">
                <div className="stack stack-sm">
                  <div className="cluster cluster-sm">
                    <Badge variant="accent" icon={<Icon name="sparkles" size={13} />}>
                      Recommended Coaching Match
                    </Badge>
                    <Badge variant="primary">100% Online Guidance</Badge>
                  </div>

                  <h3 className="matched-program-title">
                    {selectedGoal.matchedProgram.title}
                  </h3>

                  <p className="matched-program-tagline">
                    {selectedGoal.matchedProgram.tagline}
                  </p>

                  <div className="why-it-fits-box">
                    <strong className="why-label">Why This Matches Your Goal:</strong>
                    <p className="why-text">{selectedGoal.matchedProgram.whyItFits}</p>
                  </div>

                  <div className="matched-deliverables-box stack stack-xs">
                    <span className="deliverables-heading">Key Support Deliverables:</span>
                    <ul className="deliverables-list">
                      {selectedGoal.matchedProgram.deliverables.map((item, idx) => (
                        <li key={idx} className="deliverable-item">
                          <Icon name="check" size={14} className="deliverable-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Match Action Callouts */}
                <div className="matched-action-col stack stack-sm">
                  <div className="matched-action-card stack stack-sm">
                    <span className="action-card-title">Ready to Take the First Step?</span>
                    <p className="action-card-desc">
                      Schedule a free 1-on-1 virtual consultation with Coach Halima Sadiya to discuss your goals in detail.
                    </p>

                    <Button
                      variant="accent"
                      size="lg"
                      href={CTA_CONFIG.primary.href}
                      rightIcon={<Icon name="arrow-right" size={16} />}
                      className="matched-primary-btn"
                    >
                      Book Free Consultation
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      href={`#${selectedGoal.matchedProgram.anchorId}`}
                      rightIcon={<Icon name="chevron-down" size={16} />}
                    >
                      View Full Program Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Visible Non-Medical Advice Disclaimer */}
        <div className="finder-disclaimer-banner" role="note">
          <Icon name="shield" size={18} className="disclaimer-icon" />
          <div className="stack stack-none">
            <span className="disclaimer-title">Non-Medical Coaching Guidance Note</span>
            <p className="disclaimer-text">
              This interactive finder is a general program-matching aid designed to help you explore our online wellness, nutrition, and fitness coaching services. It does not constitute medical advice, medical diagnosis, or guaranteed health outcomes. For specific medical conditions, please consult your healthcare physician.
            </p>
          </div>
        </div>
      </div>

      {/* Program Finder Scoped Styles */}
      <style>{`
        .finder-container {
          max-width: 960px;
          margin: 0 auto;
        }

        .finder-prompt-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .finder-prompt-step {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-accent-700);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .finder-prompt-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }

        .goal-options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }

        @media (min-width: 640px) {
          .goal-options-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .goal-option-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.15rem 1.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
          text-align: left;
          cursor: pointer;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
          min-height: 72px;
          width: 100%;
        }

        .goal-option-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary-600);
          box-shadow: var(--shadow-sm);
        }

        .goal-option-card:focus-visible {
          outline: 2px solid var(--color-primary-600);
          outline-offset: 2px;
        }

        .goal-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .goal-text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .goal-label {
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .goal-sublabel {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: 1.3;
        }

        .goal-arrow-icon {
          color: var(--color-text-muted);
          flex-shrink: 0;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        .goal-option-card:hover .goal-arrow-icon {
          color: var(--color-primary-700);
          transform: translateX(3px);
        }

        /* Matched Result Card */
        .matched-header {
          align-items: center;
          padding-bottom: 0.5rem;
        }

        .matched-goal-badge {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .matched-goal-name {
          font-size: var(--text-sm);
          color: var(--color-primary-800);
        }

        .btn-reset-finder {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.35rem 0.75rem;
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-reset-finder:hover {
          border-color: var(--color-accent-600);
          color: var(--color-accent-700);
          background-color: var(--color-bg-subtle);
        }

        .matched-program-card {
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          border: 1px solid var(--color-secondary-border);
          box-shadow: var(--shadow-md);
        }

        .matched-card-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 860px) {
          .matched-card-inner {
            grid-template-columns: 1.3fr 0.9fr;
            align-items: start;
          }
        }

        .matched-program-title {
          font-family: var(--font-heading);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .matched-program-tagline {
          font-size: var(--text-base);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .why-it-fits-box {
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
        }

        .why-label {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          display: block;
          margin-bottom: 2px;
        }

        .why-text {
          font-size: var(--text-sm);
          color: var(--color-primary-800);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .deliverables-heading {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: var(--text-sm);
          color: var(--color-text-main);
        }

        .deliverable-check {
          color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Action Column */
        .matched-action-card {
          padding: 1.5rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
        }

        .action-card-title {
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .action-card-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .matched-primary-btn {
          width: 100%;
        }

        /* Disclaimer */
        .finder-disclaimer-banner {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          background-color: #FFFBEB;
          border: 1px solid #FDE68A;
          margin-top: 0.5rem;
        }

        .disclaimer-icon {
          color: #B45309;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-title {
          font-size: var(--text-xs);
          font-weight: 700;
          color: #92400E;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .disclaimer-text {
          font-size: var(--text-xs);
          color: #78350F;
          line-height: var(--leading-normal);
          margin: 2px 0 0 0;
        }
      `}</style>
    </SectionWrapper>
  );
};
