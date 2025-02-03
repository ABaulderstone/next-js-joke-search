export default function JokeResultsSkeleton() {
  console.log('skeleton runs');
  return (
    <section className="flex flex-col gap-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="animate-pulse bg-slate-300"></div>
      ))}
    </section>
  );
}
