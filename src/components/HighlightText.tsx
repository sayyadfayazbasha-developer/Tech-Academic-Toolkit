import React from "react";

interface HighlightTextProps {
  text: string;
  searchTerm: string;
  className?: string;
}

export const HighlightText = ({ text, searchTerm, className = "" }: HighlightTextProps) => {
  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => 
        regex.test(part) ? (
          <mark 
            key={index} 
            className="bg-chart-4/40 text-foreground rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};
