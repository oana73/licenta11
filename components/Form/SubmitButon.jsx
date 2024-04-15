import { Plus } from "lucide-react";
import React from "react";

export default function SubmitButton({ isLoading = false, buttonTitle, loadingButton, customClass }) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="button"
          className={`mt-4 text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 inline-flex items-center ${customClass}`}
        >

          {loadingButton}
        </button>
      ) : (
        <button
          type="submit"
          className={` px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900 hover:bg-cyan-600 ${customClass}`}
        >
          <span>{buttonTitle}</span>
        </button>
      )}
    </div>
  );
} 
