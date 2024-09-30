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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle search from SearchComponent, memoized to avoid unnecessary re-creation
  const handleSearch = useCallback(async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchWordDefinition(searchTerm); // Fetch word definition
      setDefinition(result?.[0] || null); // Store the first word result if it exists
      if (!result || result.length === 0) {
        setError(
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-6xl mb-4">😞</span> {/* Sad emoji */}
            <p className="text-xl text-slateBlack font-bold">
              No Definitions Found
            </p>
            <p className="text-mediumGray mt-2">
              Sorry pal, we couldn&#39;t find definitions for the word you were
              looking for. You can try the search again at a later time or head
              to the web instead.
            </p>
          </div>
        );
      }
    } catch (err) {
      setError(
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-6xl mb-4">😞</span> {/* Sad emoji */}
          <p className="text-xl font-bold">An Error Occurred</p>
          <p className="text-mediumGray mt-2">
            Sorry pal, something went wrong while fetching the word. Please try
            again later.
          </p>
        </div>
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div
      className={`p-4 ${selectedFont} ${
        isDarkMode ? "bg-deepBlack" : "bg-white"
      }  `}
    >
      <div className="flex flex-col gap-5 min-h-screen xl:w-1/2 xl:mx-auto">
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
            className={`text-center ${
              isDarkMode ? "text-white" : "text-slateBlack"
            }`}
          >
            Loading...
          </p>
        )}
        {error && <p className="text-alertRed text-center">{error}</p>}

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
    </div>
  );
}
