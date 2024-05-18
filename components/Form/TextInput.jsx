import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue=""
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-300 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-md border-0 p-2 bg-transparent text-neutral-600 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 placeholder:text-neutral-400 focus:ring-0.5 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 "
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <IoEyeOutline className="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-400 hover:cursor-pointer"/>
            ) : (
              <IoEyeOffOutline className="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-400 hover:cursor-pointer"/>
            )}
          </button>
        )}
      </div>
      {errors[`${name}`] && (
        <span className="text-sm text-red-600 ">{label} is required</span>
      )}
    </div>
  );
}
