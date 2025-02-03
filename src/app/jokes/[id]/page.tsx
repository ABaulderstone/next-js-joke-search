import { fetchJokeById } from '@/lib/services/jokes';

interface JokePageProps {
  params: { id: string };
}
export default async function JokePage({ params }: JokePageProps) {
  const { id } = await params;
  const response = await fetchJokeById(id);
  return (
    <section className="flex p-4 flex-col">
      <p className="text-lg">{response.joke}</p>
    </section>
  );
}
