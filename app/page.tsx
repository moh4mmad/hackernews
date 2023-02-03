import { API_URL } from './api';
import NewsList from './components/NewsList/NewsList';

async function fetchTopStories(): Promise<number[]> {
  try {
    const response = await fetch(`${API_URL}/v0/topstories.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to GET data');
  }
}

export default async function Home() {
  const topStoryIds = await fetchTopStories();
  return <NewsList topStoryIds={topStoryIds} />;
}
