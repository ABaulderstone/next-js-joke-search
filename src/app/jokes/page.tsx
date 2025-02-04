import { fetchAllJokes } from '@/lib/services/jokes';
import MainHeading from '../../components/MainHeading';
import Link from 'next/link';
import AllJokesPaginationWrapper from './sub-components/client/AllJokesPaginationWrapper';
interface AllJokesPageProps {
  searchParams: {
    page?: string;
  };
}
export const metadata = {
  title: 'All Jokes',
};

export default async function AllJokesPage({
  searchParams,
}: AllJokesPageProps) {
  const { page = '1' } = await searchParams;
  const { currentPage, totalPages, totalJokes, nextPage, results } =
    await fetchAllJokes(page);
  return (
    <section className="p-4 flex flex-col gap-4">
      <MainHeading>All Jokes</MainHeading>
      <div className="flex flex-col gap-2">
        {results.map((result) => (
          <Link key={result.id} href={`/jokes/${result.id}`}>
            {result.joke}
          </Link>
        ))}
      </div>
      <AllJokesPaginationWrapper
        currentPage={currentPage}
        totalPages={+totalPages}
        nextPage={nextPage}
      />
    </section>
  );
}
