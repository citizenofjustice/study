import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const paginantionArray = useMemo(() => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);
  return paginantionArray;
};
