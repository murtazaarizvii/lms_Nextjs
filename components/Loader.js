"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <span className="ml-3 text-gray-700 font-medium">Loading...</span>
    </div>
  );
};

export default Loader;
