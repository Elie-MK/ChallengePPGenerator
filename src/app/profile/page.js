"use client";

import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const searchParams = useSearchParams()
  const [name, setName]=useState(searchParams.get('name'))

  

  const avatar = createAvatar(lorelei, {
    seed: name,
  }).toDataUriSync();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  
        
        <h2 className="text-2xl font-bold">Your Generated Profile Picture: {name}</h2>
      <img src={avatar} alt="Avatar" className="w-60" />;
     
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Go Back
      </Link>
        
      
    </div>
  );
}
