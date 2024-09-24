"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex flex-col justify-content-center">
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      <h1 className="font-sans font-bold text-heading-l">Bold Large Heading</h1>
      <h2 className="font-serif font-normal text-heading-m">
        Normal Medium Heading
      </h2>
      <p className="font-mono font-light text-body-m">Light Body Text</p>

      <div className="font-sans">
        <h1 className="font-bold text-heading-l">Aliquam</h1>
        <h2 className="font-normal text-heading-m">Aliquam porttitor mauris</h2>
        <h3 className="font-normal text-heading-s">Aliquam porttitor mauris</h3>
        <p className="text-body-m">Aliquam porttitor mauris</p>
        <p className="text-body-s">Aliquam porttitor mauris</p>
      </div>

      <div className="font-serif">
        <h1 className="font-bold text-heading-l">Aliquam</h1>
        <h2 className="font-normal text-heading-m">Aliquam porttitor mauris</h2>
        <h3 className="font-normal text-heading-s">Aliquam porttitor mauris</h3>
        <p className="text-body-m">Aliquam porttitor mauris</p>
        <p className="text-body-s">Aliquam porttitor mauris</p>
      </div>

      <div className="font-mono">
        <h1 className="font-bold text-heading-l">Aliquam</h1>
        <h2 className="font-normal text-heading-m">Aliquam porttitor mauris</h2>
        <h3 className="font-normal text-heading-s">Aliquam porttitor mauris</h3>
        <p className="text-body-m">Aliquam porttitor mauris</p>
        <p className="text-body-s">Aliquam porttitor mauris</p>
      </div>
    </div>
  );
}
