import { RandomCat } from "@/types/RandomCat";
import React from "react";

export const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const results: RandomCat = await response.json();

  return (
    <>
      <p>FACT : {results.fact}</p>
    </>
  );
};
