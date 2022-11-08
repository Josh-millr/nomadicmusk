import React, { useState } from "react";

export const TextInput = ({ type, placeholder, required, getValue }) => {
  return (
    <input
      type={type}
      id={type}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
      placeholder={placeholder}
      required={required && false}
      onChange={(e) => getValue(e.target.value)}
    />
  );
};
