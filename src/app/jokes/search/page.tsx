import MainHeading from '@/components/MainHeading';

import JokeSearchWrapper from './sub-components/JokeSearchWrapper';

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
  const { query } = await searchParams;
  return (
    <section className="py-5 pl-10 flex flex-col justify-start gap-4">
      <MainHeading>
        {query ? 'Jokes about ' + query : 'Search For Jokes'}
      </MainHeading>
      <JokeSearchWrapper />
    </section>
  );
};

export default JokeSearchPage;
