"use client";

import React from "react";

const SearchBar = () => {
  return (
    <main className="w-full relative bg-primary">
      <div className="shadow-secondary/40 border-2 border-secondary shadow-lg w-full text-center md:w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 py-2 bg-white rounded-md mx-auto flex items-center justify-between gap-4 h-[72px]">
        <p className="font-extrabold uppercase">
          We Provide For Pets and Their People{" "}
        </p>
      </div>
    </main>
  );
};

export default SearchBar;
