import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../primitives/Icon/Icon';
import {
  WHATSAPP_MESSAGES,
  type WhatsAppMessageKey,
  getWhatsAppUrl,
  isWhatsAppConfigured
} from '../../../utils/whatsapp.util';
import { SECTION_IDS } from '../../../config/navigation.config';
import { BUSINESS_CONFIG } from '../../../config/business.config';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelectMessage = (key: WhatsAppMessageKey) => {
    const messageText = WHATSAPP_MESSAGES[key];
    const url = getWhatsAppUrl(messageText);

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
    } else {
      // Graceful fallback when WhatsApp number is unconfigured
      setIsOpen(false);
      window.dispatchEvent(
        new CustomEvent('halima:prefill-contact', {
          detail: { message: messageText }
        })
      );

      const contactElem = document.getElementById(SECTION_IDS.CONTACT);
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const textarea = contactElem.querySelector('textarea');
          if (textarea) {
            textarea.value = messageText;
            textarea.focus();
          }
        }, 500);
      }
    }
  };

  const quickOptions: Array<{ key: WhatsAppMessageKey; label: string; icon: 'user' | 'fitness' | 'sparkles' }> = [
    {
      key: 'consultation',
      label: 'Book Free Consultation',
      icon: 'user'
    },
    {
      key: 'weightLoss',
      label: 'Weight Loss Coaching',
      icon: 'sparkles'
    },
    {
      key: 'classes',
      label: 'Join Online Fitness Classes',
      icon: 'fitness'
    }
  ];

  return (
    <div
      ref={widgetRef}
      className="floating-whatsapp-container"
      aria-label="WhatsApp Quick Inquiry"
    >
      {/* Quick Message Options Popover */}
      {isOpen && (
        <div
          className="whatsapp-popover stack stack-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Start WhatsApp conversation with Coach Halima"
        >
          {/* Popover Header */}
          <div className="popover-header split">
            <div className="stack stack-none">
              <div className="cluster cluster-xs">
                <span className="coach-name">{BUSINESS_CONFIG.coach.name}</span>
                <span className="live-dot" aria-hidden="true" />
              </div>
              <span className="coach-status">{BUSINESS_CONFIG.availability} • Online Coaching</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="popover-close-btn"
              aria-label="Close WhatsApp options"
            >
              ✕
            </button>
          </div>

          {/* Intro Text */}
          <p className="popover-intro">
            Select a topic to start a direct inquiry with Coach Halima:
          </p>

          {/* Quick Option Buttons */}
          <div className="popover-options stack stack-xs">
            {quickOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleSelectMessage(opt.key)}
                className="option-btn split"
              >
                <div className="option-label-group">
                  <Icon name={opt.icon} size={14} className="option-icon" />
                  <span>{opt.label}</span>
                </div>
                <Icon name="arrow-right" size={14} className="option-arrow" />
              </button>
            ))}
          </div>

          {/* Fallback Notice if Unconfigured */}
          {!isWhatsAppConfigured() && (
            <div className="whatsapp-fallback-pill">
              <Icon name="shield" size={12} />
              <span>Direct WhatsApp number in configuration. Clicking pre-fills inquiry form.</span>
            </div>
          )}
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="floating-trigger-btn"
        aria-expanded={isOpen}
        aria-label="Chat with Coach Halima on WhatsApp"
      >
        <div className="floating-icon-wrapper">
          <Icon name="message" size={24} />
          <span className="floating-pulse" aria-hidden="true" />
        </div>
        <span className="floating-btn-label">WhatsApp Us</span>
      </button>

      {/* Floating Widget Scoped Styles */}
      <style>{`
        .floating-whatsapp-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: var(--z-modal, 999);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .floating-trigger-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #FFFFFF;
          border: 2px solid #FFFFFF;
          border-radius: var(--radius-full);
          padding: 10px 18px 10px 14px;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.5), 0 4px 10px rgba(0,0,0,0.1);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
        }

        .floating-trigger-btn:hover {
          background: #20BA5A;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 28px -5px rgba(37, 211, 102, 0.6);
        }

        .floating-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #FFFFFF;
          box-shadow: 0 0 8px #FFFFFF;
        }

        .floating-btn-label {
          letter-spacing: 0.01em;
        }

        @media (max-width: 480px) {
          .floating-btn-label {
            display: none;
          }
          .floating-trigger-btn {
            padding: 12px;
            border-radius: 50%;
          }
        }

        .whatsapp-popover {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          width: 320px;
          margin-bottom: 12px;
          box-shadow: var(--shadow-xl);
          animation: popoverFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popoverFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popover-header {
          align-items: center;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .coach-name {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 6px #22C55E;
          display: inline-block;
        }

        .coach-status {
          font-size: 11px;
          color: var(--color-primary-700);
        }

        .popover-close-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .popover-close-btn:hover {
          color: var(--color-text-main);
          background-color: var(--color-bg-subtle);
        }

        .popover-intro {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .popover-options {
          gap: 0.5rem;
        }

        .option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          color: var(--color-primary-900);
          font-size: var(--text-xs);
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .option-btn:hover {
          background-color: var(--color-secondary-soft);
          border-color: var(--color-secondary-border);
          color: var(--color-primary-900);
        }

        .option-label-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .option-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
        }

        .option-arrow {
          color: var(--color-text-muted);
        }

        .whatsapp-fallback-pill {
          display: flex;
          align-items: flex-start;
          gap: 5px;
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          background-color: #FEF3C7;
          border: 1px solid #FDE68A;
          color: #92400E;
          font-size: 10px;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};
