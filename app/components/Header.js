"use client";

import Image from "next/image";
import React, { useState, useMemo, useCallback } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";

export default function Header() {
  // Set Sans Serif as the default selected font
  const [selectedFont, setSelectedFont] = useState({
    name: "Sans Serif",
    code: "sans-serif",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoize the font options
  const fontOptions = useMemo(
    () => [
      { name: "Sans Serif", code: "sans-serif" },
      { name: "Serif", code: "serif" },
      { name: "Mono", code: "mono" },
    ],
    []
  );

  // Handlers for updating state
  const handleFontChange = useCallback((e) => {
    setSelectedFont(e.value);
  }, []);

  const handleDarkModeToggle = useCallback((e) => {
    setIsDarkMode(e.value);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between p-4">
      {/* Logo Image */}
      <Image width={30} height={30} src="/assets/images/logo.svg" alt="Logo" />

      {/* Dropdown and Toggle Section */}
      <div className="flex flex-row items-center gap-5">
        {/* Dropdown for Font Selection */}
        <Dropdown
          value={selectedFont} // Default value set to Sans Serif
          onChange={handleFontChange}
          options={fontOptions}
          optionLabel="name"
          placeholder="Select a Font"
          className="w-full md:w-14rem border border-gray-300 rounded-lg"
          checkmark={true}
        />

        {/* Dark Mode Toggle Switch */}
        <InputSwitch
          className="w-20"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
          aria-label="Dark Mode Toggle"
        />

        {/* Conditional Dark Mode Icon */}
        <Image
          src="./assets/images/icon-moon.svg"
          width={20}
          height={20}
          alt="moon pic"
        />
      </div>
    </div>
  );
}
