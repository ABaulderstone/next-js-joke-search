import MainHeading from '@/components/MainHeading';
import JokeSearchWrapper from './sub-components/client/JokeSearchWrapper';
import JokeResults from './sub-components/server/JokeResults';
import { Suspense } from 'react';
import Spinner from '../../../components/Spinner/Spinner';

interface JokeSearchPageProps {
  searchParams: {
    query?: string;
    page?: string;
  };
}

export const generateMetadata = async ({
  searchParams,
}: JokeSearchPageProps) => {
  const { query } = await searchParams;

  return {
    title: `Joke Search ${query ? ` - "${query}"` : ''}`,
    description: 'A Page to search for jokes',
  };
};

const JokeSearchPage = async ({ searchParams }: JokeSearchPageProps) => {
  const { query, page } = await searchParams;

  return (
    <section className="py-5 pl-10 flex flex-col justify-start gap-4">
      <MainHeading>
        {query ? 'Jokes about ' + query : 'Search For Jokes'}
      </MainHeading>
      <JokeSearchWrapper />
      {query && (
        <Suspense key={[query, page].join('-')} fallback={<Spinner />}>
          <JokeResults query={query} page={page} />
        </Suspense>
      )}
    </section>
  );
};

export default JokeSearchPage;
