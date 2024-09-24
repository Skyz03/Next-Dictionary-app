import Image from "next/image";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-[90%] mx-auto p-inputgroup bg-gray-900 rounded-lg">
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="keyboard"
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
}
