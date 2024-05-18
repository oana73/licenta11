"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Status({ row, accessorKey }) {
  const savedStatus = row.getValue(`${accessorKey}`);
  const userId = row.original.id;
  const [status, setStatus] = useState(savedStatus);
  const [loading, setLoading] = useState(false);
  console.log(status, row.original, userId);
  async function handleChange(e) {
    const newStatus = e.target.value === "true"; // Convert string to boolean
    setStatus(newStatus);
    const data = {
      status: newStatus,
    };
    // Make API request here to update status in the database
    console.log(data);
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/suppliers/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // console.log(response);
        setLoading(false);
        toast.success(`supplier Status Updated Successfully`);
      } else {
        setLoading(false);
        toast.error("Something Went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  const optionStyle = {
    color: status ? "green" : "red",
  };

  const selectBorderStyle = {
    borderColor: status ? "green" : "red",
  };
  return (
    <>
      {loading ? (
        <p>Updating...</p>
      ) : (
        <select
          id="status"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white"
          style={selectBorderStyle}
          value={status.toString()} // Set the value of the select element to the current status
          onChange={handleChange} // Call handleChange when the select value changes
        >
          <option value="true" selected={status === true}>
            APPROVED
          </option>
          <option value="false" selected={status === false}>
            PENDING
          </option>
        </select>
      )}
    </>
  );
}