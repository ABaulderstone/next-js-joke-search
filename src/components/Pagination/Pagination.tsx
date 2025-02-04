'use client';
import Button from '@/components/Button/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => unknown;
  onPrev: () => unknown;
}

export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className="flex flex-row justify-start gap-8">
      <Button disabled={currentPage === 1} onClick={onPrev}>
        Prev
      </Button>
      <span className="self-center">
        {currentPage} / {totalPages}
      </span>
      <Button disabled={currentPage === totalPages} onClick={onNext}>
        Next
      </Button>
    </div>
  );
}
