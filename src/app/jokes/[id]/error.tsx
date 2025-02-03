'use client';

import Button from '@/components/Button/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  return (
    <section className="p-4">
      <h2 className="text-xl text-red-600">{error.message}</h2>
      <Button onClick={() => reset()}>Try again?</Button>
    </section>
  );
}
