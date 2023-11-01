import React from 'react'
import mountainImagePng from '../assets/mountain-hameeducPROJ 1.png'
import rectangle from '../assets/Rectangle 29.png'
import  profileImg from '../assets/Ellipse 4.png'
export const LeaderBoard = () => {
  return (
    <div>
        <div className='flex gap-11'>
            <img src={mountainImagePng} className='w-[30em] '></img>
            <h1 className='text-primary  text-4xl font-bold w-[300px] mt-[4em]'>be the #1 in your class</h1>
        </div>
        <img className="flex align-middle mt-[-10em] absolute " src={rectangle}/>
        <div className='SingleRate  text-white relative'>
          <img className='rounded-full bg-["../assets/Ellipse 4.png"] w-52 h-52 left-3' src={profileImg}/>
          <h2 className='text-3xl font-semibold leading-normal mt-9'>Hermez abderrahim</h2>
          <div className='text-3xl font-semibold leading-normal mt-9'>Score : 12</div>
        </div>
        
        
    </div>
  )
}
