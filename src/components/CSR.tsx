"use client";

import { RandomCat } from "@/types/RandomCat";
import React, { useEffect, useState } from "react";

const CSR = () => {
  const [data, setData] = useState<RandomCat | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const results: RandomCat = await response.json();
      setData(results);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <p>FACT : {data.fact}</p>
    </>
  );
};
export default CSR;
