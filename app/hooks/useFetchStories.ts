import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../api';
import { Story } from '../types/story';

export default function useFetchStories({
  topStoryIds,
}: {
  topStoryIds: number[];
}) {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStoryById = useCallback(
    async (storyId: number): Promise<Story> => {
      try {
        const response = await fetch(`${API_URL}/v0/item/${storyId}.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.json();
      } catch (error) {
        throw new Error('Failed to GET story data');
      }
    },
    []
  );

  const fetchStories = useCallback(
    async (startIndex: number) => {
      if (startIndex >= topStoryIds.length || isLoading) return;
      setIsLoading(true);
      try {
        const stories = await Promise.all(
          topStoryIds.slice(startIndex, startIndex + 100).map(fetchStoryById)
        );
        setStories((prevState) => [...prevState, ...stories]);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        throw new Error('Failed to GET data');
      }
    },
    [topStoryIds, fetchStoryById, setStories]
  );

  useEffect(() => {
    fetchStories(0);
  }, [topStoryIds, fetchStories]);

  return {
    stories,
    isLoading,
    fetchStories,
  };
}
