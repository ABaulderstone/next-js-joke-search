'use server';

import { fetchRandomJoke } from '@/lib/api';

export const getNewJoke = async () => {
  const { joke } = await fetchRandomJoke();
  return joke;
};
