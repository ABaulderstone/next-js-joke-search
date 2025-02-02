import { fetchRandomJoke } from '@/lib/api';
import Joke from '../client/Joke';

export default async function JokeLoader() {
  const { joke } = await fetchRandomJoke();
  return <Joke initialJoke={joke} />;
}
