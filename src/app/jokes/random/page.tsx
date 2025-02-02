import MainHeading from '@/components/MainHeading';
import { Suspense } from 'react';
import JokeLoader from './sub-components/server/JokeLoader';

export const metadata = {
  title: 'Random Joke Page',
};

export default function RandomJokePage() {
  return (
    <>
      <MainHeading>A Random Joke</MainHeading>
      <Suspense fallback={<p>Loading...</p>}>
        <JokeLoader />
      </Suspense>
    </>
  );
}
