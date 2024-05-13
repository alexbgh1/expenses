import { useEffect, useState } from "react";

interface PaginationProps {
  items: any[];
  itemsPerPage: number;
}
const usePagination = ({ items, itemsPerPage = 10 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return {
    currentPage,
    setCurrentPage,
    indexOfFirstItem,
    indexOfLastItem,
    goToNextPage,
    goToPrevPage,
  };
};

export { usePagination };
