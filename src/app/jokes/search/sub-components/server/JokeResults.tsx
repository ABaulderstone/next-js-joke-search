import { fetchJokesBySearchTerm } from '@/lib/services/jokes';
import Link from 'next/link';
import Pagination from '../../../../../components/Pagination/Pagination';
import { useRouter } from 'next/navigation';
import PaginationWrapper from '../client/PaginationWrapper';

interface JokeResultsProps {
  query: string;
  page?: string;
}

export default async function JokeResults({
  query,
  page = '1',
}: JokeResultsProps) {
  const { results, currentPage, nextPage, totalPages } =
    await fetchJokesBySearchTerm(query, +page);

  return (
    <>
      {results.length > 0 ? (
        <section className="flex flex-col gap-1">
          {results.map((response) => (
            <Link href={`/jokes/${response.id}`}>{response.joke}</Link>
          ))}
          <PaginationWrapper
            currentPage={currentPage}
            totalPages={+totalPages}
            query={query}
            nextPage={nextPage}
          />
        </section>
      ) : (
        <div className="text-sm text-red-600">No jokes found for "{query}"</div>
      )}
    </>
  );
}
