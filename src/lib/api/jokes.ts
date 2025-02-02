import { APIError } from './errors';

interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}
export const fetchRandomJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new APIError('Failed to Fetch', response.status);
  }
  return (await response.json()) as JokeResponse;
};
