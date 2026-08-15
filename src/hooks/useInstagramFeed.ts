import { useState, useEffect, useCallback } from 'react';

export type IgMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export interface IgPost {
  id: string;
  media_type: IgMediaType;
  media_url: string;
  thumbnail_url?: string; // for VIDEO
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface UseInstagramFeedResult {
  posts: IgPost[];
  loading: boolean;
  error: string | null;
  hasToken: boolean;
}

const IG_API_BASE = 'https://graph.instagram.com';
const FIELDS = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp';

export function useInstagramFeed(limit = 6): UseInstagramFeedResult {
  const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN as string | undefined;
  const hasToken = Boolean(token && token.trim().length > 0);

  const [posts, setPosts] = useState<IgPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = useCallback(async () => {
    if (!hasToken) return;
    setLoading(true);
    setError(null);
    try {
      const url = `${IG_API_BASE}/me/media?fields=${FIELDS}&limit=${limit}&access_token=${token}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Instagram API error: ${res.status}`);
      const data: { data: IgPost[] } = await res.json();
      setPosts(data.data ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load Instagram feed.');
    } finally {
      setLoading(false);
    }
  }, [hasToken, limit, token]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return { posts, loading, error, hasToken };
}
