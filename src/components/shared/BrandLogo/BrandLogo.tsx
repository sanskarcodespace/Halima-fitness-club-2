import React from 'react';
import { cn } from '../../../utils/cn';
import { BUSINESS_CONFIG } from '../../../config/business.config';

export interface BrandLogoProps {
  showHindi?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  showHindi = true,
  showTagline = false,
  size = 'md',
  className
}) => {
  return (
    <a
      href="#home"
      className={cn('brand-logo', `brand-logo-${size}`, className)}
      aria-label={`${BUSINESS_CONFIG.businessName} - Home`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none'
      }}
    >
      {/* Brand Emblem */}
      <div
        className="brand-emblem"
        style={{
          width: size === 'sm' ? '36px' : size === 'lg' ? '52px' : '44px',
          height: size === 'sm' ? '36px' : size === 'lg' ? '52px' : '44px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #10B981 0%, #064E3B 100%)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35), 0 0 15px rgba(16, 185, 129, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.45rem' : '1.2rem',
            background: 'var(--color-gold-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
          }}
        >
          H
        </span>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.35rem' : '1.15rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            HALIMA
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: size === 'sm' ? '0.85rem' : size === 'lg' ? '1.15rem' : '0.95rem',
              color: 'var(--color-gold-400)',
              letterSpacing: '0.04em'
            }}
          >
            FITNESS CLUB
          </span>
        </div>

        {showHindi && (
          <span
            className="font-hindi"
            style={{
              fontSize: size === 'sm' ? '0.7rem' : size === 'lg' ? '0.85rem' : '0.75rem',
              color: 'var(--color-text-muted)',
              marginTop: '2px',
              letterSpacing: '0.02em'
            }}
          >
            {BUSINESS_CONFIG.hindiName}
          </span>
        )}

        {showTagline && (
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-subtle)',
              marginTop: '4px'
            }}
          >
            {BUSINESS_CONFIG.coach.title} • {BUSINESS_CONFIG.coach.experience} Exp.
          </span>
        )}
      </div>
    </a>
  );
};
