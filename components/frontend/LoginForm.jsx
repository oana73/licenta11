"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    try {
      setLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
      } else {
        // Sign-in was successful
        toast.success("Login Successful");
        reset();
        router.push("/aboutUs");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-300 mb-2"
        >
          Your email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 p-2 bg-transparent text-neutral-600 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 placeholder:text-neutral-400 focus:ring-0.5 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6 "
          placeholder="Type your email"
          required=""
        />
        {errors.email && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-neutral-600 dark:text-neutral-300 mb-2 mt-6"
        >
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-md border-0 p-2 bg-transparent text-neutral-600 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 placeholder:text-neutral-400 focus:ring-0.5 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6 mb-12"
          required=""
          placeholder="Type your password"
        />
        {errors.password && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
      </div>
      <div >
        {loading ? (
          <button
            disabled
            type="button"
            className="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 inline-flex items-center"
          >
            Signing you in please wait...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Login
          </button>
        )}
      </div>
      <div className="mt-4 text-xs">
        <p className=" font-light text-neutral-500 dark:text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/register"
            className="text-pink-600 hover:underline dark:text-pink-500"
          >
            Sign Up
          </Link>
        </p>
        <Link
            href="/forgot-password"
            className="shrink-0 text-pink-600 hover:underline dark:text-pink-500"
          >
            Forgot Password
        </Link>
      </div>
    </form>
  );
}