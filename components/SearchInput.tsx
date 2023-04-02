import React from "react";
import SearchDesign from "@/styles/Search.module.css";

interface Props {
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
  callSearch: () => void;
}

const SearchInput: React.FC<Props> = ({
  placeholder = "Search",
  value,
  onChange,
  callSearch,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={SearchDesign.searchInput}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => callSearch()}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.485 13.503c.62-.785.99-1.754.99-2.78 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.027 0 1.995-.37 2.78-.99l5.703 5.703 1.414-1.414-5.703-5.703zm-3.485 0c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
            fill="#333"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
