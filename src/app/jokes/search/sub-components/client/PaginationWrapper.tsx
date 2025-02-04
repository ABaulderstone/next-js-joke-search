'use client';

import { useRouter } from 'next/navigation';
import Pagination from '../../../../../components/Pagination/Pagination';

interface PaginationWrapperProps {
  nextPage: number;
  currentPage: number;
  totalPages: number;
  query: string;
}
export default function PaginationWrapper({
  currentPage,
  nextPage,
  totalPages,
  query,
}: PaginationWrapperProps) {
  const router = useRouter();
  const goToPage = (page: number) => {
    router.push(`/jokes/search?page=${page}&query=${query}`);
  };
  const onNext = () => {
    goToPage(nextPage);
  };
  const onPrev = () => {
    goToPage(currentPage - 1);
  };

  return (
    <Pagination
      onNext={onNext}
      onPrev={onPrev}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
}
