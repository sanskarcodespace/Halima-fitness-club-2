import React, { useState } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
import { PlaceholderNotice } from '../../primitives/PlaceholderNotice/PlaceholderNotice';
import { BUSINESS_CONFIG } from '../../../config/business.config';
import { SECTION_IDS, CTA_CONFIG } from '../../../config/navigation.config';
import { RevealWrapper } from '../../shared/RevealWrapper/RevealWrapper';

export interface ArticleItem {
  id: string;
  title: string;
  imageSrc: string;
  category: 'nutrition' | 'fitness' | 'lifestyle' | 'coaching';
  categoryLabel: string;
  datePlaceholder: string;
  readTime: string;
  excerpt: string;
  author: string;
  isFeatured?: boolean;
}

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Topics' },
    { key: 'nutrition', label: 'Nutrition Guidance' },
    { key: 'lifestyle', label: 'Healthy Lifestyle' },
    { key: 'fitness', label: 'Online Fitness' },
    { key: 'coaching', label: 'Wellness Habits' }
  ];

  const featuredArticle: ArticleItem = {
    id: 'art-feat-1',
    title: 'Building Sustainable Morning Habits for Daily Energy & Consistency',
    imageSrc: '/images/blog-featured.jpg',
    category: 'lifestyle',
    categoryLabel: 'Healthy Lifestyle',
    datePlaceholder: '[PUBLICATION DATE PENDING]',
    readTime: '4 min read',
    excerpt:
      'Discover how structured hydration, gentle morning movement, and consistent pacing establish natural momentum for daily physical vitality without extreme restriction.',
    author: `${BUSINESS_CONFIG.coach.name} (${BUSINESS_CONFIG.coach.title})`,
    isFeatured: true
  };

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'Mindful Plate Structuring: Balancing Whole Foods at Home',
      imageSrc: '/images/blog-nutrition.jpg',
      category: 'nutrition',
      categoryLabel: 'Nutrition Guidance',
      datePlaceholder: '[PUBLICATION DATE PENDING]',
      readTime: '5 min read',
      excerpt:
        'A practical guide to portion balance, vegetable variety, and sustainable protein integration tailored to everyday home cooking.',
      author: BUSINESS_CONFIG.coach.name
    },
    {
      id: 'art-2',
      title: 'Making the Most of Your 60-Minute Live Online Fitness Sessions',
      imageSrc: '/images/blog-fitness.jpg',
      category: 'fitness',
      categoryLabel: 'Online Fitness',
      datePlaceholder: '[PUBLICATION DATE PENDING]',
      readTime: '3 min read',
      excerpt:
        'Essential tips on screen positioning, warm-up mindset, and posture awareness for live Zoom group coaching environments.',
      author: BUSINESS_CONFIG.coach.name
    },
    {
      id: 'art-3',
      title: 'The 21-Day Mindset: Overcoming Common Routine Plateaus',
      imageSrc: '/images/blog-mindset.jpg',
      category: 'coaching',
      categoryLabel: 'Wellness Habits',
      datePlaceholder: '[PUBLICATION DATE PENDING]',
      readTime: '4 min read',
      excerpt:
        'Understanding habit loops, managing daily motivation fluctuations, and maintaining momentum through accountability.',
      author: BUSINESS_CONFIG.coach.name
    }
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <SectionWrapper
      id="tips"
      background="subtle"
      padding="standard"
      containerSize="wide"
      className="blog-section"
    >
      <SectionHeading
        eyebrow="Educational Insights"
        eyebrowVariant="primary"
        title={
          <>
            Health &amp; Wellness <span className="text-primary-green">Tips</span>
          </>
        }
        subtitle="Practical lifestyle, nutrition, and fitness coaching guidance written by Coach Halima Sadiya to support your daily wellness journey."
        align="center"
      />

      <div className="blog-container stack stack-lg">
        {/* Category Tabs */}
        <div className="blog-category-nav" role="tablist" aria-label="Article categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={selectedCategory === cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`blog-tab-btn ${selectedCategory === cat.key ? 'tab-btn-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Article Spotlight Card (Visible when 'all' or 'lifestyle' is active) */}
        {(selectedCategory === 'all' || selectedCategory === 'lifestyle') && (
          <article className="featured-article-card split">
            <div className="featured-media-box">
              <div className="featured-img-wrapper">
                <img
                  src={featuredArticle.imageSrc}
                  alt={featuredArticle.title}
                  className="featured-img"
                  loading="lazy"
                  width="1280"
                  height="720"
                  decoding="async"
                />
              </div>
              <div className="featured-overlay-badge">
                <Badge variant="accent">Featured Spotlight</Badge>
              </div>
            </div>

            <div className="featured-content-col stack stack-sm">
              <div className="split featured-meta-row">
                <Badge variant="primary">{featuredArticle.categoryLabel}</Badge>
                <div className="cluster cluster-xs">
                  <span className="meta-time-text">{featuredArticle.readTime}</span>
                  <span className="meta-dot">•</span>
                  <span className="meta-date-placeholder">{featuredArticle.datePlaceholder}</span>
                </div>
              </div>

              <h3 className="featured-title">{featuredArticle.title}</h3>
              <p className="featured-excerpt">{featuredArticle.excerpt}</p>

              <div className="featured-author-row split">
                <div className="cluster cluster-xs">
                  <Icon name="award" size={16} className="author-icon" />
                  <span className="author-name">By {featuredArticle.author}</span>
                </div>
                <PlaceholderNotice label="[ARTICLE CONTENT REQUIRED]" />
              </div>

              <div className="featured-action-row">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setActiveArticle(featuredArticle)}
                  rightIcon={<Icon name="arrow-right" size={16} />}
                >
                  Preview Topic Overview
                </Button>
              </div>
            </div>
          </article>
        )}

        {/* 3-Column Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map((art, index) => (
            <RevealWrapper
              key={art.id}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              as="article"
              className="article-card stack stack-sm"
            >
              {/* Media Preview Box */}
              <div className="article-media-box">
                <div className="article-img-wrapper">
                  <img
                    src={art.imageSrc}
                    alt={art.title}
                    className="article-img"
                    loading="lazy"
                    width="640"
                    height="360"
                    decoding="async"
                  />
                </div>
                <div className="article-tag-overlay">
                  <Badge variant="primary">{art.categoryLabel}</Badge>
                </div>
              </div>

              {/* Meta Info */}
              <div className="article-meta-row split">
                <span className="meta-read-time">{art.readTime}</span>
                <span className="meta-date-placeholder">{art.datePlaceholder}</span>
              </div>

              {/* Title & Excerpt */}
              <div className="stack stack-none">
                <h4 className="article-card-title">{art.title}</h4>
                <p className="article-card-excerpt">{art.excerpt}</p>
              </div>

              {/* Footer with Author & Content Notice */}
              <div className="article-card-footer stack stack-xs">
                <div className="split">
                  <span className="article-author-text">By {art.author}</span>
                  <PlaceholderNotice label="[ARTICLE CONTENT REQUIRED]" />
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => setActiveArticle(art)}
                  rightIcon={<Icon name="arrow-right" size={14} />}
                  className="article-read-btn"
                >
                  View Topic Details
                </Button>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Non-Medical Educational Disclaimer Reassurance */}
        <div className="blog-disclaimer-box split">
          <div className="cluster cluster-sm">
            <Icon name="shield" size={18} className="disclaimer-shield-icon" />
            <p className="disclaimer-text">
              <strong>Educational Content Disclaimer: </strong> All insights shared by Halima Fitness Club are designed for general wellness education, habit building, and lifestyle motivation. They do not constitute clinical or medical advice.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            href={`#${SECTION_IDS.CONTACT}`}
            className="disclaimer-consult-btn"
          >
            Ask a Question
          </Button>
        </div>
      </div>

      {/* Article Detail Preview Modal / Drawer */}
      {activeArticle && (
        <div
          className="article-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="article-modal-card stack stack-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="split modal-header">
              <Badge variant="primary">{activeArticle.categoryLabel}</Badge>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="modal-close-btn"
                aria-label="Close article preview"
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            <div className="stack stack-xs">
              <h3 id="modal-article-title" className="modal-title">{activeArticle.title}</h3>
              <div className="cluster cluster-xs modal-meta">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span className="meta-date-placeholder">{activeArticle.datePlaceholder}</span>
              </div>
            </div>

            <div className="modal-body stack stack-sm">
              <p className="modal-lead">{activeArticle.excerpt}</p>

              <div className="modal-placeholder-notice-box stack stack-xs">
                <div className="split">
                  <strong className="modal-notice-title">Editorial Publishing Status:</strong>
                  <PlaceholderNotice label="[ARTICLE CONTENT REQUIRED]" />
                </div>
                <p className="modal-notice-desc">
                  The complete article copy for this topic is currently in preparation. Once finalized, the full editorial body will be rendered here with zero placeholder copy.
                </p>
              </div>
            </div>

            <div className="split modal-footer">
              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveArticle(null)}
              >
                Close Preview
              </Button>

              <Button
                variant="accent"
                size="md"
                href={`#${SECTION_IDS.CONTACT}`}
                onClick={() => setActiveArticle(null)}
                rightIcon={<Icon name="arrow-right" size={16} />}
              >
                {CTA_CONFIG.primary.label}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Section Scoped Styles */}
      <style>{`
        .blog-container {
          max-width: 1140px;
          margin: 0 auto;
        }

        .blog-category-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .blog-tab-btn {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 600;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #FFFFFF;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .blog-tab-btn:hover {
          border-color: var(--color-primary-600);
          color: var(--color-primary-900);
        }

        .tab-btn-active {
          background-color: var(--color-primary-900) !important;
          color: #FFFFFF !important;
          border-color: var(--color-primary-900) !important;
        }

        /* Featured Article Card */
        .featured-article-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 1.25rem;
        }

        @media (min-width: 860px) {
          .featured-article-card {
            grid-template-columns: 1.15fr 1fr;
            padding: 1.75rem;
            align-items: center;
          }
        }

        .featured-media-box {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .featured-img-wrapper {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }
        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.35s ease;
        }
        .featured-img:hover { transform: scale(1.03); }

        .featured-overlay-badge {
          position: absolute;
          top: 12px;
          left: 12px;
        }

        .featured-content-col {
          justify-content: center;
        }

        .featured-meta-row {
          align-items: center;
        }

        .meta-time-text {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        .meta-dot {
          color: var(--color-border);
        }

        .meta-date-placeholder {
          font-size: 11px;
          color: var(--color-placeholder-text);
          font-style: italic;
        }

        .featured-title {
          font-family: var(--font-heading);
          font-size: clamp(var(--text-lg), 2.5vw, var(--text-2xl));
          font-weight: 800;
          color: var(--color-primary-900);
          line-height: var(--leading-tight);
          margin: 0;
        }

        .featured-excerpt {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .featured-author-row {
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .author-icon {
          color: var(--color-primary-700);
        }

        .author-name {
          font-size: var(--text-xs);
          font-weight: 700;
          color: var(--color-primary-900);
        }

        .featured-action-row {
          margin-top: 0.5rem;
        }

        /* 3-Column Articles Grid */
        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .article-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.15rem;
          box-shadow: var(--shadow-xs);
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .article-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-secondary-border);
          box-shadow: var(--shadow-sm);
        }

        .article-media-box {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .article-img-wrapper {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: var(--radius-md);
        }
        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.35s ease;
        }
        .article-card:hover .article-img { transform: scale(1.04); }

        .article-tag-overlay {
          position: absolute;
          top: 8px;
          left: 8px;
        }

        .article-meta-row {
          font-size: 11px;
          color: var(--color-text-muted);
          padding-top: 0.25rem;
        }

        .meta-read-time {
          font-weight: 600;
        }

        .article-card-title {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-primary-900);
          line-height: var(--leading-snug);
          margin: 0.25rem 0 0 0;
        }

        .article-card-excerpt {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0.35rem 0 0 0;
        }

        .article-card-footer {
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border-subtle);
          margin-top: 0.75rem;
        }

        .article-author-text {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-800);
        }

        .article-read-btn {
          margin-top: 0.25rem;
        }

        /* Disclaimer Box */
        .blog-disclaimer-box {
          padding: 1.15rem 1.5rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          align-items: center;
          gap: 1.25rem;
        }

        .disclaimer-shield-icon {
          color: var(--color-primary-700);
          flex-shrink: 0;
        }

        .disclaimer-text {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
          line-height: var(--leading-normal);
          margin: 0;
        }

        .disclaimer-consult-btn {
          white-space: nowrap;
        }

        /* Modal Dialog */
        .article-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(6, 34, 23, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .article-modal-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2rem;
          max-width: 600px;
          width: 100%;
          box-shadow: var(--shadow-xl);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          align-items: center;
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

        .modal-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-primary-900);
          margin: 0;
        }

        .modal-meta {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
        }

        .modal-lead {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .modal-placeholder-notice-box {
          padding: 1rem;
          border-radius: var(--radius-md);
          background-color: var(--color-placeholder-bg);
          border: 1px dashed var(--color-placeholder-border);
          font-size: var(--text-xs);
        }

        .modal-notice-title {
          color: var(--color-primary-900);
        }

        .modal-notice-desc {
          color: var(--color-text-muted);
          line-height: var(--leading-normal);
          margin: 4px 0 0 0;
        }

        .modal-footer {
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }
      `}</style>
    </SectionWrapper>
  );
};
