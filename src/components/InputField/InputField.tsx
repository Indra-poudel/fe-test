import React from "react";

type InputFieldProp = {
  label: string;
  value: string;
  id: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({
  label,
  value,
  id,
  placeholder,
  onChange,
  error,
}: InputFieldProp) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default InputField;
