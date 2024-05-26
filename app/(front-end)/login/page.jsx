import Image from "next/image";
import photo1 from "../../../public/photo1.jpg"
import LoginForm from "@/components/frontend/LoginForm";



export default function Login() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="min-h-screen flex justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" flex rounded-lg shadow-2xl dark:border max-w-4xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="w-1/2 sm:block hidden">
            <Image src={photo1} alt="Photo 1" className="rounded-l-lg object-cover h-full"/>
            <div className="absolute top-1/2 pl-8 text-white">
              <h1 className=" text-5xl font-medium">Welcome back!</h1>
            </div>
            </div>  
            <div className="sm:w-1/2 p-16">
            <div className="text-xl font-bold mb-8 text-neutral-600 dark:text-neutral-200">Login</div>
            <LoginForm role="USER" className="flex flex-col"/>
            </div>
        </div>
      </div>
    </section>
  );
}