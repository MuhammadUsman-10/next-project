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
          <div>
            <p className="text-3xl font-serif font-semibold">Welcome to Next Project</p>
          </div>
          {/* <div><Image src="/image1.png" width={200} height={200} alt="haah" /></div> */}
        </div>
      </main>
    </div>
  );
}
