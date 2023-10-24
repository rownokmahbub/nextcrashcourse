import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen">
      <img
        className="w-full max-w-3xl"
        loading="lazy"
        object-fit="cover"
        src="/404.png"
        alt="image"
      />
      <h1 className="text-red-600 dark:text-red-400 text-3xl font-bold">
        Page Not Found Go Back To Home
      </h1>
    </div>
  );
}
