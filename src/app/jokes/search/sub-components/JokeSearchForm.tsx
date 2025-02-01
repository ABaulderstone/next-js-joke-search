'use client';

import { FormEvent } from 'react';

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
      <input name="query" placeholder="search for a joke" />
      <button type="submit">Search</button>
    </form>
  );
};
export default JokeSearchForm;
