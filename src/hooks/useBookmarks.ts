import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

export interface BookmarkedItem {
  id: string;
  title: string;
  link: string;
  type: 'subject' | 'platform' | 'channel' | 'resource';
  category?: string;
  addedAt: number;
}

const BOOKMARKS_KEY = 'btech-toolkit-bookmarks';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkedItem[]>([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookmarks:', e);
        setBookmarks([]);
      }
    }
  }, []);

  // Save to localStorage whenever bookmarks change
  const saveBookmarks = useCallback((items: BookmarkedItem[]) => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(items));
    setBookmarks(items);
  }, []);

  const addBookmark = useCallback((item: Omit<BookmarkedItem, 'addedAt'>) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id);
      if (exists) {
        toast({
          title: "Already bookmarked",
          description: `${item.title} is already in your bookmarks.`,
        });
        return prev;
      }
      const newBookmarks = [...prev, { ...item, addedAt: Date.now() }];
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      toast({
        title: "Bookmark added",
        description: `${item.title} has been added to your bookmarks.`,
      });
      return newBookmarks;
    });
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks(prev => {
      const item = prev.find(b => b.id === id);
      const newBookmarks = prev.filter(b => b.id !== id);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      if (item) {
        toast({
          title: "Bookmark removed",
          description: `${item.title} has been removed from your bookmarks.`,
        });
      }
      return newBookmarks;
    });
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return bookmarks.some(b => b.id === id);
  }, [bookmarks]);

  const toggleBookmark = useCallback((item: Omit<BookmarkedItem, 'addedAt'>) => {
    if (isBookmarked(item.id)) {
      removeBookmark(item.id);
    } else {
      addBookmark(item);
    }
  }, [isBookmarked, removeBookmark, addBookmark]);

  const clearAllBookmarks = useCallback(() => {
    localStorage.removeItem(BOOKMARKS_KEY);
    setBookmarks([]);
    toast({
      title: "Bookmarks cleared",
      description: "All bookmarks have been removed.",
    });
  }, []);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
    clearAllBookmarks,
  };
};
