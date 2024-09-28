"use client"; // Required for Next.js components that use hooks
import React, { useState, useCallback } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Replace with your chosen theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact styles
import { fetchWordDefinition } from "./utils/api"; // Fetch word definition from API

import Header from "./components/Header";
import SearchComponent from "./components/Search";
import PlayText from "./components/PlayText";
import Meaning from "./components/Meaning";
import Source from "./components/Source";

export default function BasicDemo() {
  // State to manage the search term, word definition, and loading/error status
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State for the selected font
  const [selectedFont, setSelectedFont] = useState("font-sans");

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to handle search from SearchComponent, memoized to avoid unnecessary re-creation
  const handleSearch = useCallback(async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchWordDefinition(searchTerm); // Fetch word definition
      setDefinition(result?.[0] || null); // Store the first word result if it exists
      if (!result || result.length === 0) {
        setError("Word not found.");
      }
    } catch (err) {
      setError("An error occurred while fetching the word.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div
      className={`p-4 ${selectedFont} ${
        isDarkMode ? "bg-black" : "bg-white"
      } flex flex-col gap-5 min-h-screen`}
    >
      {/* Header component, pass setSelectedFont and setIsDarkMode to update font and color */}
      <Header
        setSelectedFont={setSelectedFont}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />

      {/* Search component with a callback function for search handling */}
      <SearchComponent onSearch={handleSearch} isDarkMode={isDarkMode} />

      {/* Loading and Error handling */}
      {loading && (
        <p
          className={`text-center ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Loading...
        </p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Render the components if a definition is available */}
      {definition && (
        <>
          {/* Word and pronunciation (PlayText) */}
          <PlayText
            word={definition.word}
            phonetics={definition.phonetics?.[0]}
            isDarkMode={isDarkMode}
          />

          {/* Meaning(s) */}
          <Meaning meanings={definition.meanings} isDarkMode={isDarkMode} />

          {/* Source of the word */}
          <Source
            source={definition.sourceUrls || []}
            isDarkMode={isDarkMode}
          />
        </>
      )}
    </div>
  );
}
