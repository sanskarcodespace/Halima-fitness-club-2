import React, { useState } from 'react';
import { SectionWrapper } from '../../layout/SectionWrapper/SectionWrapper';
import { SectionHeading } from '../../primitives/SectionHeading/SectionHeading';
import { Button } from '../../primitives/Button/Button';
import { Badge } from '../../primitives/Badge/Badge';
import { Icon } from '../../primitives/Icon/Icon';
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
  content: React.ReactNode;
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
    datePlaceholder: 'August 10, 2026',
    readTime: '4 min read',
    excerpt:
      'Discover how structured hydration, gentle morning movement, and consistent pacing establish natural momentum for daily physical vitality without extreme restriction.',
    author: `${BUSINESS_CONFIG.coach.name} (${BUSINESS_CONFIG.coach.title})`,
    isFeatured: true,
    content: (
      <>
        <p>Most people believe that high energy through the day requires expensive supplements, early 5 AM gym sessions, or extreme discipline. The reality is far simpler — and far more sustainable. The single most powerful thing you can do for your daily energy is build a <strong>consistent morning rhythm</strong> that your body learns to rely on.</p>
        <h4>Start with Hydration First</h4>
        <p>Before coffee, before your phone, drink one full glass of water. Your body has been without fluids for 7–9 hours. Hydration is the fastest, zero-cost energy boost available. Add a pinch of sea salt or a squeeze of lemon for electrolyte balance.</p>
        <h4>10-Minute Gentle Movement</h4>
        <p>You don't need a full workout. A 10-minute walk, five sun salutations, or light stretching activates your circulation, improves mental clarity, and tells your nervous system that today is a <em>movement day</em>. This consistency compounding over weeks becomes transformative.</p>
        <h4>The 3-Piece Morning Framework</h4>
        <ul>
          <li><strong>Hydrate</strong> — water before anything else</li>
          <li><strong>Move</strong> — even 10 minutes counts</li>
          <li><strong>Anchor</strong> — one fixed morning task (journaling, prayer, breathwork)</li>
        </ul>
        <p>Within 21 days of consistent practice, most of our coaching clients report noticeably better afternoon energy, fewer cravings, and improved sleep quality — without changing any other habit. That's the power of the morning anchor.</p>
        <p><em>Personalized morning routine planning is included in all Halima Fitness Club coaching programs. Book a free consultation to get started.</em></p>
      </>
    )
  };

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'Mindful Plate Structuring: Balancing Whole Foods at Home',
      imageSrc: '/images/blog-nutrition.jpg',
      category: 'nutrition',
      categoryLabel: 'Nutrition Guidance',
      datePlaceholder: 'August 5, 2026',
      readTime: '5 min read',
      excerpt:
        'A practical guide to portion balance, vegetable variety, and sustainable protein integration tailored to everyday home cooking.',
      author: BUSINESS_CONFIG.coach.name,
      content: (
        <>
          <p>Eating well at home doesn't require calorie counting, complex macro tracking, or expensive superfoods. It requires understanding <strong>plate structure</strong> — the ratio and variety of what goes on your plate at each meal.</p>
          <h4>The Balanced Plate Formula</h4>
          <p>A simple guideline that works for most people:</p>
          <ul>
            <li><strong>½ your plate</strong> — colourful vegetables (at least 2–3 varieties)</li>
            <li><strong>¼ your plate</strong> — quality protein (eggs, lentils, paneer, chicken, fish)</li>
            <li><strong>¼ your plate</strong> — whole grains or complex carbohydrates (brown rice, roti, oats)</li>
          </ul>
          <h4>Practical Tips for Home Cooking</h4>
          <p><strong>Batch cook your vegetables.</strong> Roasting or stir-frying a large batch of mixed vegetables once every two days saves time and makes eating vegetables effortless.</p>
          <p><strong>Vary your protein daily.</strong> Eating the same protein source repeatedly leads to nutrient gaps. Rotate between legumes, dairy, eggs, and lean meats across the week.</p>
          <p><strong>Spices are nutrients too.</strong> Turmeric, cumin, coriander, and ginger are anti-inflammatory and add depth to simple food without adding calories.</p>
          <h4>Common Mistakes to Avoid</h4>
          <ul>
            <li>Skipping vegetables at dinner (the most commonly skipped meal component)</li>
            <li>Relying only on rice or roti for an entire meal</li>
            <li>Undereating protein, which drives afternoon cravings</li>
          </ul>
          <p><em>Our nutrition coaching sessions include customized meal structure templates based on your food preferences, household cooking style, and wellness goals.</em></p>
        </>
      )
    },
    {
      id: 'art-2',
      title: 'Making the Most of Your 60-Minute Live Online Fitness Sessions',
      imageSrc: '/images/blog-fitness.jpg',
      category: 'fitness',
      categoryLabel: 'Online Fitness',
      datePlaceholder: 'July 28, 2026',
      readTime: '3 min read',
      excerpt:
        'Essential tips on screen positioning, warm-up mindset, and posture awareness for live Zoom group coaching environments.',
      author: BUSINESS_CONFIG.coach.name,
      content: (
        <>
          <p>Live online fitness sessions are fundamentally different from gym workouts or pre-recorded videos. When done well, they provide real-time correction, accountability, and community energy that pre-recorded content can never replicate. Here's how to get the absolute most out of every 60-minute session.</p>
          <h4>Before the Session Starts</h4>
          <ul>
            <li><strong>Set up your space:</strong> Clear enough floor space for arms-wide movement and a mat. Ensure your camera shows your full body from head to knee if possible.</li>
            <li><strong>Test your audio:</strong> Mute yourself if you're in a noisy environment and unmute when the coach invites questions.</li>
            <li><strong>Have water ready:</strong> Hydrate before, sip during breaks, and rehydrate after.</li>
          </ul>
          <h4>During the Session</h4>
          <p><strong>Follow form cues closely.</strong> Live coaching means your coach can observe your movement in real time. When a form correction is given, it's specific to what they see — apply it immediately and hold the corrected position.</p>
          <p><strong>Modify without guilt.</strong> All movements have easier and harder variations. Choosing a modification isn't giving up — it's intelligent training. Ego-driven overexertion leads to injury, not results.</p>
          <h4>After the Session</h4>
          <ul>
            <li>Light stretching for 5 minutes aids recovery</li>
            <li>Note any exercises that felt uncomfortable — share feedback with Coach Halima</li>
            <li>Log the session in your habit tracker for accountability</li>
          </ul>
          <p><em>All Halima Fitness Club group classes are live on Zoom and led by Coach Halima Sadiya. Sessions are structured for real results, regardless of your fitness level.</em></p>
        </>
      )
    },
    {
      id: 'art-3',
      title: 'The 21-Day Mindset: Overcoming Common Routine Plateaus',
      imageSrc: '/images/blog-mindset.jpg',
      category: 'coaching',
      categoryLabel: 'Wellness Habits',
      datePlaceholder: 'July 18, 2026',
      readTime: '4 min read',
      excerpt:
        'Understanding habit loops, managing daily motivation fluctuations, and maintaining momentum through accountability.',
      author: BUSINESS_CONFIG.coach.name,
      content: (
        <>
          <p>The most common question I receive after the first two weeks of a coaching program is: <em>"Coach, I was doing so well — why do I feel like stopping now?"</em> This is completely normal. It's called the <strong>21-Day Plateau</strong>, and understanding it is the key to getting past it.</p>
          <h4>Why Day 14–21 Is the Hardest</h4>
          <p>The initial motivation of something new naturally fades after 10–14 days. Neurologically, new habits are still forming — they haven't become automatic yet. The effort still feels conscious. This discomfort is not a sign of failure; it's a sign that real change is happening.</p>
          <h4>The 3 Plateau Traps</h4>
          <ul>
            <li><strong>All-or-nothing thinking:</strong> Missing one day doesn't erase your progress. It just means tomorrow matters more.</li>
            <li><strong>Expecting visible results too soon:</strong> Internal changes — better digestion, improved sleep, less bloating — often come before visible changes. Trust the process.</li>
            <li><strong>Isolation:</strong> Going through a habit change alone is dramatically harder. Accountability — whether with a coach or a community — statistically triples adherence.</li>
          </ul>
          <h4>How to Break Through</h4>
          <p><strong>Reduce, don't stop.</strong> If your 60-minute habit feels too much, do 20 minutes. Showing up, even imperfectly, builds the neural pathway that eventually makes the full habit effortless.</p>
          <p><strong>Change your environment.</strong> If you always do your workout in the same room and feel bored, move to a different space. Novelty re-activates motivation temporarily — enough to carry you through the plateau.</p>
          <p><em>Coach Halima provides weekly check-ins and habit accountability tracking across all coaching programs to support you through every plateau phase.</em></p>
        </>
      )
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

      <div className="blog-container stack stack-md">
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
                <Badge variant="primary">Full Article Inside</Badge>
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
                  <Badge variant="accent">Full Article Inside</Badge>
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
              <div className="modal-article-body">
                {activeArticle.content}
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

        .modal-article-body {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          line-height: 1.75;
          padding-top: 0.25rem;
        }
        .modal-article-body h4 {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 1.1rem 0 0.4rem;
        }
        .modal-article-body p {
          margin: 0 0 0.65rem;
        }
        .modal-article-body ul {
          padding-left: 1.25rem;
          margin: 0.25rem 0 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .modal-article-body li {
          line-height: 1.6;
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
