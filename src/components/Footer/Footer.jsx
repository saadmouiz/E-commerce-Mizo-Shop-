import React from 'react'
import logo from "../../Images/logo_mizo_shop-removebg-preview.png"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='bg-black  text-white w-full'>

      <div className='px-12 md:px-36 mt-17'>
        <img src={logo} className='py- w-[500px]' alt="" />
        <div className='md:flex justify-between'>
            <div className='flex flex-col'>
        <p className='md:w-[530px] md:text-start text-center text-gray-400'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className='text-gray-400 md:text-start text-center mt-16 py-8'>Copyright 2024. All Are Rights Reserved</p>
        </div>

      <div className='flex md:justify-end justify-center cursor-pointer gap-6 text-white'>
        <AiOutlineFacebook size={36}/> 
        <AiOutlineInstagram size={36}/>
        <AiOutlineTwitter size={36}/>
      </div>
      

      </div>
      </div>

    </footer>
  )
}

export default Footer
