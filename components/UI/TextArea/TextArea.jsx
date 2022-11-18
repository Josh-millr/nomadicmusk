import React from "react";

export const TextArea = ({ id, placeholder, getValue, value }) => {
  return (
    <textarea
      id={id}
      rows="4"
      value={value}
      placeholder={placeholder}
      onChange={(e) => getValue(e.target.value)}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    ></textarea>
  );
};
