import React from 'react';
import { cn } from '../../../utils/cn';
import { BUSINESS_CONFIG } from '../../../config/business.config';

export interface BrandLogoProps {
  showHindi?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  showHindi = true,
  showTagline = false,
  size = 'md',
  theme = 'light',
  className
}) => {
  const isDark = theme === 'dark';

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
          width: size === 'sm' ? '36px' : size === 'lg' ? '50px' : '42px',
          height: size === 'sm' ? '36px' : size === 'lg' ? '50px' : '42px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#0D4A38',
          border: '1px solid rgba(224, 106, 59, 0.3)',
          boxShadow: '0 2px 8px rgba(13, 74, 56, 0.2)',
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
            fontSize: size === 'sm' ? '1.05rem' : size === 'lg' ? '1.45rem' : '1.25rem',
            color: '#FFFFFF',
            lineHeight: 1
          }}
        >
          H
        </span>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.3rem' : '1.15rem',
              letterSpacing: '-0.02em',
              color: isDark ? '#FFFFFF' : 'var(--color-primary-800)'
            }}
          >
            HALIMA
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: size === 'sm' ? '0.85rem' : size === 'lg' ? '1.1rem' : '0.95rem',
              color: isDark ? 'var(--color-accent-400)' : 'var(--color-accent-600)',
              letterSpacing: '0.03em'
            }}
          >
            FITNESS CLUB
          </span>
        </div>

        {showHindi && (
          <span
            className="font-hindi"
            style={{
              fontSize: size === 'sm' ? '0.72rem' : size === 'lg' ? '0.85rem' : '0.78rem',
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'var(--color-text-muted)',
              marginTop: '2px',
              fontWeight: 500
            }}
          >
            {BUSINESS_CONFIG.hindiName}
          </span>
        )}

        {showTagline && (
          <span
            style={{
              fontSize: '0.75rem',
              color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'var(--color-text-subtle)',
              marginTop: '3px'
            }}
          >
            {BUSINESS_CONFIG.coach.title} • {BUSINESS_CONFIG.coach.experience} Exp.
          </span>
        )}
      </div>
    </a>
  );
};
