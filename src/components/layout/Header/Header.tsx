import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, CTA_CONFIG } from '../../../config/navigation.config';
import { BrandLogo } from '../../shared/BrandLogo/BrandLogo';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { Container } from '../../primitives/Container/Container';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  // Track scroll position for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-sticky)',
          transition: 'all var(--transition-base)',
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.96)'
            : 'rgba(251, 253, 251, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled
            ? '1px solid var(--color-border)'
            : '1px solid rgba(229, 234, 231, 0.6)',
          boxShadow: isScrolled ? '0 2px 12px rgba(13, 74, 56, 0.06)' : 'none',
          paddingBlock: isScrolled ? '0.65rem' : '0.9rem'
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
            {/* Bilingual Brand Identity */}
            <BrandLogo size="md" theme="light" />

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="desktop-nav"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 1.4vw, 1.35rem)'
              }}
            >
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--color-primary-700)' : 'var(--color-text-secondary)',
                      transition: 'color var(--transition-fast)',
                      position: 'relative',
                      paddingBlock: '0.35rem',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-primary-700)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)';
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="nav-active-underline" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Consultation CTA */}
            <div
              className="desktop-actions"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.75rem',
                flexShrink: 0
              }}
            >
              <Button
                variant="accent"
                size="sm"
                href={CTA_CONFIG.primary.href}
                rightIcon={<Icon name="arrow-right" size={14} />}
              >
                {CTA_CONFIG.primary.label}
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              ref={menuButtonRef}
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-secondary-soft)',
                border: '1px solid var(--color-secondary-border)',
                color: 'var(--color-primary-800)',
                cursor: 'pointer'
              }}
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-modal)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Backdrop Overlay */}
          <div
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(7, 47, 34, 0.45)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          {/* Slide-out Menu Panel (Designed for comfortable one-thumb reach) */}
          <div
            ref={mobileMenuRef}
            style={{
              position: 'absolute',
              
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(340px, 85vw)',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
              animation: 'slideInRight 0.22s ease-out'
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--color-border)'
              }}
            >
              <BrandLogo size="sm" theme="light" />
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  color: 'var(--color-text-main)'
                }}
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            {/* Nav Items List */}
            <nav
              aria-label="Mobile Navigation Links"
              style={{
                flex: '1 1 auto',
                overflowY: 'auto',
                padding: '1rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}
            >
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={`mobile-${item.id}`}
                    to={item.href}
                    onClick={closeMobileMenu}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--color-primary-700)' : 'var(--color-text-main)',
                      backgroundColor: isActive ? 'var(--color-secondary-soft)' : 'transparent',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary-700)'
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Bottom CTA */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <Button
                variant="accent"
                size="md"
                href={CTA_CONFIG.primary.href}
                onClick={closeMobileMenu}
                fullWidth
                rightIcon={<Icon name="arrow-right" size={16} />}
              >
                {CTA_CONFIG.primary.label}
              </Button>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  textAlign: 'center'
                }}
              >
                100% Online Coaching • Direct Access
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Header responsive styling */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (min-width: 1040px) {
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
    </>
  );
};
