"use client";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Replace with your chosen theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact styles
// import "primeicons/primeicons.css"; // Icons used in PrimeReact components
import { InputText } from "primereact/inputtext";
import Header from "./components/Header";
import SearchComponent from "./components/Search";
import PlayText from "./components/PlayText";
import Type from "./components/Type";
import Meaning from "./components/Meaning";
import Synonyms from "./components/Synonyms";
import Source from "./components/Source";

export default function BasicDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="p-4 flex flex-col gap-5">
      <Header />
      <SearchComponent />
      <PlayText />
      <Type />
      <Meaning />
      <Synonyms />
      <Type />
      <Meaning />
      <Source />
    </div>
  );
}
