import React from "react";
import Slider from "@/components/image-slider/slider";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <main>
        <div className="w-full bg-slate-400 p-4 flex gap-4 items-center justify-center">
          <Slider className="p-4" 
          />
          <div className="items-center">
            <h1 className="text-3xl font-serif font-semibold">Next Level Food for NextLevel Foodies</h1>
            <p className="text-3xl font-serif font-semibold">Taste & share food from all over the world.</p>
            <button className="bg-slate-500 text-white p-2 rounded-md">Order Now</button>
            
          </div>
        </div>
      </main>
    </div>
  );
}
