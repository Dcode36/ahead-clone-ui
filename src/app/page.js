"use client";
import React,{useEffect} from 'react'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Carousel from '../components/carousel'
import Meet from '../components/meet'
import SelftImp from '../components/selfimp'
import Think from '../components/think'
import CalltoAction from '../components/callToaction'
import Work from '../components/work'
import Vacancies from '@/components/vacancies';
import Footer from '@/components/footer';
const page = () => {

  useEffect(()=>{
    AOS.init();
    (
      async ()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll()
      }
    )
  })

  return (
    <div>
  
      <Navbar/>
      <Hero />
      <Carousel />
      <Meet/>
      <SelftImp/>
      <Think/>
      <CalltoAction/>
      <Work/>
      <Vacancies/>
      <Footer/>
    </div>
  )
}

export default page
