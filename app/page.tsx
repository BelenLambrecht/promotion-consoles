"use client"

import React from 'react'

function HomePage() {
  return (
    <div id='PromotionContainer' className='flex h-full'>
      <div className='flex-[1] bg-green-700 flex items-center justify-center hover-effect relative'>
        <div className='image-container'>
          <img src="/images/xbox.jpg" alt="" className='images'/>
        </div>
        <h1 className='text-white text-5xl text-center text-nowrap absolute top-36 font-bold'>Xbox Series X</h1>
        <button className='bg-transparent hover:bg-green-700 whitespace-nowrap border-3 border-white py-6 px-12 absolute'>BUY NOW</button>
      </div>
      <div className='flex-[1] bg-blue-700 flex justify-center items-center hover-effect relative'>
        <div className='image-container'>
          <img src="/images/ps5.webp" alt="" className='images'/>
        </div>
        <h1 className='text-white text-5xl text-center text-nowrap z-0 absolute top-36 font-bold'>PlayStation 5</h1>
        <button className='bg-transparent hover:bg-blue-700 border-3 whitespace-nowrap border-white py-6 px-12 absolute'>BUY NOW</button>
      </div>
    </div>
  )
}

export default HomePage
