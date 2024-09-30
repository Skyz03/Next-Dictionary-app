import React, { useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const SearchComponent = ({ onSearch, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false); // State for managing input error

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError(true); // Show error if input is empty
    } else {
      setError(false); // Reset error
      onSearch(searchTerm); // Call parent component's search handler
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === "") {
      setError(true); // Set error if input becomes empty
    } else {
      setError(false); // Remove error if input has text
    }
  };

  return (
    <div className="w-full">
      <div
        className={`flex justify-center items-center border w-full mx-auto p-inputgroup rounded-lg transition-colors hover:border-purple-500 focus-within:border-purple-500 ${
          isDarkMode ? "bg-gray-900" : "bg-softGray"
        } ${error ? " border-red-500" : "border-black"}
         `} // Hover and focus state for purple border
      >
        <InputText
          value={searchTerm}
          onChange={handleInputChange} // Call custom input change handler
          onKeyDown={handleKeyDown}
          placeholder="Search for any word…"
          className={`w-full py-2 px-4 bg-transparent font-bold border-none focus:ring-0 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        />
        <Button
          onClick={handleSearch}
          className="p-button-icon-only bg-transparent border-none p-2"
          aria-label="search"
        >
          <Image
            src="/assets/images/icon-search.svg"
            width={15}
            height={15}
            alt="search button"
          />
        </Button>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">Whoops, can’t be empty…</p>
      )}
    </div>
  );
};

export default SearchComponent;
