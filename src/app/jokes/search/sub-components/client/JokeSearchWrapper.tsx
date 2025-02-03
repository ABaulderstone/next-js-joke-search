'use client';

import { useRouter } from 'next/navigation';
import JokeSearchForm from './JokeSearchForm';

const JokeSearchWrapper = () => {
  const router = useRouter();
  const onSearch = (term: string) => {
    if (term.trim().length > 0) {
      router.push('/jokes/search?page=1&query=' + term);
    }
  };
  return (
    <>
      <JokeSearchForm onSearch={onSearch} />
    </>
  );
};

export default JokeSearchWrapper;
