
"use client";

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface TypewriterEffectProps {
  text: string | ReactNode;
  speed?: number;
  className?: string;
  tagName?: keyof JSX.IntrinsicElements;
}

export default function TypewriterEffect({ 
  text, 
  speed = 100, 
  className = "",
  tagName: Tag = 'h2' // Default to h2, but allow override
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  // Ensure this runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fullText = typeof text === 'string' ? text : (text as any)?.props?.children?.toString() || '';

  useEffect(() => {
    if (!isClient || currentIndex >= fullText.length) {
      if(currentIndex >= fullText.length && typeof text !== 'string') {
        // If text was ReactNode, set it fully once typing is done
        // to preserve any nested elements or styling.
        // This is a simplified approach; complex ReactNodes might need more handling.
        setDisplayedText(fullText); // Or simply `text` if you want to render the ReactNode as is.
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText, speed, isClient, text]);

  if (!isClient) {
    // Render nothing or a placeholder on the server to avoid mismatch
    // Or render the full text if preferred for SEO and then animate on client
    return <Tag className={className}>{fullText}</Tag>; 
  }

  // If the original text was a ReactNode with specific styling (e.g. <br/>),
  // we need to be careful. For simplicity, this example types out the string content.
  // For complex ReactNodes, you might need a more sophisticated diffing/rendering.
  if (typeof text !== 'string' && displayedText === fullText) {
     return <Tag className={className}>{text}</Tag>;
  }

  return <Tag className={className}>{displayedText}</Tag>;
}
