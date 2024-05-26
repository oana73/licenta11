'use client'
import { setCurrentStep } from "@/redux/slices/checkoutSlice";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavButtons() {
  const currentStep = useSelector((store)=>store.checkout.currentStep)
  const dispatch = useDispatch()
  function handdlePrevious(){
    dispatch(setCurrentStep(currentStep-1))
  }
  return (
    <div className="flex justify-between items-center">
      {currentStep > 1 && (
        <button onClick={handdlePrevious}
          type="button"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-pink-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-pink-700"
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}