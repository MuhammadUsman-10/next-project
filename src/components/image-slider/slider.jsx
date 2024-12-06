'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
    return(
        <>
            <Swiper autoplay={true} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Image src="/image1.png" width={1000}   height={1000} alt="Slide-1" /></SwiperSlide>
                <SwiperSlide><Image src="/image2.png" width={1000} height={1000} alt="Slide-1" /></SwiperSlide>
                <SwiperSlide><Image src="/image3.png" width={1000} height={1000} alt="Slide-1" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;