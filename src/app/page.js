import React from "react";
import Slider from "@/components/slider";
// import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <main>
        <div className="w-full bg-slate-400 p-4 flex flex-col-reverse lg:flex-row gap-4 items-center justify-center">
          <Slider className="p-4" 
          />
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-6xl font-serif font-semibold">Next Level Food for NextLevel Foodies</h1>
            <p className="text-3xl font-serif font-semibold">Taste & share food from all over the world.</p>
            <div className="flex flex-col md:flex-row gap-3">
              <Link href="/meals" className="text-gradient-to-r from-orange-500 to-orange-400 p-2 rounded-md">Order Now</Link>
              <Link href="/community" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-2 rounded-md">Join Community</Link>  
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
