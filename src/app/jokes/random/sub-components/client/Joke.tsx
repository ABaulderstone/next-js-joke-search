'use client';

import { use, useState } from 'react';
import { getNewJoke } from '../../actions';
import Button from '@/components/Button/Button';

interface JokeProps {
  initialJoke: string;
}

export default function Joke({ initialJoke }: JokeProps) {
  const [jokePromise, setJokePromise] = useState<Promise<string> | null>(null);

  const joke = jokePromise ? use(jokePromise) : initialJoke;

  const handleRefetch = () => {
    setJokePromise(getNewJoke());
  };

  return (
    <section className="p-4 flex flex-col gap-4">
      <p>{joke}</p>
      <Button onClick={handleRefetch}>Get New Joke</Button>
    </section>
  );
}
