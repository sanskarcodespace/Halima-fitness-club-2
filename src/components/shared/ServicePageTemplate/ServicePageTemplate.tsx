import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon, type IconName } from '../../primitives/Icon/Icon';
import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { type ProgramPageData } from '../../../data/programPages';
import { usePageSEO } from '../../../hooks/usePageSEO';

const BASE_DOMAIN = 'https://halimafitness.in';

interface ServicePageTemplateProps {
  data: ProgramPageData;
}

const HOW_IT_WORKS_STEPS = [
  { step: '01', title: 'Book a Consultation', desc: 'Start with a free initial consultation to discuss your goals and routine.' },
  { step: '02', title: 'Discuss Your Goals', desc: 'Coach Halima understands your current situation, preferences, and targets.' },
  { step: '03', title: 'Receive Personalized Guidance', desc: 'Get a tailored coaching approach designed around your lifestyle.' },
  { step: '04', title: 'Follow the Guidance', desc: 'Implement the nutrition, fitness, and lifestyle recommendations consistently.' },
  { step: '05', title: 'Regular Follow-up', desc: 'Scheduled check-ins to track progress and address challenges.' },
  { step: '06', title: 'Review & Progress', desc: 'Ongoing adjustments to keep your journey moving in the right direction.' }
];

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ data }) => {
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([0]);

  // Inject SEO meta tags
  usePageSEO({
    title: data.title,
    description: data.metaDescription,
    canonical: `${BASE_DOMAIN}${data.canonicalPath}`,
    ogTitle: `${data.title} | Halima Fitness Club`,
    ogDescription: data.metaDescription,
    ogImage: '/og-image.png',
    ogType: 'website'
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIds((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Inject JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_DOMAIN}${data.canonicalPath}`,
        url: `${BASE_DOMAIN}${data.canonicalPath}`,
        name: `${data.title} | Halima Fitness Club`,
        description: data.metaDescription,
        breadcrumb: { '@id': `${BASE_DOMAIN}${data.canonicalPath}#breadcrumb` },
        isPartOf: { '@id': `${BASE_DOMAIN}/#website` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_DOMAIN}${data.canonicalPath}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Programs', item: `${BASE_DOMAIN}/programs` },
          { '@type': 'ListItem', position: 3, name: data.title, item: `${BASE_DOMAIN}${data.canonicalPath}` }
        ]
      },
      {
        '@type': 'Service',
        name: data.title,
        description: data.metaDescription,
        provider: {
          '@type': 'Person',
          name: BUSINESS_CONFIG.coach.name,
          jobTitle: BUSINESS_CONFIG.coach.title,
          url: `${BASE_DOMAIN}/about`
        },
        areaServed: 'Online / Worldwide',
        serviceType: 'Online Fitness & Wellness Coaching',
        url: `${BASE_DOMAIN}${data.canonicalPath}`
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==============================
          SECTION 1 — PAGE HERO
          ============================== */}
      <SectionWrapper background="subtle" padding="hero" containerSize="wide" className="spt-hero">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="spt-breadcrumb">
          <ol className="spt-breadcrumb-list">
            <li><Link to="/" className="spt-breadcrumb-link">Home</Link></li>
            <li aria-hidden="true" className="spt-breadcrumb-sep">›</li>
            <li><Link to="/programs" className="spt-breadcrumb-link">Programs</Link></li>
            <li aria-hidden="true" className="spt-breadcrumb-sep">›</li>
            <li aria-current="page" className="spt-breadcrumb-current">{data.title}</li>
          </ol>
        </nav>

        <div className="spt-hero-grid">
          <div className="spt-hero-content">
            <Badge variant="primary" icon={<Icon name="sparkles" size={13} />} className="spt-hero-badge">
              {data.eyebrow}
            </Badge>
            <h1 className="spt-h1">{data.h1}</h1>
            <p className="spt-hero-subtitle">{data.heroSubtitle}</p>
            <div className="spt-hero-ctas">
              <Button
                variant="accent"
                size="lg"
                href="/consultation"
                rightIcon={<Icon name="arrow-right" size={18} />}
                id={`spt-cta-hero-${data.slug}`}
              >
                Book Free Consultation
              </Button>
              <WhatsAppButton
                messageKey="consultation"
                variant="outline"
                size="lg"
                label="WhatsApp Us"
              />
            </div>
            <div className="spt-hero-trust">
              <span><Icon name="shield" size={14} className="spt-trust-icon" /> {BUSINESS_CONFIG.coach.title}</span>
              <span className="spt-trust-dot" aria-hidden="true">•</span>
              <span><Icon name="check" size={14} className="spt-trust-icon" /> {BUSINESS_CONFIG.coach.experience} Experience</span>
              <span className="spt-trust-dot" aria-hidden="true">•</span>
              <span><Icon name="check" size={14} className="spt-trust-icon" /> 100% Online</span>
            </div>
          </div>
          <div className="spt-hero-visual" aria-hidden="true">
            <div className="spt-hero-image-wrap">
              <img
                src="/images/hero-lifestyle.jpg"
                alt={data.heroImageAlt}
                className="spt-hero-img"
                loading="eager"
                width="640"
                height="480"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 2 — INTRODUCTION
          ============================== */}
      <SectionWrapper background="main" padding="standard" containerSize="standard" className="spt-intro">
        <div className="spt-intro-grid">
          <div className="spt-intro-text">
            <h2 className="spt-section-h2">{data.introHeading}</h2>
            {data.introParagraphs.map((para, i) => (
              <p key={i} className="spt-para">{para}</p>
            ))}
          </div>
          <div className="spt-intro-aside">
            <div className="spt-coach-card">
              <div className="spt-coach-avatar">
                <img
                  src="/images/coach-halima.jpg"
                  alt={BUSINESS_CONFIG.coach.name}
                  className="spt-coach-img"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const sib = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (sib) sib.style.display = 'flex';
                  }}
                />
                <span className="spt-coach-avatar-fallback" aria-hidden="true">HS</span>
              </div>
              <div className="spt-coach-info">
                <span className="spt-coach-name">{BUSINESS_CONFIG.coach.name}</span>
                <span className="spt-coach-title">{BUSINESS_CONFIG.coach.title}</span>
                <span className="spt-coach-exp">{BUSINESS_CONFIG.coach.experience} Experience</span>
              </div>
              <p className="spt-coach-bio">{BUSINESS_CONFIG.positioning}</p>
              <Link to="/about" className="spt-coach-link">
                Learn more about Coach Halima <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 3 — WHO IS IT FOR
          ============================== */}
      <SectionWrapper background="surface" padding="standard" containerSize="standard" className="spt-audience">
        <h2 className="spt-section-h2 text-center">{data.audienceHeading}</h2>
        <div className="spt-audience-grid">
          {data.audience.map((item, i) => (
            <div key={i} className="spt-audience-card">
              <div className="spt-audience-dot" aria-hidden="true" />
              <div>
                <h3 className="spt-audience-label">{item.label}</h3>
                <p className="spt-audience-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 4 — WHAT'S INCLUDED
          ============================== */}
      <SectionWrapper background="main" padding="standard" containerSize="standard" className="spt-included">
        <h2 className="spt-section-h2 text-center">What's Included</h2>
        <div className="spt-included-grid">
          {data.included.map((item, i) => (
            <div key={i} className="spt-included-card">
              <div className="spt-included-icon-wrap">
                <Icon name={item.icon as IconName} size={22} />
              </div>
              <h3 className="spt-included-label">{item.label}</h3>
              <p className="spt-included-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 5 — HOW IT WORKS
          ============================== */}
      <SectionWrapper background="subtle" padding="standard" containerSize="standard" className="spt-hiw">
        <h2 className="spt-section-h2 text-center">How It Works</h2>
        <p className="spt-section-subtitle text-center">
          A clear, structured process from your first consultation to ongoing progress.
        </p>
        <div className="spt-hiw-steps">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.step} className="spt-hiw-step">
              <div className="spt-hiw-step-num" aria-hidden="true">{step.step}</div>
              <div className="spt-hiw-step-content">
                <h3 className="spt-hiw-step-title">{step.title}</h3>
                <p className="spt-hiw-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="spt-disclaimer">
          <Icon name="alert-circle" size={13} className="spt-disclaimer-icon" />
          {BUSINESS_CONFIG.disclaimers.contentDisclaimer}
        </p>
      </SectionWrapper>

      {/* ==============================
          SECTION 6 — ONLINE DELIVERY
          (only shown when relevant)
          ============================== */}
      {data.showOnlineDelivery && (
        <SectionWrapper background="surface" padding="standard" containerSize="standard" className="spt-delivery">
          <div className="spt-delivery-grid">
            <div>
              <h2 className="spt-section-h2">How Online Coaching & Classes Work</h2>
              <p className="spt-para">
                All sessions and coaching are conducted 100% online, accessible from the comfort of your home.
                No gym membership or commute required.
              </p>
              <ul className="spt-delivery-list">
                <li><Icon name="check" size={14} className="spt-check-icon" /> Live classes via <strong>Zoom</strong></li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> <strong>6 days a week</strong>, 60-minute structured sessions</li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> Morning batches: <strong>6:00–7:00 AM</strong> & <strong>7:00–8:00 AM</strong></li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> Evening batches: <strong>6:00–7:00 PM</strong> & <strong>7:00–8:00 PM</strong></li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> Limited batches: <strong>20–25 participants</strong> per group</li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> <strong>Trial class</strong> available on request</li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> <strong>Free initial consultation</strong> to get started</li>
                <li><Icon name="check" size={14} className="spt-check-icon" /> Recordings available if requested/required</li>
              </ul>
            </div>
            <div className="spt-delivery-highlight">
              <div className="spt-delivery-stat">
                <span className="spt-delivery-num">6</span>
                <span className="spt-delivery-label">Days / Week</span>
              </div>
              <div className="spt-delivery-stat">
                <span className="spt-delivery-num">60</span>
                <span className="spt-delivery-label">Minutes / Session</span>
              </div>
              <div className="spt-delivery-stat">
                <span className="spt-delivery-num">20–25</span>
                <span className="spt-delivery-label">Per Batch</span>
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ==============================
          SECTION 7 — COACH TRUST
          ============================== */}
      <SectionWrapper background="main" padding="standard" containerSize="standard" className="spt-coach-trust">
        <div className="spt-coach-trust-inner">
          <div className="spt-coach-trust-avatar">
            <img
              src="/images/coach-halima.jpg"
              alt={BUSINESS_CONFIG.coach.name}
              className="spt-ct-img"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const sib = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (sib) sib.style.display = 'flex';
              }}
            />
            <span className="spt-ct-fallback" aria-hidden="true">HS</span>
          </div>
          <div className="spt-coach-trust-content">
            <Badge variant="neutral" icon={<Icon name="award" size={13} />}>
              {BUSINESS_CONFIG.coach.title}
            </Badge>
            <h2 className="spt-section-h2 spt-ct-name">{BUSINESS_CONFIG.coach.name}</h2>
            <p className="spt-para">{BUSINESS_CONFIG.coach.bioSummary}</p>
            <div className="spt-ct-credentials">
              {BUSINESS_CONFIG.coach.credentials.map((cred, i) => (
                <div key={i} className="spt-ct-cred">
                  <Icon name="check" size={14} className="spt-check-icon" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="spt-coach-link">
              Learn more about Coach Halima <Icon name="arrow-right" size={13} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          MID-PAGE CTA
          ============================== */}
      <SectionWrapper background="reverse" padding="sm" containerSize="standard" className="spt-mid-cta">
        <div className="spt-mid-cta-inner">
          <div>
            <h3 className="spt-mid-cta-heading">Not sure this is the right program?</h3>
            <p className="spt-mid-cta-sub">
              Book a free consultation and discuss your goals directly with Coach Halima.
            </p>
          </div>
          <div className="spt-mid-cta-actions">
            <Button
              variant="accent"
              size="md"
              href="/consultation"
              rightIcon={<Icon name="arrow-right" size={16} />}
              id={`spt-cta-mid-${data.slug}`}
            >
              Book Free Consultation
            </Button>
            <WhatsAppButton
              messageKey="consultation"
              variant="outline"
              size="md"
              label="WhatsApp Us"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 8 — FAQ
          ============================== */}
      <SectionWrapper background="surface" padding="standard" containerSize="standard" className="spt-faq">
        <h2 className="spt-section-h2 text-center">Frequently Asked Questions</h2>
        <p className="spt-section-subtitle text-center">
          Common questions about {data.title.toLowerCase()} and how it works.
        </p>
        <div className="spt-faq-list">
          {data.faqs.map((faq, i) => {
            const isOpen = openFaqIds.includes(i);
            return (
              <div key={i} className={`spt-faq-item ${isOpen ? 'spt-faq-open' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  className="spt-faq-trigger"
                  id={`faq-q-${data.slug}-${i}`}
                  aria-controls={`faq-a-${data.slug}-${i}`}
                >
                  <span className="spt-faq-q">{faq.question}</span>
                  <div className={`spt-faq-chevron ${isOpen ? 'spt-faq-chevron-open' : ''}`}>
                    <Icon name="chevron-down" size={18} />
                  </div>
                </button>
                <div
                  id={`faq-a-${data.slug}-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${data.slug}-${i}`}
                  hidden={!isOpen}
                  className="spt-faq-answer"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 9 — RELATED PROGRAMS
          ============================== */}
      <SectionWrapper background="main" padding="standard" containerSize="standard" className="spt-related">
        <h2 className="spt-section-h2 text-center">Related Programs</h2>
        <div className="spt-related-grid">
          {data.relatedPrograms.map((prog, i) => (
            <Link key={i} to={prog.href} className="spt-related-card">
              <div className="spt-related-card-inner">
                <h3 className="spt-related-title">{prog.title}</h3>
                <p className="spt-related-desc">{prog.description}</p>
                <span className="spt-related-link">
                  Explore Program <Icon name="arrow-right" size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          SECTION 10 — FINAL CTA
          ============================== */}
      <SectionWrapper background="subtle" padding="standard" containerSize="wide" className="spt-final-cta">
        <div className="spt-final-cta-card">
          <div className="spt-final-cta-glow" aria-hidden="true" />
          <div className="spt-final-cta-content">
            <Badge variant="accent" icon={<Icon name="sparkles" size={13} />}>
              Free Initial Consultation • 100% Online
            </Badge>
            <h2 className="spt-final-cta-title">{data.ctaTitle}</h2>
            <p className="spt-final-cta-subtitle">{data.ctaSubtitle}</p>
            <div className="spt-final-cta-actions">
              <Button
                variant="accent"
                size="lg"
                href="/consultation"
                rightIcon={<Icon name="arrow-right" size={18} />}
                id={`spt-cta-final-${data.slug}`}
              >
                Book Free Consultation
              </Button>
              <WhatsAppButton
                messageKey="consultation"
                variant="outline"
                size="lg"
                label="WhatsApp Us"
                className="spt-final-wa-btn"
              />
            </div>
            <p className="spt-final-email">
              Prefer email?{' '}
              <a href={`mailto:${BUSINESS_CONFIG.email}`} className="spt-email-link">
                {BUSINESS_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          SCOPED STYLES
          ============================== */}
      <style>{`
        /* ── Breadcrumb ── */
        .spt-breadcrumb { margin-bottom: 1.25rem; }
        .spt-breadcrumb-list {
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem;
          list-style: none; margin: 0; padding: 0;
          font-size: var(--text-xs); color: var(--color-text-muted);
        }
        .spt-breadcrumb-link {
          color: var(--color-primary-600); font-weight: 600; text-decoration: none;
        }
        .spt-breadcrumb-link:hover { text-decoration: underline; }
        .spt-breadcrumb-sep { color: var(--color-text-muted); }
        .spt-breadcrumb-current { color: var(--color-text-secondary); font-weight: 500; }

        /* ── Hero ── */
        .spt-hero-grid {
          display: grid; grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem); align-items: center;
        }
        @media (min-width: 1024px) {
          .spt-hero-grid { grid-template-columns: 1.15fr 0.85fr; }
        }
        .spt-hero-content { display: flex; flex-direction: column; gap: 1.1rem; }
        .spt-hero-badge { display: inline-flex; }
        .spt-h1 {
          font-size: clamp(var(--text-3xl), 5vw, var(--text-4xl));
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.12;
          color: var(--color-text-main); margin: 0;
        }
        .spt-hero-subtitle {
          font-size: var(--text-base); color: var(--color-text-secondary);
          line-height: var(--leading-relaxed); max-width: 600px; margin: 0;
        }
        .spt-hero-ctas { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; }
        .spt-hero-trust {
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.75rem;
          font-size: var(--text-xs); color: var(--color-text-muted); font-weight: 600;
          padding-top: 0.75rem; border-top: 1px solid var(--color-border);
        }
        .spt-trust-icon { color: var(--color-primary-600); vertical-align: middle; margin-right: 2px; }
        .spt-trust-dot { color: var(--color-border); }
        .spt-hero-image-wrap {
          width: 100%; aspect-ratio: 4/3; border-radius: var(--radius-xl);
          overflow: hidden; box-shadow: var(--shadow-md);
          background: var(--color-bg-subtle);
        }
        .spt-hero-img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── Common Section Headings ── */
        .spt-section-h2 {
          font-family: var(--font-heading); font-size: clamp(var(--text-xl), 3vw, var(--text-2xl));
          font-weight: 800; color: var(--color-primary-900);
          letter-spacing: -0.02em; margin: 0 0 0.75rem 0;
        }
        .spt-section-subtitle {
          font-size: var(--text-sm); color: var(--color-text-secondary);
          max-width: 560px; margin: 0 auto 1.75rem; line-height: var(--leading-relaxed);
        }
        .spt-para {
          font-size: var(--text-sm); color: var(--color-text-secondary);
          line-height: var(--leading-relaxed); margin: 0 0 0.85rem 0;
        }
        .text-center { text-align: center; }

        /* ── Introduction ── */
        .spt-intro-grid {
          display: grid; grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem); align-items: start;
        }
        @media (min-width: 900px) {
          .spt-intro-grid { grid-template-columns: 1.2fr 0.8fr; }
        }
        .spt-coach-card {
          background: var(--color-bg-surface); border: 1px solid var(--color-border);
          border-radius: var(--radius-lg); padding: 1.25rem;
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .spt-coach-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          overflow: hidden; position: relative;
          background: var(--color-primary-700); flex-shrink: 0;
        }
        .spt-coach-img { width: 56px; height: 56px; object-fit: cover; display: block; border-radius: 50%; }
        .spt-coach-avatar-fallback {
          display: none; position: absolute; inset: 0;
          align-items: center; justify-content: center;
          font-size: var(--text-sm); font-weight: 800; color: #fff;
        }
        .spt-coach-info { display: flex; flex-direction: column; gap: 2px; }
        .spt-coach-name { font-size: var(--text-base); font-weight: 700; color: var(--color-primary-900); }
        .spt-coach-title { font-size: var(--text-xs); color: var(--color-primary-700); font-weight: 600; }
        .spt-coach-exp { font-size: var(--text-xs); color: var(--color-text-muted); }
        .spt-coach-bio { font-size: var(--text-xs); color: var(--color-text-secondary); line-height: var(--leading-relaxed); margin: 0; }
        .spt-coach-link {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: var(--text-xs); font-weight: 600; color: var(--color-primary-700);
          text-decoration: underline; text-underline-offset: 2px;
        }
        .spt-coach-link:hover { color: var(--color-primary-900); }

        /* ── Who It's For ── */
        .spt-audience-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 0.85rem; margin-top: 1.5rem;
        }
        @media (min-width: 600px) { .spt-audience-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .spt-audience-grid { grid-template-columns: repeat(3, 1fr); } }
        .spt-audience-card {
          display: flex; align-items: flex-start; gap: 0.75rem;
          background: #fff; border: 1px solid var(--color-border);
          border-radius: var(--radius-md); padding: 1rem;
        }
        .spt-audience-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--color-primary-600); flex-shrink: 0; margin-top: 4px;
        }
        .spt-audience-label {
          font-size: var(--text-sm); font-weight: 700;
          color: var(--color-primary-900); margin: 0 0 0.25rem 0;
        }
        .spt-audience-desc { font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0; line-height: var(--leading-relaxed); }

        /* ── What's Included ── */
        .spt-included-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 1rem; margin-top: 1.5rem;
        }
        @media (min-width: 600px) { .spt-included-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .spt-included-grid { grid-template-columns: repeat(3, 1fr); } }
        .spt-included-card {
          background: var(--color-bg-surface); border: 1px solid var(--color-border);
          border-radius: var(--radius-md); padding: 1.1rem; text-align: left;
          transition: box-shadow 0.2s;
        }
        .spt-included-card:hover { box-shadow: var(--shadow-sm); }
        .spt-included-icon-wrap {
          width: 40px; height: 40px; border-radius: var(--radius-md);
          background: var(--color-secondary-soft); color: var(--color-primary-700);
          display: flex; align-items: center; justify-content: center; margin-bottom: 0.65rem;
        }
        .spt-included-label {
          font-size: var(--text-sm); font-weight: 700;
          color: var(--color-primary-900); margin: 0 0 0.3rem 0;
        }
        .spt-included-desc { font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0; line-height: var(--leading-relaxed); }

        /* ── How It Works ── */
        .spt-hiw-steps {
          display: grid; grid-template-columns: 1fr;
          gap: 0.75rem; margin: 1.5rem 0;
        }
        @media (min-width: 600px) { .spt-hiw-steps { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .spt-hiw-steps { grid-template-columns: repeat(3, 1fr); } }
        .spt-hiw-step {
          display: flex; align-items: flex-start; gap: 0.85rem;
          background: #fff; border: 1px solid var(--color-border);
          border-radius: var(--radius-md); padding: 1rem;
        }
        .spt-hiw-step-num {
          font-family: var(--font-heading); font-size: var(--text-xl); font-weight: 800;
          color: var(--color-primary-600); background: var(--color-secondary-soft);
          border-radius: var(--radius-md); width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .spt-hiw-step-title { font-size: var(--text-sm); font-weight: 700; color: var(--color-primary-900); margin: 0 0 0.3rem 0; }
        .spt-hiw-step-desc { font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0; line-height: var(--leading-relaxed); }
        .spt-disclaimer {
          display: flex; align-items: flex-start; gap: 6px;
          font-size: 11px; color: var(--color-text-muted); font-style: italic;
          max-width: 720px; margin: 1rem auto 0; line-height: var(--leading-relaxed);
        }
        .spt-disclaimer-icon { color: var(--color-text-muted); margin-top: 1px; flex-shrink: 0; }

        /* ── Online Delivery ── */
        .spt-delivery-grid {
          display: grid; grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem); align-items: center;
        }
        @media (min-width: 900px) { .spt-delivery-grid { grid-template-columns: 1.2fr 0.8fr; } }
        .spt-delivery-list {
          list-style: none; margin: 1rem 0 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.55rem;
        }
        .spt-delivery-list li {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: var(--text-sm); color: var(--color-text-secondary);
        }
        .spt-check-icon { color: var(--color-primary-600); flex-shrink: 0; }
        .spt-delivery-highlight {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem; align-items: stretch;
        }
        @media (min-width: 900px) { .spt-delivery-highlight { grid-template-columns: 1fr; gap: 1rem; } }
        .spt-delivery-stat {
          background: var(--color-primary-900); border-radius: var(--radius-lg);
          padding: 1.25rem; display: flex; flex-direction: column; gap: 0.25rem;
          align-items: center; text-align: center;
        }
        .spt-delivery-num {
          font-family: var(--font-heading); font-size: var(--text-3xl);
          font-weight: 800; color: var(--color-accent-400); line-height: 1;
        }
        .spt-delivery-label { font-size: var(--text-xs); color: rgba(255,255,255,0.8); font-weight: 600; }

        /* ── Coach Trust ── */
        .spt-coach-trust-inner {
          display: grid; grid-template-columns: 1fr;
          gap: 1.5rem; align-items: start; max-width: 860px; margin: 0 auto;
        }
        @media (min-width: 760px) { .spt-coach-trust-inner { grid-template-columns: auto 1fr; gap: 2rem; align-items: center; } }
        .spt-coach-trust-avatar {
          width: 100px; height: 100px; border-radius: 50%;
          overflow: hidden; position: relative; background: var(--color-primary-700);
          border: 3px solid var(--color-secondary-soft);
        }
        .spt-ct-img { width: 100px; height: 100px; object-fit: cover; display: block; border-radius: 50%; }
        .spt-ct-fallback {
          display: none; position: absolute; inset: 0;
          align-items: center; justify-content: center;
          font-size: var(--text-xl); font-weight: 800; color: #fff;
        }
        .spt-coach-trust-content { display: flex; flex-direction: column; gap: 0.65rem; }
        .spt-ct-name { margin-top: 0.25rem; }
        .spt-ct-credentials { display: flex; flex-direction: column; gap: 0.4rem; }
        .spt-ct-cred {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: var(--text-xs); color: var(--color-text-secondary); font-weight: 600;
        }

        /* ── Mid CTA ── */
        .spt-mid-cta-inner {
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: space-between; gap: 1.25rem;
          background: linear-gradient(135deg, #062217 0%, #0D4A38 100%);
          border-radius: var(--radius-xl); padding: clamp(1.25rem, 2.5vw, 1.75rem);
        }
        .spt-mid-cta-heading {
          font-family: var(--font-heading); font-size: var(--text-base);
          font-weight: 700; color: #fff; margin: 0;
        }
        .spt-mid-cta-sub { font-size: var(--text-xs); color: rgba(255,255,255,0.8); margin: 0.3rem 0 0; }
        .spt-mid-cta-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

        /* ── FAQ ── */
        .spt-faq-list { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1.5rem; max-width: 840px; margin-left: auto; margin-right: auto; }
        .spt-faq-item {
          background: #fff; border: 1px solid var(--color-border);
          border-radius: var(--radius-md); overflow: hidden;
          transition: border-color 0.2s;
        }
        .spt-faq-open { border-color: var(--color-primary-600); }
        .spt-faq-trigger {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          gap: 1rem; padding: 1rem 1.15rem; background: none; border: none;
          cursor: pointer; text-align: left;
        }
        .spt-faq-trigger:focus-visible { outline: 2px solid var(--color-primary-600); outline-offset: -2px; }
        .spt-faq-q { font-size: var(--text-sm); font-weight: 700; color: var(--color-primary-900); line-height: var(--leading-snug); }
        .spt-faq-chevron { color: var(--color-primary-700); transition: transform 0.25s; display: flex; align-items: center; flex-shrink: 0; }
        .spt-faq-chevron-open { transform: rotate(180deg); }
        .spt-faq-answer {
          padding: 0.85rem 1.15rem 1rem 1.15rem; border-top: 1px solid var(--color-border-subtle);
          background: var(--color-bg-subtle);
        }
        .spt-faq-answer p { font-size: var(--text-xs); color: var(--color-text-secondary); line-height: var(--leading-relaxed); margin: 0; }

        /* ── Related Programs ── */
        .spt-related-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 1rem; margin-top: 1.5rem;
        }
        @media (min-width: 600px) { .spt-related-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .spt-related-grid { grid-template-columns: repeat(4, 1fr); } }
        .spt-related-card {
          display: block; text-decoration: none;
          background: var(--color-bg-surface); border: 1px solid var(--color-border);
          border-radius: var(--radius-md); padding: 1.1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .spt-related-card:hover { border-color: var(--color-primary-600); box-shadow: var(--shadow-sm); }
        .spt-related-card-inner { display: flex; flex-direction: column; gap: 0.4rem; height: 100%; }
        .spt-related-title { font-size: var(--text-sm); font-weight: 700; color: var(--color-primary-900); margin: 0; }
        .spt-related-desc { font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0; line-height: var(--leading-relaxed); flex: 1; }
        .spt-related-link {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: var(--text-xs); font-weight: 700;
          color: var(--color-primary-700); margin-top: 0.5rem;
        }

        /* ── Final CTA ── */
        .spt-final-cta-card {
          position: relative; overflow: hidden;
          background: linear-gradient(145deg, #062217 0%, #0D4A38 50%, #083324 100%);
          border: 1px solid rgba(212,175,55,0.25); border-radius: var(--radius-xl);
          padding: clamp(2rem, 4vw, 3rem);
          box-shadow: 0 20px 40px -15px rgba(6,34,23,0.4);
          text-align: center;
        }
        .spt-final-cta-glow {
          position: absolute; top: -30%; right: -10%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(235,107,54,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .spt-final-cta-content {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
          max-width: 700px; margin: 0 auto;
        }
        .spt-final-cta-title {
          font-family: var(--font-heading); font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
          font-weight: 800; color: #fff; margin: 0; line-height: var(--leading-tight);
        }
        .spt-final-cta-subtitle {
          font-size: var(--text-sm); color: rgba(255,255,255,0.85);
          line-height: var(--leading-relaxed); margin: 0;
        }
        .spt-final-cta-actions { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
        .spt-final-wa-btn {
          color: #fff !important; border-color: rgba(255,255,255,0.35) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        .spt-final-wa-btn:hover { background: rgba(255,255,255,0.18) !important; border-color: #fff !important; }
        .spt-final-email { font-size: var(--text-xs); color: rgba(255,255,255,0.7); margin: 0; }
        .spt-email-link { color: var(--color-accent-400); font-weight: 600; text-decoration: underline; }
        .spt-email-link:hover { color: #fff; }
      `}</style>
    </>
  );
};
