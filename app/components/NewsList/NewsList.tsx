'use client';
import News from './News';
import useFetchStories from '../../hooks/useFetchStories';

export default function NewsList({ topStoryIds }: { topStoryIds: number[] }) {
  const { stories, isLoading, fetchStories } = useFetchStories({ topStoryIds });

  return (
    <ul className="grid items-start justify-center gap-8">
      {stories.map((story, index) => (
        <li key={story.id} className="group relative">
          <News
            story={story}
            index={index}
            isLastStory={index === stories.length - 1}
            fetchNextStories={() => fetchStories(index + 1)}
          />
        </li>
      ))}
      {isLoading && <div className="loader">Loading...</div>}
    </ul>
  );
}
