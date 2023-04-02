import React from "react";
import PaginationStyle from "@/styles/Pagination.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  dataFunction: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  dataFunction,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={PaginationStyle.pagination}>
      <ul>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => {
              onPageChange(currentPage - 1);
              dataFunction(currentPage - 1);
            }}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={
                pageNumber === currentPage ? `${PaginationStyle.active}` : ""
              }
              onClick={() => {
                onPageChange(pageNumber);
                dataFunction(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              onPageChange(currentPage + 1);
              dataFunction(currentPage + 1);
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
