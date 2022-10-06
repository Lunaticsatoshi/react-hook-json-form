import React from 'react';

export const SingleCheckbox = (
  props: React.InputHTMLAttributes<HTMLInputElement>,
) => {
  return (
    <input
      type="checkbox"
      className="focus:ring-black h-4 w-4 text-black  ease-in-out transition duration-200  border-gray-300 rounded"
      {...props}
    />
  );
};
