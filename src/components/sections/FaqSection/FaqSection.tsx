import React, { useState, useId } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Card } from '../../primitives/Card/Card';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export interface FaqItem {
  id: string;
  question: string;
  category: 'classes' | 'programs' | 'consultation' | 'general';
  categoryLabel: string;
  answer: React.ReactNode;
  isPlaceholder?: boolean;
}

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const baseId = useId();

  const faqData: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How do the online classes work?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Classes are conducted live online via <strong>Zoom</strong> in structured 60-minute group sessions. Coach Halima Sadiya provides real-time movement guidance, posture pacing, and routine structure so you can train effectively from the comfort of your home.
        </p>
      )
    },
    {
      id: 'faq-2',
      question: 'Are the classes conducted on Zoom?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Yes, all live group fitness classes and interactive sessions are hosted on <strong>Zoom</strong>. Joining links are shared directly with enrolled participants prior to scheduled batch times.
        </p>
      )
    },
    {
      id: 'faq-3',
      question: 'What are the class timings?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <div className="stack stack-xs">
          <p>We offer four daily 60-minute slots grouped across morning and evening schedules:</p>
          <ul className="faq-timing-list">
            <li><strong>Morning Batches:</strong> 6:00 AM – 7:00 AM &amp; 7:00 AM – 8:00 AM</li>
            <li><strong>Evening Batches:</strong> 6:00 PM – 7:00 PM &amp; 7:00 PM – 8:00 PM</li>
          </ul>
        </div>
      )
    },
    {
      id: 'faq-4',
      question: 'How long is each class?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Each online class is exactly <strong>60 minutes</strong> in duration, designed to fit cleanly into morning or evening routines with proper warm-up, active coaching, and cooldown stretches.
        </p>
      )
    },
    {
      id: 'faq-5',
      question: 'How many days a week are classes conducted?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Live classes are conducted <strong>6 Days a Week</strong>, supporting consistent daily activity and habit formation. (Exact batch schedule is confirmed upon consultation).
        </p>
      )
    },
    {
      id: 'faq-6',
      question: 'Is there a trial class available?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Yes! A <strong>trial class is available on request</strong>. You can experience the live Zoom coaching format and group energy before committing to a regular batch.
        </p>
      )
    },
    {
      id: 'faq-7',
      question: 'Is there a free consultation?',
      category: 'consultation',
      categoryLabel: 'Consultation',
      answer: (
        <p>
          Yes, Coach Halima provides a <strong>Free Initial Consultation</strong>. It gives you the opportunity to discuss your wellness goals, daily schedule, and dietary preferences before selecting the most relevant coaching track.
        </p>
      )
    },
    {
      id: 'faq-8',
      question: 'Are class recordings available?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Yes, session recordings are provided <strong>if requested or required</strong>, ensuring you stay on track even if your schedule shifts unexpectedly.
        </p>
      )
    },
    {
      id: 'faq-9',
      question: 'How many participants are there in one batch?',
      category: 'classes',
      categoryLabel: 'Online Classes',
      answer: (
        <p>
          Batches are capped at a <strong>limited size of 20–25 participants</strong>. This intentional limit ensures a supportive community atmosphere while allowing Coach Halima to maintain visual oversight and form feedback.
        </p>
      )
    },
    {
      id: 'faq-10',
      question: 'What programs and services are available?',
      category: 'programs',
      categoryLabel: 'Programs',
      answer: (
        <p>
          Halima Fitness Club offers comprehensive 100% online coaching tracks including: <strong>Weight Loss Coaching, Weight Gain Support, Weight Management, Nutrition Guidance, Online Fitness Coaching, Lifestyle Coaching, Live Online Classes, 21 Days Weight Loss Challenge</strong>, and <strong>Personal Health &amp; Wellness Coaching</strong>.
        </p>
      )
    },
    {
      id: 'faq-11',
      question: 'How can I book a free consultation?',
      category: 'consultation',
      categoryLabel: 'Consultation',
      answer: (
        <p>
          You can request your free consultation directly through the <a href={`#${SECTION_IDS.CONTACT}`} className="faq-inline-link">Consultation Form on this page</a> or email Coach Halima at <a href={`mailto:${BUSINESS_CONFIG.email}`} className="faq-inline-link">{BUSINESS_CONFIG.email}</a>.
        </p>
      )
    },
    {
      id: 'faq-12',
      question: 'How can I contact Coach Halima directly?',
      category: 'general',
      categoryLabel: 'Contact',
      answer: (
        <p>
          You can reach Coach Halima via email at <a href={`mailto:${BUSINESS_CONFIG.email}`} className="faq-inline-link">{BUSINESS_CONFIG.email}</a> or connect on Instagram at <a href={BUSINESS_CONFIG.instagram.url} target="_blank" rel="noopener noreferrer" className="faq-inline-link">{BUSINESS_CONFIG.instagram.handle}</a>. Direct phone and WhatsApp lines are currently in pending verification.
        </p>
      )
    },
    {
      id: 'faq-13',
      question: 'What payment options are available?',
      category: 'general',
      categoryLabel: 'Policies & Pricing',
      isPlaceholder: true,
      answer: (
        <div className="stack stack-xs">
          <div className="cluster cluster-xs">
            <span className="faq-placeholder-tag">Policy Notice:</span>
            <PlaceholderNotice label="[CONTENT REQUIRED — PLEASE CONFIRM]" />
          </div>
          <p className="faq-placeholder-text">
            Specific payment gateways, fee structures, and billing schedules are confirmed directly with Coach Halima during your free initial consultation. We do not display unverified pricing online.
          </p>
        </div>
      )
    },
    {
      id: 'faq-14',
      question: 'Are there any specific program requirements?',
      category: 'general',
      categoryLabel: 'Requirements',
      isPlaceholder: true,
      answer: (
        <div className="stack stack-xs">
          <div className="cluster cluster-xs">
            <span className="faq-placeholder-tag">Requirements Notice:</span>
            <PlaceholderNotice label="[CONTENT REQUIRED — PLEASE CONFIRM]" />
          </div>
          <p className="faq-placeholder-text">
            All programs are 100% online. Baseline participation requires a smartphone or computer with the Zoom application, a stable internet connection, and comfortable workout attire. Any medical questions can be reviewed during your consultation.
          </p>
        </div>
      )
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'classes', label: 'Live Classes & Schedule' },
    { key: 'programs', label: 'Programs & Coaching' },
    { key: 'consultation', label: 'Consultation & Booking' },
    { key: 'general', label: 'General & Requirements' }
  ];

  // Filter items based on activeCategory and searchQuery
  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  return (
    <SectionWrapper
      id={SECTION_IDS.FAQ}
      background="surface"
      padding="standard"
      containerSize="standard"
      className="faq-section"
    >
      <RevealWrapper>
        <SectionHeading
          eyebrow="Got Questions?"
          eyebrowVariant="primary"
          title={
            <>
              Frequently Asked <span className="text-primary-green">Questions</span>
            </>
          }
          subtitle="Clear, honest answers about online coaching, live Zoom batches, schedules, and consultation steps."
          align="center"
        />
      </RevealWrapper>

      <div className="faq-container stack stack-md">
        {/* Controls Bar: Categories, Search, & Expand Actions */}
        <div className="faq-controls stack stack-sm">
          {/* Category Tabs */}
          <div className="faq-category-pills" role="tablist" aria-label="FAQ Categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`faq-tab-btn ${activeCategory === cat.key ? 'faq-tab-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Expand Actions Row */}
          <div className="faq-search-row split">
            <div className="faq-search-box">
              <Icon name="search" size={16} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQ questions..."
                className="faq-search-input"
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  aria-label="Clear search"
                >
                  <Icon name="x" size={14} />
                </button>
              )}
            </div>

            <div className="faq-action-links cluster cluster-xs">
              <button type="button" onClick={handleExpandAll} className="faq-text-action">
                Expand All
              </button>
              <span className="faq-divider">•</span>
              <button type="button" onClick={handleCollapseAll} className="faq-text-action">
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="faq-accordion-list stack stack-xs">
          {filteredFaqs.length === 0 ? (
            <Card variant="surface" className="faq-empty-card text-center stack stack-xs">
              <p className="empty-text">No questions match your search <strong>"{searchQuery}"</strong>.</p>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery('')}>
                Reset Search Filter
              </Button>
            </Card>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              const headerId = `${baseId}-header-${faq.id}`;
              const panelId = `${baseId}-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`faq-item-card ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(faq.id)}
                    className="faq-question-button split"
                  >
                    <div className="cluster cluster-sm question-text-cluster">
                      <span className="faq-q-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="faq-question-title">{faq.question}</span>
                    </div>

                    <div className="cluster cluster-xs faq-btn-meta">
                      {faq.isPlaceholder && (
                        <span className="faq-verify-pill" title="Policy placeholder pending verification">
                          Notice
                        </span>
                      )}
                      <div className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`} aria-hidden="true">
                        <Icon name="chevron-down" size={18} />
                      </div>
                    </div>
                  </button>

                  {/* Accessible Content Panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    hidden={!isOpen}
                    className="faq-answer-panel"
                  >
                    <div className="faq-answer-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions? Banner */}
        <Card variant="surface" className="faq-support-box split">
          <div className="cluster cluster-md">
            <div className="faq-support-icon-ring" aria-hidden="true">
              <Icon name="help" size={24} />
            </div>
            <div className="stack stack-none">
              <h4 className="support-title">Still have questions about online coaching?</h4>
              <p className="support-subtitle">
                Coach Halima is happy to guide you on the best program for your lifestyle.
              </p>
            </div>
          </div>

          <div className="cluster cluster-sm">
            <Button
              variant="accent"
              size="md"
              href={`#${SECTION_IDS.CONTACT}`}
              rightIcon={<Icon name="arrow-right" size={16} />}
            >
              {CTA_CONFIG.primary.label}
            </Button>
          </div>
        </Card>
      </div>

      {/* FAQ Section Scoped Styles */}
      <style>{`
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .faq-tab-btn {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 600;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #FFFFFF;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .faq-tab-btn:hover {
          border-color: var(--color-primary-600);
          color: var(--color-primary-900);
        }

        .faq-tab-active {
          background-color: var(--color-primary-900) !important;
          color: #FFFFFF !important;
          border-color: var(--color-primary-900) !important;
        }

        .faq-search-row {
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .faq-search-box {
          position: relative;
          flex: 1;
          max-width: 420px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          pointer-events: none;
        }

        .faq-search-input {
          width: 100%;
          font-family: var(--font-body);
          font-size: var(--text-xs);
          padding: 0.55rem 2rem 0.55rem 2.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #FFFFFF;
          color: var(--color-text-main);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-search-input:focus {
          outline: none;
          border-color: var(--color-primary-600);
          box-shadow: 0 0 0 3px var(--color-primary-100);
        }

        .search-clear-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .faq-action-links {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
        }

        .faq-text-action {
          background: none;
          border: none;
          color: var(--color-primary-700);
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
        }

        .faq-text-action:hover {
          text-decoration: underline;
        }

        .faq-divider {
          color: var(--color-border);
        }

        /* Accordion Cards */
        .faq-accordion-list {
          gap: 0.65rem;
        }

        .faq-item-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-item-card:hover {
          border-color: var(--color-secondary-border);
        }

        .faq-item-open {
          border-color: var(--color-primary-600);
          box-shadow: var(--shadow-xs);
        }

        .faq-question-button {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 1.15rem 1.25rem;
          cursor: pointer;
          align-items: center;
          gap: 1rem;
          color: inherit;
        }

        .faq-question-button:focus-visible {
          outline: 2px solid var(--color-primary-600);
          outline-offset: -2px;
        }

        .question-text-cluster {
          align-items: center;
          flex: 1;
        }

        .faq-q-number {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          color: var(--color-primary-600);
          background-color: var(--color-secondary-soft);
          padding: 2px 7px;
          border-radius: var(--radius-full);
        }

        .faq-question-title {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: var(--leading-snug);
        }

        .faq-btn-meta {
          align-items: center;
          flex-shrink: 0;
        }

        .faq-verify-pill {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          background-color: #FEF3C7;
          color: #92400E;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .faq-chevron {
          color: var(--color-primary-700);
          transition: transform var(--transition-normal);
          display: flex;
          align-items: center;
        }

        .chevron-rotated {
          transform: rotate(180deg);
        }

        .faq-answer-panel {
          border-top: 1px solid var(--color-border-subtle);
          background-color: var(--color-bg-subtle);
        }

        .faq-answer-body {
          padding: 1.15rem 1.25rem 1.25rem 2.85rem;
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
        }

        .faq-answer-body p {
          margin: 0;
        }

        .faq-inline-link {
          color: var(--color-primary-700);
          font-weight: 600;
          text-decoration: underline;
        }

        .faq-timing-list {
          margin: 0.25rem 0 0 0;
          padding-left: 1.25rem;
          line-height: var(--leading-relaxed);
        }

        .faq-placeholder-tag {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .faq-placeholder-text {
          font-size: 11px;
          color: var(--color-text-muted);
          font-style: italic;
          margin: 0;
        }

        .faq-empty-card {
          padding: 2rem;
          align-items: center;
        }

        .empty-text {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Support Box */
        .faq-support-box {
          padding: 1.5rem 1.75rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          align-items: center;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .faq-support-icon-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-secondary-soft);
          color: var(--color-primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .support-title {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-primary-900);
          margin: 0;
        }

        .support-subtitle {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          margin: 2px 0 0 0;
        }
      `}</style>
    </SectionWrapper>
  );
};
