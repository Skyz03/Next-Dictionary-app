"use client";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Replace with your chosen theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact styles
// import "primeicons/primeicons.css"; // Icons used in PrimeReact components
import Header from "./components/Header";
import { InputText } from "primereact/inputtext";
import SearchComponent from "./components/Search";

export default function BasicDemo() {
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <SearchComponent />
    </>
  );
}
