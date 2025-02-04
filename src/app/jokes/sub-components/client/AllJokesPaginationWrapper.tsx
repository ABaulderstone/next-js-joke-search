'use client';

import { useRouter } from 'next/navigation';
import Pagination from '../../../../components/Pagination/Pagination';

interface AllJokesPaginationWrapperProps {
  currentPage: number;
  totalPages: number;
  nextPage: number;
}
export default function AllJokesPaginationWrapper({
  currentPage,
  nextPage,
  totalPages,
}: AllJokesPaginationWrapperProps) {
  const router = useRouter();
  const goToPage = (page: number) => {
    router.push('/jokes?page=' + page);
  };

  const onNext = () => {
    goToPage(nextPage);
  };
  const onPrev = () => {
    goToPage(currentPage - 1);
  };
  return (
    <Pagination
      totalPages={totalPages}
      onNext={onNext}
      onPrev={onPrev}
      currentPage={currentPage}
    />
  );
}
