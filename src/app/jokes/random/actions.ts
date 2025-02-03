'use server';

import { fetchRandomJoke } from '@/lib/services/jokes';

export const getNewJoke = async () => {
  const { joke } = await fetchRandomJoke();
  return joke;
};
