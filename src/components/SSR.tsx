import { RandomCat } from "@/types/RandomCat";
import React from "react";

export const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache"
  });
  const results: RandomCat = await response.json();

  return (
    <>
      <p>FACT : {results.fact}</p>
    </>
  );
};
