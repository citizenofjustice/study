import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  const paginantionArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {paginantionArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
