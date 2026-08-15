import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { BrandLogo } from '../../shared/BrandLogo/BrandLogo';
import { Container } from '../../primitives/Container/Container';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { Button } from '../../primitives/Button/Button';
import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const mainNavLinks = [
    { label: 'Home', href: `#${SECTION_IDS.HOME}` },
    { label: 'About Coach Halima', href: `#${SECTION_IDS.ABOUT}` },
    { label: 'Programs & Services', href: `#${SECTION_IDS.PROGRAMS}` },
    { label: 'Live Online Classes', href: `#${SECTION_IDS.CLASSES}` },
    { label: 'Success Stories', href: `#${SECTION_IDS.SUCCESS_STORIES}` },
    { label: 'Client Testimonials', href: `#${SECTION_IDS.TESTIMONIALS}` },
    { label: 'FAQ', href: `#${SECTION_IDS.FAQ}` },
    { label: 'Book Consultation', href: `#${SECTION_IDS.CONTACT}` }
  ];

  const coachingTracks = [
    { label: 'Weight Loss Coaching', href: `#${SECTION_IDS.PROGRAMS}` },
    { label: 'Weight Gain Support', href: `#${SECTION_IDS.PROGRAMS}` },
    { label: 'Weight Management', href: `#${SECTION_IDS.PROGRAMS}` },
    { label: 'Personalized Nutrition', href: `#${SECTION_IDS.PROGRAMS}` },
    { label: '21 Days Transformation Challenge', href: '#challenge' },
    { label: 'Daily Live Zoom Batches (6 Days/Wk)', href: `#${SECTION_IDS.CLASSES}` }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <Container size="wide">
        {/* Main Footer 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Identity & Positioning */}
          <div className="footer-col footer-brand-col stack stack-md">
            <BrandLogo size="md" theme="dark" showTagline />

            <div className="stack stack-none">
              <span className="footer-descriptor">Online Fitness &amp; Wellness Coaching</span>
              <p className="footer-positioning">{BUSINESS_CONFIG.positioning}</p>
            </div>

            <div className="cluster cluster-xs">
              <Badge variant="primary" icon={<Icon name="shield" size={13} />}>
                {BUSINESS_CONFIG.scopeNotice}
              </Badge>
            </div>

            {/* Live Availability Status */}
            <div className="footer-availability-box cluster cluster-xs">
              <span className="footer-status-dot" aria-hidden="true" />
              <span className="footer-availability-text">
                <strong>Availability:</strong> {BUSINESS_CONFIG.availability}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col stack stack-sm">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              {mainNavLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coaching Tracks & Programs */}
          <div className="footer-col stack stack-sm">
            <h4 className="footer-col-title">Coaching Programs</h4>
            <ul className="footer-link-list">
              {coachingTracks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & Social */}
          <div className="footer-col stack stack-sm">
            <h4 className="footer-col-title">Contact &amp; Connect</h4>

            <div className="stack stack-xs">
              {/* Direct Email Link */}
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="footer-contact-card"
                aria-label={`Send email to ${BUSINESS_CONFIG.email}`}
              >
                <div className="footer-icon-box" aria-hidden="true">
                  <Icon name="mail" size={16} />
                </div>
                <div className="stack stack-none">
                  <span className="contact-card-sub">Direct Email</span>
                  <span className="contact-card-main">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>

              {/* Instagram Official Profile Link */}
              <a
                href={BUSINESS_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-card"
                aria-label={`Visit official Instagram profile: ${BUSINESS_CONFIG.instagram.handle}`}
              >
                <div className="footer-icon-box footer-icon-ig" aria-hidden="true">
                  <Icon name="instagram" size={16} />
                </div>
                <div className="stack stack-none">
                  <span className="contact-card-sub">Official Instagram</span>
                  <span className="contact-card-main">{BUSINESS_CONFIG.instagram.handle}</span>
                </div>
              </a>

              {/* Direct Contact Lines */}
              <a
                href="https://wa.me/919570030631"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-card"
                aria-label="WhatsApp Coach Halima"
              >
                <div className="footer-contact-icon-wrap whatsapp-icon-wrap">
                  <Icon name="message" size={18} aria-hidden="true" />
                </div>
                <div className="stack stack-none">
                  <span className="contact-card-sub">WhatsApp</span>
                  <span className="contact-card-main">+91 95700 30631</span>
                </div>
              </a>

              <a
                href="tel:+919570030631"
                className="footer-contact-card"
                aria-label="Call Coach Halima"
              >
                <div className="footer-contact-icon-wrap phone-icon-wrap">
                  <Icon name="user" size={18} aria-hidden="true" />
                </div>
                <div className="stack stack-none">
                  <span className="contact-card-sub">Phone</span>
                  <span className="contact-card-main">+91 95700 30631</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Health & Wellness Scope Disclaimer Box */}
        <div className="footer-disclaimer-box">
          <div className="cluster cluster-sm align-start">
            <Icon name="alert" size={18} className="footer-disclaimer-icon" />
            <p className="footer-disclaimer-text">
              <strong>Health &amp; Wellness Notice: </strong>
              {BUSINESS_CONFIG.disclaimers.coachingDisclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar split">
          <div className="stack stack-none">
            <p className="copyright-text">
              © {currentYear} {BUSINESS_CONFIG.businessName} ({BUSINESS_CONFIG.hindiName}). All rights reserved. Online Health &amp; Wellness Coaching led by {BUSINESS_CONFIG.coach.name} ({BUSINESS_CONFIG.coach.experience}).
            </p>
          </div>

          <div className="cluster cluster-sm footer-legal-links">
            <button
              type="button"
              onClick={() => setLegalModalType('privacy')}
              className="legal-link-btn"
            >
              Privacy Policy
            </button>
            <span className="legal-dot">•</span>
            <button
              type="button"
              onClick={() => setLegalModalType('terms')}
              className="legal-link-btn"
            >
              Terms of Service
            </button>
            <span className="legal-dot">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <Icon name="arrow-right" size={12} className="top-arrow" />
            </button>
          </div>
        </div>
      </Container>

      {/* Legal Policy Placeholder Modal */}
      {legalModalType && (
        <div
          className="legal-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setLegalModalType(null)}
        >
          <div
            className="legal-modal-card stack stack-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="split modal-header">
              <div className="cluster cluster-xs">
                <Icon name="shield" size={20} className="modal-shield" />
                <h3 id="legal-modal-title" className="legal-modal-title">
                  {legalModalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLegalModalType(null)}
                className="modal-close-btn"
                aria-label="Close legal modal"
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            <div className="modal-notice-card stack stack-xs">
              <div className="split">
                <span className="notice-title">Legal Document Status:</span>
                <PlaceholderNotice
                  label={
                    legalModalType === 'privacy'
                      ? '[PRIVACY POLICY CONTENT REQUIRED]'
                      : '[TERMS CONTENT REQUIRED]'
                  }
                />
              </div>
              <p className="notice-desc">
                {legalModalType === 'privacy'
                  ? 'The formal privacy policy document for Halima Fitness Club will be published here upon legal finalization. Halima Fitness Club never sells or shares your personal contact information.'
                  : 'The terms of service governing participation in online fitness classes and wellness coaching will be published here once formalized. All coaching requires prior consultation.'}
              </p>
            </div>

            <div className="split modal-actions">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLegalModalType(null)}
              >
                Close Window
              </Button>

              <Button
                variant="accent"
                size="sm"
                href={`#${SECTION_IDS.CONTACT}`}
                onClick={() => setLegalModalType(null)}
              >
                {CTA_CONFIG.primary.label}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Scoped Styles */}
      <style>{`
        .site-footer {
          background-color: #062217;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: clamp(3.5rem, 6vw, 5rem);
          padding-bottom: 2.5rem;
          color: #E2E8F0;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.35fr 0.9fr 1.1fr 1.25fr;
          }
        }

        .footer-brand-col {
          max-width: 360px;
        }

        .footer-descriptor {
          font-family: var(--font-heading);
          font-size: var(--text-xs);
          font-weight: 700;
          color: #FCD34D;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-positioning {
          font-size: var(--text-xs);
          color: #CBD5E1;
          line-height: var(--leading-relaxed);
          margin: 4px 0 0 0;
        }

        .footer-availability-box {
          align-items: center;
          padding: 0.45rem 0.85rem;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .footer-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 8px #22C55E;
          display: inline-block;
        }

        .footer-availability-text {
          font-size: 11px;
          color: #E2E8F0;
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: var(--text-xs);
          font-weight: 800;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
          padding-bottom: 0.35rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-link {
          font-size: var(--text-xs);
          color: #CBD5E1;
          text-decoration: none;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-link:hover {
          color: #6EE7B7;
          transform: translateX(3px);
        }

        /* Contact Cards */
        .footer-contact-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: inherit;
          transition: all var(--transition-fast);
        }

        .footer-contact-card:hover {
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .footer-icon-box {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background-color: rgba(255, 255, 255, 0.08);
          color: #6EE7B7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-icon-ig {
          color: #F472B6;
        }

        .contact-card-sub {
          font-size: 10px;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .contact-card-main {
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          word-break: break-all;
        }

        .whatsapp-icon-wrap {
          background: rgba(22, 163, 74, 0.2);
          border-color: rgba(22, 163, 74, 0.35);
          color: #4ade80;
        }

        .phone-icon-wrap {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.35);
          color: #a5b4fc;
        }


        /* Disclaimer Box */
        .footer-disclaimer-box {
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          background-color: rgba(4, 31, 22, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
        }

        .footer-disclaimer-icon {
          color: #FCD34D;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-disclaimer-text {
          font-size: 11px;
          color: #CBD5E1;
          line-height: var(--leading-normal);
          margin: 0;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          color: #94A3B8;
          gap: 1rem;
        }

        .copyright-text {
          margin: 0;
          line-height: var(--leading-normal);
        }

        .footer-legal-links {
          align-items: center;
          flex-wrap: wrap;
        }

        .legal-link-btn {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 11px;
          cursor: pointer;
          padding: 0;
          transition: color var(--transition-fast);
        }

        .legal-link-btn:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        .legal-dot {
          color: rgba(255, 255, 255, 0.2);
        }

        .back-to-top-btn {
          background: none;
          border: none;
          color: #6EE7B7;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 0;
        }

        .top-arrow {
          transform: rotate(-90deg);
        }

        /* Legal Modal */
        .legal-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(6, 34, 23, 0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .legal-modal-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          max-width: 540px;
          width: 100%;
          box-shadow: var(--shadow-xl);
          color: var(--color-text-main);
        }

        .modal-header {
          align-items: center;
        }

        .modal-shield {
          color: var(--color-primary-700);
        }

        .legal-modal-title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .modal-close-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
        }

        .modal-close-btn:hover {
          color: var(--color-primary-900);
        }

        .modal-notice-card {
          padding: 1.15rem;
          background-color: var(--color-placeholder-bg);
          border: 1px dashed var(--color-placeholder-border);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
        }

        .notice-title {
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .notice-desc {
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 4px 0 0 0;
        }

        .modal-actions {
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }
      `}</style>
    </footer>
  );
};
