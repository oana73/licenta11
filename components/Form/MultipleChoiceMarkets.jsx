import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-300 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          multiple= {multiple}
          className="block w-full rounded-md border-0 p-2 dark:bg-neutral-600 dark:text-neutral-300 text-neutral-600 shadow-sm ring-1 ring-inset ring-neutral-400 focus:ring-2 focus:ring-inset focus:ring-pink-600  sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}