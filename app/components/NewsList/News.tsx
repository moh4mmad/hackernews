'use client';
import React, { useEffect, useRef } from 'react';
import { Story } from '../../types/story';

export default function News({
  story,
  index,
  isLastStory,
  fetchNextStories,
}: {
  story: Story;
  index: number;
  isLastStory: boolean;
  fetchNextStories: () => void;
}) {
  const newsRef = useRef(null);

  // To execute fetchNextStories function when the last story is on the screen
  useEffect(() => {
    if (!newsRef?.current || !isLastStory) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextStories();
        observer.unobserve(entry.target);
      }
    });
    observer.observe(newsRef.current);
  }, [isLastStory]);

  return (
    <div>
      <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        href={story?.url}
        target="_blank"
        rel="noreferrer"
        ref={newsRef}
        className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-3 leading-none"
      >
        <span className="flex items-center space-x-5">
          <big className="text-3xl font-bold text-pink-600">{index + 1}</big>
          <span className="py-3 pr-6 font-bold text-gray-100">
            {story.title}
          </span>
        </span>
      </a>
    </div>
  );
}
