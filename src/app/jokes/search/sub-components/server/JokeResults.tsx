import { fetchJokesBySearchTerm } from '@/lib/services/jokes';

interface JokeResultsProps {
  query: string;
  page?: string;
}

export default async function JokeResults({
  query,
  page = '1',
}: JokeResultsProps) {
  const { results, currentPage, nextPage } = await fetchJokesBySearchTerm(
    query,
    +page
  );

  return (
    <>
      {results.length > 0 ? (
        <section className="flex flex-col gap-1">
          {results.map((response) => (
            <div key={response.id}>{response.joke}</div>
          ))}
        </section>
      ) : (
        <div className="text-sm text-red-600">No jokes found for "{query}"</div>
      )}
    </>
  );
}
