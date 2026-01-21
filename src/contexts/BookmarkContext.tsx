import { createContext, useContext, ReactNode } from 'react';
import { useBookmarks, BookmarkedItem } from '@/hooks/useBookmarks';

interface BookmarkContextType {
  bookmarks: BookmarkedItem[];
  addBookmark: (item: Omit<BookmarkedItem, 'addedAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (item: Omit<BookmarkedItem, 'addedAt'>) => void;
  clearAllBookmarks: () => void;
}

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const bookmarkUtils = useBookmarks();

  return (
    <BookmarkContext.Provider value={bookmarkUtils}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarkContext must be used within a BookmarkProvider');
  }
  return context;
};
