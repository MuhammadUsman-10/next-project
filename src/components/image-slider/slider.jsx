'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
    const images = [{image:"/image1.png", alt:"image1"},{ image:"/image2.png", alt:"image2"},{ image:"/image3.png", alt:"image3"}];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                if(prevImage === 2){
                    return 0;
                }
                return prevImage + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return(
        <>
            <div className="w-full bg-slate-400 p-4 flex gap-4 items-center justify-center">
                <div className="p-4">
                    {images.map((image, index) => {
                        <Image key={index} src={image.image} width={1000} height={1000} alt={`Slide-${index}`}
                        className={currentImage === index ? "block" : "hidden"} />
                    }
                    )}
                </div>
            </div>
            {/* <Swiper autoplay={true} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Image src="/image1.png" width={1000}   height={1000} alt="Slide-1" /></SwiperSlide>
                <SwiperSlide><Image src="/image2.png" width={1000} height={1000} alt="Slide-1" /></SwiperSlide>
                <SwiperSlide><Image src="/image3.png" width={1000} height={1000} alt="Slide-1" /></SwiperSlide>
            </Swiper> */}
        </>
    );
};

export default Slider;