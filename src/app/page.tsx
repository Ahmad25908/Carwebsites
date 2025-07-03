import React from 'react';
// import HomePage from '@/components/pages/homepage';
import CarSlider from '@/components/carslider';
import Navbar from '@/components/navbar';
import LogoSlider from '@/components/logoslider';
import CarMenuPage from '@/components/menupage';
// import Model from './model/page'
function Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Navbar Section */}
      <Navbar />

      {/* Optional spacing or styling between Navbar and CarSlider */}
      <div className="py-4" />  {/* You can adjust the padding as needed */}

      {/* CarSlider Section */}

      <CarSlider />
      <LogoSlider/>
      <CarMenuPage/>
      <main>
        {/* HomePage Component */}
        {/* <HomePage /> */}
      </main>
    </div>
  );
}

export default Page;
