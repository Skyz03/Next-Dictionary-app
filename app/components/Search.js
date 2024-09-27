import React, { useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm); // Call parent component's search handler
    }
  };

  // Function to handle keydown event (Enter key)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full mx-auto p-inputgroup bg-gray-900 rounded-lg">
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a word..."
          className="w-full py-2 px-4 bg-transparent text-white border-none focus:ring-0"
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
    </div>
  );
};

export default SearchComponent;
