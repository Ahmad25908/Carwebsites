'use client'

import React from 'react'
// import Banner from '@/components/banner'
import MenuPage from '@/components/menupage'
import CarSlider from '@/components/carslider';
// import Navbar from '@/components/navbar';
import LogoSlider from '@/components/logoslider';
// import HomePage from '@/components/pages/homepage';


export default function MenuPageWrapper() {
  return (
    <div className="min-h-screen bg-white">
      <CarSlider/>
      <LogoSlider/>
      <MenuPage />
      {/* <HomePage/> */}
    </div>
  )
}
