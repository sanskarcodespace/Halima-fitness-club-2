import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { CTA_CONFIG } from '../../../config/navigation.config';

export const ClassScheduleSection: React.FC = () => {
  const morningSlots = [
    {
      slotName: 'Morning Batch 1',
      time: '6:00 AM – 7:00 AM',
      duration: '60 Minutes',
      focusTag: 'Early Morning Routine',
      description: 'Start your day with high-energy guided movement, core activation, and morning vitality.'
    },
    {
      slotName: 'Morning Batch 2',
      time: '7:00 AM – 8:00 AM',
      duration: '60 Minutes',
      focusTag: 'Mid-Morning Kickstart',
      description: 'Ideal for professionals and homemakers before daily work schedules begin.'
    }
  ];

  const eveningSlots = [
    {
      slotName: 'Evening Batch 1',
      time: '6:00 PM – 7:00 PM',
      duration: '60 Minutes',
      focusTag: 'Post-Work Mobility',
      description: 'Decompress from the workday with functional mobility, guided cardio, and posture correction.'
    },
    {
      slotName: 'Evening Batch 2',
      time: '7:00 PM – 8:00 PM',
      duration: '60 Minutes',
      focusTag: 'Evening Stress Relief',
      description: 'End your day with structured full-body fitness, relaxation breathing, and habit reviews.'
    }
  ];

  return (
    <SectionWrapper
      id="schedule"
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="class-schedule-section"
    >
      <SectionHeading
        eyebrow="Live Batch Timings"
        eyebrowVariant="primary"
        title={
          <>
            Morning &amp; Evening <span className="text-primary-green">Class Schedule</span>
          </>
        }
        subtitle="Choose from convenient morning and evening slots conducted live on Zoom, 6 days per week with limited batch sizes."
        align="center"
      />

      <div className="schedule-container stack stack-md">
        {/* Quick Specs Highlight Bar */}
        <div className="schedule-specs-bar">
          <div className="spec-pill">
            <Icon name="sparkles" size={15} className="spec-pill-icon" />
            <span>Platform: <strong>Zoom Live Video</strong></span>
          </div>
          <div className="spec-pill">
            <Icon name="clock" size={15} className="spec-pill-icon" />
            <span>Duration: <strong>60 Minutes / Class</strong></span>
          </div>
          <div className="spec-pill">
            <Icon name="lifestyle" size={15} className="spec-pill-icon" />
            <span>Frequency: <strong>6 Days / Week</strong></span>
          </div>
          <div className="spec-pill">
            <Icon name="user" size={15} className="spec-pill-icon" />
            <span>Batch Size: <strong>Limited to 20–25</strong></span>
          </div>
        </div>

        {/* 2-Column Schedule Timetable Grid */}
        <div className="schedule-grid">
          {/* Morning Column */}
          <Card variant="surface" className="schedule-group-card morning-card stack stack-md">
            <div className="group-header morning-header split">
              <div className="cluster cluster-sm">
                <div className="group-icon-box morning-icon" aria-hidden="true">
                  <Icon name="sparkles" size={18} />
                </div>
                <div>
                  <h3 className="group-title">Morning Batches</h3>
                  <span className="group-sublabel">Early Day Guided Fitness</span>
                </div>
              </div>
              <Badge variant="primary">6 Days/Week</Badge>
            </div>

            <div className="slots-list stack stack-sm">
              {morningSlots.map((slot, idx) => (
                <div key={idx} className="slot-item-box">
                  <div className="split">
                    <span className="slot-badge">{slot.slotName}</span>
                    <span className="slot-duration">{slot.duration}</span>
                  </div>
                  <div className="slot-time-row">
                    <strong className="slot-time-text">{slot.time}</strong>
                    <Badge variant="neutral">{slot.focusTag}</Badge>
                  </div>
                  <p className="slot-desc">{slot.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Evening Column */}
          <Card variant="surface" className="schedule-group-card evening-card stack stack-md">
            <div className="group-header evening-header split">
              <div className="cluster cluster-sm">
                <div className="group-icon-box evening-icon" aria-hidden="true">
                  <Icon name="clock" size={18} />
                </div>
                <div>
                  <h3 className="group-title">Evening Batches</h3>
                  <span className="group-sublabel">Afternoon &amp; Dusk Guided Fitness</span>
                </div>
              </div>
              <Badge variant="accent">6 Days/Week</Badge>
            </div>

            <div className="slots-list stack stack-sm">
              {eveningSlots.map((slot, idx) => (
                <div key={idx} className="slot-item-box">
                  <div className="split">
                    <span className="slot-badge">{slot.slotName}</span>
                    <span className="slot-duration">{slot.duration}</span>
                  </div>
                  <div className="slot-time-row">
                    <strong className="slot-time-text">{slot.time}</strong>
                    <Badge variant="neutral">{slot.focusTag}</Badge>
                  </div>
                  <p className="slot-desc">{slot.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Schedule Policy & Trial Class Availability Notice */}
        <div className="schedule-policy-box">
          <div className="policy-item">
            <Icon name="shield" size={16} className="policy-icon" />
            <span>
              <strong>Schedule Consistency: </strong> Classes operate 6 days per week. (Sunday sessions are not scheduled to ensure weekly body recovery).
            </span>
          </div>
          <div className="policy-item">
            <Icon name="check" size={16} className="policy-icon" />
            <span>
              <strong>Trial Class on Request: </strong> Trial access is subject to current batch capacity (maximum 20–25 participants per batch).
            </span>
          </div>
        </div>

        {/* Action Row */}
        <div className="schedule-cta-row">
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
            href={CTA_CONFIG.primary.href}
            rightIcon={<Icon name="sparkles" size={18} />}
          >
            Request a Trial Class
          </Button>
        </div>
      </div>

      {/* Class Schedule Scoped Styles */}
      <style>{`
        .schedule-container {
          max-width: 1040px;
          margin: 0 auto;
        }

        .schedule-specs-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 0.95rem;
          border-radius: var(--radius-full);
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          box-shadow: var(--shadow-xs);
        }

        .spec-pill-icon {
          color: var(--color-primary-600);
          flex-shrink: 0;
        }

        /* 2-Column Schedule Grid */
        .schedule-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 860px) {
          .schedule-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        .schedule-group-card {
          padding: 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .group-header {
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .group-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .morning-icon {
          background-color: #FEF3C7;
          color: #B45309;
        }

        .evening-icon {
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
        }

        .group-title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-primary-900);
          margin: 0;
        }

        .group-sublabel {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
        }

        .slot-item-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 1rem 1.15rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .slot-item-box:hover {
          border-color: var(--color-secondary-border);
          transform: translateY(-1px);
        }

        .slot-badge {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-800);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .slot-duration {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .slot-time-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin: 2px 0;
        }

        .slot-time-text {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-900);
          letter-spacing: -0.01em;
        }

        .slot-desc {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        /* Policy Box */
        .schedule-policy-box {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-md);
          background-color: #FFFFFF;
          border: 1px solid var(--color-secondary-border);
        }

        @media (min-width: 640px) {
          .schedule-policy-box {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .policy-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
        }

        .policy-icon {
          color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .schedule-cta-row {
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
