"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../Form/SubmitButon";
import TextInput from "../Form/TextInput";

export default function RegisterForm({role = "USER"}) {
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
        //if role = user => Shoppage
        //if role = supplier => onboarding 
        // sends users on different pages depending on their role
        const userRole = responseData.data.role
        if(role === "USER"){
          router.push("/aboutUs");
        }else{
          router.push('/verify-email');
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
        label=""
        name="role"
        register={register}
        errors={errors}
        type="hidden"
        defaultValue={role}
        className="sm:col-span-2 mb-3"
      />
      <TextInput 
        label="Name"
        name="name"
        register={register}
        errors={errors}
        type="text"
        className="sm:col-span-2 mb-3"
      />
      <TextInput 
        label="Email"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
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
        buttonTitle="Register"
        loadingButton="Please Wait"
        customClass="py-2 mb-3 bg-black bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 w-full  text-white rounded-md"
      />

    <div className="flex justify-between gap-2">
      <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-pink-500 hover:underline "
          >
            Login
          </Link>
        </p>
        {role==='USER'?(        
        <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 mt-2">
          Sell now{" "}
          <Link
            href="/register-supplier"
            className="font-medium text-pink-500 hover:underline "
          >
            here
          </Link>
        </p>):(
        <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 mt-2">
        Nothing to sell?{" "}
        <Link
          href="/register"
          className="font-medium text-pink-500 hover:underline "
        >
          Register here
        </Link>
      </p>
        )}
    </div>
    </form>
  );
}