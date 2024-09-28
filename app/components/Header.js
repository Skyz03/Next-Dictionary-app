"use client";

import Image from "next/image";
import React, { useState, useMemo, useCallback } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";

export default function Header({ setSelectedFont, setIsDarkMode, isDarkMode }) {
  // Set Sans Serif as the default selected font
  const [selectedFont, setSelectedFontLocal] = useState({
    name: "Sans Serif",
    code: "font-sans", // Updated to use class names like "font-sans"
  });

  // Memoize the font options
  const fontOptions = useMemo(
    () => [
      { name: "Sans Serif", code: "font-sans" }, // Using Tailwind's font-sans
      { name: "Serif", code: "font-serif" }, // Using Tailwind's font-serif
      { name: "Mono", code: "font-mono" }, // Using Tailwind's font-mono
    ],
    []
  );

  // Handlers for updating state
  const handleFontChange = useCallback(
    (e) => {
      setSelectedFontLocal(e.value); // Update local state
      setSelectedFont(e.value.code); // Pass selected font to the parent component
    },
    [setSelectedFont]
  );

  const handleDarkModeToggle = useCallback(
    (e) => {
      setIsDarkMode(e.value); // Update the parent component's dark mode state
    },
    [setIsDarkMode]
  );

  return (
    <div className="flex flex-row items-center justify-between">
      {/* Logo Image */}
      <Image width={30} height={30} src="/assets/images/logo.svg" alt="Logo" />

      {/* Dropdown and Toggle Section */}
      <div className="flex flex-row items-center gap-5">
        {/* Dropdown with Vertical Line After */}
        <div className="flex items-center">
          {/* Dropdown for Font Selection */}
          <Dropdown
            value={selectedFont}
            onChange={handleFontChange}
            options={fontOptions}
            optionLabel="name"
            placeholder="Select a Font"
            className="w-full md:w-14rem rounded-lg bg-black"
            checkmark={true}
          />
          {/* Vertical Line */}
          <div className="border-l h-8 border-gray-400"></div>
        </div>

        {/* Dark Mode Toggle Switch */}
        <InputSwitch
          className="w-12"
          checked={isDarkMode} // Controlled component for dark mode toggle
          onChange={handleDarkModeToggle}
          aria-label="Dark Mode Toggle"
        />

        {/* Conditional Dark Mode Icon */}
        <Image
          src={`./assets/images/icon-${isDarkMode ? "moon" : "sun"}.svg`}
          width={20}
          height={20}
          alt={isDarkMode ? "moon pic" : "sun pic"}
        />
      </div>
    </div>
  );
}
