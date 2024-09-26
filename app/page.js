"use client"; // Required for Next.js components that use hooks
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Replace with your chosen theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact styles
// import "primeicons/primeicons.css"; // Icons used in PrimeReact components
import { fetchWordDefinition } from "./utils/api"; // Fetch word definition from API

import Header from "./components/Header";
import SearchComponent from "./components/Search";
import PlayText from "./components/PlayText";
import Meaning from "./components/Meaning";
import Synonyms from "./components/Synonyms";
import Source from "./components/Source";

export default function BasicDemo() {
  // State to manage the search term, word definition, and loading/error status
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle search from SearchComponent
  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);

    const result = await fetchWordDefinition(searchTerm); // Fetch word definition

    setLoading(false);

    if (result) {
      setDefinition(result[0]); // Store the first word result
    } else {
      setError("Word not found or an error occurred.");
      setDefinition(null);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-5">
      {/* Header component */}
      <Header />

      {/* Search component with a callback function for search handling */}
      <SearchComponent onSearch={handleSearch} />

      {/* Loading and Error handling */}
      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Render the components if a definition is available */}
      {console.log(definition)}
      {definition && (
        <>
          {/* Word and pronunciation (PlayText) */}
          <PlayText
            word={definition.word}
            phonetics={definition.phonetics[0]}
          />

          {/* Type of word (noun, verb, etc.) - assuming it's part of 'definition.meanings' */}

          {/* Meaning(s) */}
          <Meaning meanings={definition.meanings} />

          {/* Synonyms and antonyms */}
          <Synonyms
            synonyms={definition.meanings[0]?.synonyms || []}
            antonyms={definition.meanings[0]?.antonyms || []}
          />

          {/* Source of the word */}
          <Source source={definition.sourceUrls || []} />
        </>
      )}
    </div>
  );
}
