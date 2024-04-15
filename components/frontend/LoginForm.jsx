"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../Form/SubmitButon";
import TextInput from "../Form/TextInput";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }); 
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData)
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        //if role = user => homepage
        //if role = supplier => onboarding 
        // sends users on different pages depending on their role
        const userRole = responseData.data.role
        if(role === "USER"){
          router.push("/");
        }else{
          router.push(`/onboarding/${responseData.data.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <TextInput 
        label="Email"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3 mt-8"
      />
      {emailErr && <small className="text-red-600">{emailErr}</small>}
      <TextInput 
        label="Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton 
        isLoading={loading}
        buttonTitle="Login"
        loadingButton="Please Wait"
        customClass="py-2 mb-3 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 w-full  text-white rounded-md"
      />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
        Don't have an accout?{" "}
        <Link
          href="/register"
          className="font-medium text-cyan-500 hover:underline "
        >
          Login
        </Link>
      </p>
    </form>
  );
}