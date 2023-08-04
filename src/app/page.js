"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const generateProfilePicture = () => {
    router.push(`/profile?name=${encodeURIComponent(name)}`);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      router.push(`/profile?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-500">
      <h1 className="md:text-4xl text-2xl text-center font-bold py-9 text-white">
        Welcome to Profile Picture Generator
      </h1>
      <input
        type="text"
        value={name}
        onKeyDown={handleEnter}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={generateProfilePicture}
        className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Generate
      </button>
    </div>
  );
}
