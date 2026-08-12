import React, { useState, useEffect } from 'react';
import { PRIMARY_NAV_ITEMS, CTA_CONFIG, SECTION_IDS } from '../../../config/navigation.config';
import { BrandLogo } from '../../shared/BrandLogo/BrandLogo';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { Container } from '../../primitives/Container/Container';
import { useScrollSpy } from '../../../hooks/useScrollSpy';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = Object.values(SECTION_IDS);
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-sticky)',
        transition: 'all var(--transition-base)',
        backgroundColor: isScrolled
          ? 'rgba(6, 22, 17, 0.92)'
          : 'rgba(6, 22, 17, 0.6)',
        backdropFilter: 'var(--backdrop-blur-md)',
        WebkitBackdropFilter: 'var(--backdrop-blur-md)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        paddingBlock: isScrolled ? '0.75rem' : '1.15rem'
      }}
    >
      <Container size="wide">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Identity */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav"
          >
            {PRIMARY_NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-primary-400)' : 'var(--color-text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    paddingBlock: '0.25rem'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-primary-400)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Header Actions */}
          <div
            className="desktop-actions"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Button
              variant="gold"
              size="sm"
              href={CTA_CONFIG.primary.href}
              rightIcon={<Icon name="arrow-right" size={14} />}
            >
              {CTA_CONFIG.primary.label}
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-bg-surface-elevated)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-main)'
            }}
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(6, 22, 17, 0.98)',
            backdropFilter: 'var(--backdrop-blur-lg)',
            WebkitBackdropFilter: 'var(--backdrop-blur-lg)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <nav
            aria-label="Mobile Navigation"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {PRIMARY_NAV_ITEMS.map((item) => (
              <a
                key={`mobile-${item.id}`}
                href={item.href}
                onClick={closeMobileMenu}
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                  paddingBlock: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            variant="gold"
            size="md"
            href={CTA_CONFIG.primary.href}
            onClick={closeMobileMenu}
            fullWidth
            rightIcon={<Icon name="arrow-right" size={16} />}
          >
            {CTA_CONFIG.primary.label}
          </Button>
        </div>
      )}

      {/* Responsive media query override styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
