import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "recently-viewed-categories";
const MAX_RECENT = 5;

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecentlyViewed(JSON.parse(stored));
      } catch {
        setRecentlyViewed([]);
      }
    }
  }, []);

  const addToRecentlyViewed = useCallback((category: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((c) => c !== category);
      const updated = [category, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { recentlyViewed, addToRecentlyViewed };
};
