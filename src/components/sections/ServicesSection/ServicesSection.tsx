import React from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { INITIAL_CONTENT } from '../../../content/initialContent';
import type { ServiceItem } from '../../../content/types';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export interface ServicesSectionProps {
  limit?: number;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ limit }) => {
  const displayedServices = limit 
    ? INITIAL_CONTENT.services.slice(0, limit) 
    : INITIAL_CONTENT.services;

  return (
    <SectionWrapper
      id={SECTION_IDS.PROGRAMS}
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="services-overview-section"
    >
      <SectionHeading
        eyebrow="Complete Coaching Offerings"
        eyebrowVariant="primary"
        title={
          <>
            Specialized Online <span className="text-primary-green">Programs &amp; Services</span>
          </>
        }
        subtitle="Comprehensive virtual guidance in nutrition, fitness, and daily lifestyle transformation tailored to your personal routine."
        align="center"
      />

      {/* Services Grid */}
      <div className="services-grid">
        {displayedServices.map((service: ServiceItem, index: number) => (
          <RevealWrapper
            key={service.id}
            delay={((index % 3) + 1) as 1 | 2 | 3}
          >
            <Card
              id={service.anchorId}
              variant="surface"
              className="service-card"
            >
            <div className="service-card-header">
              <div className="service-icon-box" aria-hidden="true">
                <Icon name={service.icon} size={22} />
              </div>
              {service.badge && (
                <Badge variant={service.badge === 'Featured' ? 'accent' : 'primary'}>
                  {service.badge}
                </Badge>
              )}
            </div>

            <div className="service-card-body stack stack-sm">
              <h3 className="service-title">{service.name}</h3>

              {/* Target Audience Pill */}
              <div className="service-audience-pill">
                <Icon name="user" size={13} className="audience-icon" />
                <span>{service.targetAudience}</span>
              </div>

              {/* Honest Description */}
              <p className="service-desc">{service.description}</p>

              {/* Support Deliverables List */}
              <div className="service-support-box stack stack-xs">
                <span className="support-heading">Support Includes:</span>
                <ul className="support-list">
                  {service.supportIncludes.map((item, idx) => (
                    <li key={idx} className="support-item">
                      <Icon name="check" size={13} className="support-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service CTA Footer */}
            <div className="service-card-footer">
              <Button
                variant="accent"
                size="md"
                href={CTA_CONFIG.primary.href}
                rightIcon={<Icon name="arrow-right" size={15} />}
                className="service-cta-btn"
              >
                Book Free Consultation
              </Button>
            </div>
          </Card>
          </RevealWrapper>
        ))}
      </div>

      {limit && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Button
            variant="outline"
            size="lg"
            href="/programs"
            rightIcon={<Icon name="arrow-right" size={18} />}
          >
            View All Programs
          </Button>
        </div>
      )}

      {/* Professional Medical Disclaimer */}
      <div className="services-disclaimer">
        <Icon name="alert-circle" size={16} className="disclaimer-icon" />
        <p>
          <strong>Professional Notice:</strong> These services provide general wellness, nutrition and lifestyle guidance and are not a substitute for diagnosis or treatment by a qualified medical professional. For medical concerns, please consult an appropriate healthcare professional.
        </p>
      </div>

      {/* Services Overview Scoped Styles */}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem;
          }
        }

        .service-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.15rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xs);
          transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
          scroll-margin-top: 80px;
        }

        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-secondary-border);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        .service-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background-color: var(--color-secondary-soft);
          border: 1px solid var(--color-secondary-border);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card-body {
          flex: 1;
        }

        .service-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: var(--leading-tight);
          margin: 0;
        }

        .service-audience-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-text-secondary);
          width: fit-content;
        }

        .audience-icon {
          color: var(--color-accent-600);
          flex-shrink: 0;
        }

        .service-desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0.25rem 0 0.5rem 0;
        }

        .service-support-box {
          padding: 0.85rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          margin-top: 0.5rem;
        }

        .support-heading {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-800);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .support-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .support-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: var(--text-xs);
          color: var(--color-text-main);
          line-height: var(--leading-normal);
        }

        .support-check {
          color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-card-footer {
          margin-top: 0.85rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border);
        }

        .service-cta-btn {
          width: 100%;
        }

        .services-disclaimer {
          margin-top: 2rem;
          padding: 1rem;
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
        }

        .disclaimer-icon {
          color: var(--color-primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </SectionWrapper>
  );
};
