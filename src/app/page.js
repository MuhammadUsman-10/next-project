import React from "react";
import Slider from "@/components/image-slider/slider";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="w-full p-4 flex gap-4 flex-col items-center justify-center">
        <p>Welcome to Next Project</p>
        <Slider className="p-4" 
        images={["/image1.png", "/image2.png","/image3.png"]}
        />
        <div><Image src="/image1.png" width={200} height={200} alt="haah" /></div>
      </main>
    </div>
  );
}
