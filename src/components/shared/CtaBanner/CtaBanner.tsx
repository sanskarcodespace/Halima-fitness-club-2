import React from 'react';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { CTA_CONFIG } from '../../../config/navigation.config';

export interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = 'Ready to Build Sustainable Health & Nutrition Habits?',
  subtitle = 'Connect directly with Coach Halima Sadiya for personalized online coaching, tailored workout support, and consistent follow-up.',
  primaryCtaText = CTA_CONFIG.primary.label,
  secondaryCtaText = 'Connect on Instagram',
  className
}) => {
  return (
    <Card
      className={className}
      style={{
        padding: 'clamp(2.5rem, 5vw, 3.5rem)',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: '#0D4A38',
        borderColor: '#125E48',
        boxShadow: 'var(--shadow-wellness)',
        color: '#FFFFFF'
      }}
    >
      <div style={{ maxWidth: '720px', marginInline: 'auto' }} className="stack stack-lg">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge
            variant="accent"
            icon={<Icon name="sparkles" size={14} />}
            style={{ backgroundColor: 'rgba(255, 247, 237, 0.95)' }}
          >
            100% Online Coaching • Direct Guidance
          </Badge>
        </div>

        <h3
          style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: 700,
            lineHeight: 'var(--leading-tight)',
            color: '#FFFFFF'
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 'var(--text-base)',
            color: '#E8F5EE',
            lineHeight: 'var(--leading-relaxed)'
          }}
        >
          {subtitle}
        </p>

        <div
          className="cluster"
          style={{ justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}
        >
          <Button
            variant="accent"
            size="lg"
            href={CTA_CONFIG.primary.href}
            rightIcon={<Icon name="arrow-right" size={18} />}
          >
            {primaryCtaText}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={BUSINESS_CONFIG.instagram.url}
            isExternal
            leftIcon={<Icon name="instagram" size={18} />}
          >
            {secondaryCtaText}
          </Button>
        </div>

        <div
          style={{
            fontSize: 'var(--text-xs)',
            color: '#A7F3D0',
            marginTop: '0.5rem'
          }}
        >
          {BUSINESS_CONFIG.coach.title} • {BUSINESS_CONFIG.coach.experience} Experience •{' '}
          {BUSINESS_CONFIG.availability}
        </div>
      </div>
    </Card>
  );
};
