'use client';

import { use, useState, useTransition } from 'react';
import { getNewJoke } from '../../actions';

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
    <section className="flex flex-col gap-4">
      <p>{joke}</p>
      <button onClick={handleRefetch}>Get new joke</button>
    </section>
  );
}
