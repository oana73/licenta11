import { Plus } from "lucide-react";
import React from "react";

export default function SubmitButton({ isLoading = false, buttonTitle, loadingButton, customClass }) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="button"
          className={`mt-4 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 inline-flex items-center ${customClass}`}
        >

          {loadingButton}
        </button>
      ) : (
        <button
          type="submit"
          className={` px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-pink-500 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-pink-600 ${customClass}`}
        >
          <span>{buttonTitle}</span>
        </button>
      )}
    </div>
  );
} 
