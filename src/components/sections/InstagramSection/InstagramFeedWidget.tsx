import React from 'react';
import { useInstagramFeed, type IgPost } from '../../../hooks/useInstagramFeed';
import { Icon } from '../../primitives/Icon/Icon';
import { Button } from '../../primitives/Button/Button';

/* ── Single Post Tile ─────────────────────────────────────────────── */
const IgPostTile: React.FC<{ post: IgPost }> = ({ post }) => {
  const thumb = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
  const caption = post.caption ? post.caption.slice(0, 90) + (post.caption.length > 90 ? '…' : '') : '';

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-live-tile"
      aria-label={caption || 'View post on Instagram'}
    >
      <div className="ig-live-tile-img-wrap">
        {thumb ? (
          <img
            src={thumb}
            alt={caption || 'Instagram post by @sadiya_fitcoach'}
            className="ig-live-tile-img"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="ig-live-tile-fallback">
            <Icon name="instagram" size={28} />
          </div>
        )}
        {/* Overlay */}
        <div className="ig-live-tile-overlay" aria-hidden="true">
          {post.media_type === 'VIDEO' && (
            <span className="ig-live-tile-video-badge">
              <Icon name="play" size={14} />
              Reel
            </span>
          )}
          {post.media_type === 'CAROUSEL_ALBUM' && (
            <span className="ig-live-tile-video-badge">
              <Icon name="grid" size={12} />
              Album
            </span>
          )}
          <div className="ig-live-tile-caption">
            {caption && <p className="ig-live-tile-cap-text">{caption}</p>}
            <span className="ig-live-tile-view">
              <Icon name="external-link" size={12} /> View on Instagram
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

/* ── Setup / Not-Connected State ──────────────────────────────────── */
const IgSetupPrompt: React.FC = () => (
  <div className="ig-setup-card">
    <div className="ig-setup-icon-ring">
      <Icon name="instagram" size={32} />
    </div>
    <h3 className="ig-setup-title">Connect Live Instagram Feed</h3>
    <p className="ig-setup-desc">
      Display your latest Instagram posts automatically. Add your Instagram access token to enable the live feed.
    </p>
    <ol className="ig-setup-steps">
      <li>
        <strong>1.</strong> Go to{' '}
        <a href="https://developers.facebook.com/apps/" target="_blank" rel="noopener noreferrer">
          developers.facebook.com
        </a>{' '}
        → Create an App → Add <em>Instagram Basic Display</em> product.
      </li>
      <li>
        <strong>2.</strong> Generate a long-lived access token for{' '}
        <strong>@sadiya_fitcoach</strong>.
      </li>
      <li>
        <strong>3.</strong> Add to your <code>.env</code> file:
        <pre className="ig-setup-code">VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here</pre>
      </li>
      <li>
        <strong>4.</strong> Restart dev server — your live feed will appear automatically.
      </li>
    </ol>
    <a
      href="https://developers.facebook.com/docs/instagram-basic-display-api/getting-started"
      target="_blank"
      rel="noopener noreferrer"
      className="ig-setup-docs-link"
    >
      <Icon name="book-open" size={14} />
      Read the Setup Guide
    </a>
  </div>
);

/* ── Loading skeleton ─────────────────────────────────────────────── */
const IgSkeleton: React.FC = () => (
  <div className="ig-live-grid">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="ig-live-tile ig-live-tile-skeleton" aria-hidden="true">
        <div className="ig-live-tile-img-wrap ig-skeleton-shimmer" />
      </div>
    ))}
  </div>
);

/* ── Error State ──────────────────────────────────────────────────── */
const IgError: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
  <div className="ig-error-card">
    <Icon name="alert-circle" size={22} className="ig-error-icon" />
    <p className="ig-error-msg">{message}</p>
    <Button variant="outline" size="sm" onClick={onRetry}>
      Retry
    </Button>
  </div>
);

/* ── Main Widget ──────────────────────────────────────────────────── */
export const InstagramFeedWidget: React.FC = () => {
  const { posts, loading, error, hasToken } = useInstagramFeed(6);
  const [, forceRetry] = React.useState(0);

  if (!hasToken) return <IgSetupPrompt />;
  if (loading) return <IgSkeleton />;
  if (error) return <IgError message={error} onRetry={() => forceRetry(n => n + 1)} />;
  if (posts.length === 0) return null;

  return (
    <>
      <div className="ig-live-header">
        <span className="ig-live-badge">
          <span className="ig-live-dot" aria-hidden="true" />
          Live from Instagram
        </span>
        <span className="ig-live-handle">@sadiya_fitcoach</span>
      </div>

      <div className="ig-live-grid">
        {posts.map(post => (
          <IgPostTile key={post.id} post={post} />
        ))}
      </div>

      <style>{`
        /* Live badge */
        .ig-live-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }
        .ig-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-primary-700);
        }
        .ig-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,.25);
          animation: ig-pulse 1.8s ease-in-out infinite;
        }
        @keyframes ig-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,.1); }
        }
        .ig-live-handle {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* Grid */
        .ig-live-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
          .ig-live-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Tile */
        .ig-live-tile {
          display: block;
          border-radius: var(--radius-md);
          overflow: hidden;
          text-decoration: none;
          position: relative;
          aspect-ratio: 1 / 1;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ig-live-tile:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .ig-live-tile-img-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .ig-live-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.35s ease;
        }
        .ig-live-tile:hover .ig-live-tile-img { transform: scale(1.06); }

        /* Overlay on hover */
        .ig-live-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,37,21,0.85) 0%, rgba(10,37,21,0) 55%);
          opacity: 0;
          transition: opacity 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.65rem 0.7rem;
          gap: 0.3rem;
        }
        .ig-live-tile:hover .ig-live-tile-overlay { opacity: 1; }

        .ig-live-tile-video-badge {
          position: absolute;
          top: 6px;
          right: 6px;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 10px;
          font-weight: 700;
          color: #fff;
          background: rgba(0,0,0,0.55);
          padding: 2px 7px;
          border-radius: 99px;
          backdrop-filter: blur(4px);
        }
        .ig-live-tile-caption {}
        .ig-live-tile-cap-text {
          font-size: 10px;
          color: rgba(255,255,255,0.85);
          line-height: 1.35;
          margin: 0 0 3px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ig-live-tile-view {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
        }

        /* Fallback */
        .ig-live-tile-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg-subtle);
          color: var(--color-text-muted);
        }

        /* Skeleton shimmer */
        .ig-live-tile-skeleton {
          aspect-ratio: 1 / 1;
        }
        .ig-skeleton-shimmer {
          background: linear-gradient(
            90deg,
            var(--color-bg-subtle) 25%,
            var(--color-border) 50%,
            var(--color-bg-subtle) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Error */
        .ig-error-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
          padding: 2rem;
          background: var(--color-bg-subtle);
          border-radius: var(--radius-md);
          border: 1px dashed var(--color-border);
          text-align: center;
        }
        .ig-error-icon { color: var(--color-accent-600); }
        .ig-error-msg { font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0; }

        /* Setup card */
        .ig-setup-card {
          border: 1.5px dashed var(--color-border);
          border-radius: var(--radius-xl);
          padding: 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          background: var(--color-bg-subtle);
        }
        .ig-setup-icon-ring {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .ig-setup-title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }
        .ig-setup-desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          max-width: 480px;
          margin: 0;
        }
        .ig-setup-steps {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0;
          text-align: left;
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          max-width: 520px;
          width: 100%;
        }
        .ig-setup-steps li { line-height: 1.55; }
        .ig-setup-steps a { color: var(--color-primary-700); font-weight: 600; }
        .ig-setup-code {
          display: block;
          margin-top: 0.35rem;
          padding: 0.35rem 0.75rem;
          background: rgba(0,0,0,0.06);
          border-radius: var(--radius-sm);
          font-family: monospace;
          font-size: 12px;
          color: var(--color-text-main);
          border: 1px solid var(--color-border);
          white-space: pre-wrap;
          word-break: break-all;
        }
        .ig-setup-docs-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-primary-700);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }
        .ig-setup-docs-link:hover { border-color: var(--color-primary-700); }
      `}</style>
    </>
  );
};
