'use client';

import { FormEvent } from 'react';
import Button from '@/components/Button/Button';

interface JokeSearchFormProps {
  onSearch: (searchTerm: string) => unknown;
}
const JokeSearchForm = ({ onSearch }: JokeSearchFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('query');
    typeof query === 'string' && onSearch(query);
  };

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <input
        className="rounded p-2"
        name="query"
        placeholder="search for a joke"
      />
      <Button className="h-full m-0" type="submit">
        Submit
      </Button>
    </form>
  );
};
export default JokeSearchForm;
