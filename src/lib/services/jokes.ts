import { transformToCamelCase } from '@/lib/utils/object-utils';

import { APIError } from './errors';

interface JokeResponse {
  id: string;
  joke: string;
  status?: number;
}

interface JokeSearchResponseRaw {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: JokeResponse[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}
interface JokeSearchResponse {
  currentPage: number;
  limit: number;
  nextPage: number;
  previousPage: number;
  results: JokeResponse[];
  searchTerm: string;
  totalJokes: string;
  totalPages: string;
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

export const fetchJokesBySearchTerm = async (searchTerm = '', page = 1) => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?limit=5&page=${page}&term=${searchTerm}`,
    {
      headers: { Accept: 'application/json' },
    }
  );

  if (!response.ok) {
    throw new APIError('Failed to fetch', response.status);
  }
  const data = (await response.json()) as JokeSearchResponseRaw;
  return transformToCamelCase<JokeSearchResponse>(data);
};
