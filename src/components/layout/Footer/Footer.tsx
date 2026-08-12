import React from 'react';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { FOOTER_NAV_GROUPS } from '../../../config/navigation.config';
import { BrandLogo } from '../../shared/BrandLogo/BrandLogo';
import { Container } from '../../primitives/Container/Container';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { PlaceholderShield } from '../../shared/PlaceholderShield/PlaceholderShield';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#04120D',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
        color: 'var(--color-text-secondary)',
        position: 'relative'
      }}
    >
      <Container size="wide">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Positioning */}
          <div style={{ gridColumn: 'span 1', maxWidth: '380px' }} className="stack stack-md">
            <BrandLogo size="md" showTagline />

            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--leading-relaxed)',
                marginTop: '0.75rem'
              }}
            >
              {BUSINESS_CONFIG.positioning}
            </p>

            <div style={{ marginTop: '0.5rem' }}>
              <Badge variant="emerald" icon={<Icon name="shield" size={14} />}>
                {BUSINESS_CONFIG.scopeNotice}
              </Badge>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="cluster cluster-sm" style={{ marginTop: '1rem' }}>
              <a
                href={BUSINESS_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-main)'
                }}
              >
                <Icon name="instagram" size={16} />
                <span>{BUSINESS_CONFIG.instagram.handle}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                aria-label="Email Coach Halima"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-main)'
                }}
              >
                <Icon name="mail" size={16} />
                <span>Email Coach</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_NAV_GROUPS.map((group) => (
            <div key={group.title} className="stack stack-sm">
              <h4
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}
              >
                {group.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.isPlaceholder ? (
                      <PlaceholderShield value={link.label} />
                    ) : (
                      <a
                        href={link.href}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text-muted)',
                          transition: 'color var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-400)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'rgba(6, 22, 17, 0.6)',
            border: '1px solid var(--color-border)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Icon
              name="alert"
              size={18}
              style={{ color: 'var(--color-gold-400)', flexShrink: 0, marginTop: '2px' }}
            />
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--leading-normal)',
                margin: 0
              }}
            >
              <strong>Health & Wellness Notice: </strong>
              {BUSINESS_CONFIG.disclaimers.coachingDisclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-subtle)'
          }}
        >
          <div>
            © {currentYear} {BUSINESS_CONFIG.businessName} ({BUSINESS_CONFIG.hindiName}). All rights reserved. Led by {BUSINESS_CONFIG.coach.name}.
          </div>

          <div className="cluster cluster-sm">
            <span>Online Coaching Platform</span>
            <span>•</span>
            <span>Availability: {BUSINESS_CONFIG.availability}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
