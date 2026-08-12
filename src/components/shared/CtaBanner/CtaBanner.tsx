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
      variant="glass"
      className={className}
      style={{
        padding: 'clamp(2rem, 5vw, 3.5rem)',
        textAlign: 'center',
        position: 'relative',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.15)'
      }}
    >
      <div style={{ maxWidth: '760px', marginInline: 'auto' }} className="stack stack-lg">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge variant="gold" icon={<Icon name="sparkles" size={14} />}>
            100% Online Coaching • Direct Access
          </Badge>
        </div>

        <h3
          style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: 800,
            lineHeight: 'var(--leading-tight)'
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
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
            variant="gold"
            size="lg"
            href={CTA_CONFIG.primary.href}
            rightIcon={<Icon name="arrow-right" size={18} />}
          >
            {primaryCtaText}
          </Button>
          <Button
            variant="outline"
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
            color: 'var(--color-text-subtle)',
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
