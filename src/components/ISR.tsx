import { RandomCat } from "@/types/RandomCat";
import React from "react";

export const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5
    }
  });
  const results: RandomCat = await response.json();

  return (
    <>
      <p>FACT : {results.fact}</p>
    </>
  );
};
