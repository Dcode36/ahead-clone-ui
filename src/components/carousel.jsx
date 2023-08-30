"use client"
import React, { useRef, useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
const carousel = () => {
    return (
        <div>
            <div className="swiper-headings m-5  m-xs-0 position-relative">
                <h1 className='w-100 text-xs-center ' data-aos="fade-right">Does This Sound Familier...<img src="/assets/1.png"  alt="" />
                </h1>
            </div>

            <Swiper className="mySwiper" data-aos="fade-left" slidesPerView={3}>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">😠</div>
                    <p className='fw-bold'>You argue with your collegoes</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">🤨</div>
                    <p className='fw-bold'>You attend a class reunion</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card active'>
                    <div className="emoji fs-1">😳</div>
                    <p className='fw-bold text-white'>You Got promotion at work</p>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">😒</div>
                    <p className='fw-bold'>You are at a lively dinner party</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">😬</div>
                    <p className='fw-bold'>You hit dead end in a negotiation</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">😩</div>
                    <p className='fw-bold'>You are bored</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>
                <SwiperSlide className='swiper-card'>
                    <div className="emoji fs-1">😤</div>
                    <p className='fw-bold'>You are wanted the intern role</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore</p>
                </SwiperSlide>

            </Swiper>
        </div>

    )
}

export default carousel
