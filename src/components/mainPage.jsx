import { Cards } from 'phosphor-react'
import React from 'react'
import { Navbar } from './navbar'
import {Card} from './card'
import  ArcadeImage from '../assets/ArcadeIlustration.png'
import TugGame from '../assets/tugWarPng.png'
 
export const MainPage = () => {
  return (
    
  <div className='overflow-hidden'>
    <Navbar/>
    <div className=' flex gap-36 flex-1 '>
     
      <div className='text-left ml-24 mt-[8rem]'>
        <div className='w-[600px]'>
           <h1 className=' font-bold text-primary text-5xl leading-normal'>Learning made 
            <span className='mr-3 ml-3'>easy</span>
             <br></br>
             and
           <span className='ml-3 '>Fun</span>
           </h1>
        </div>
       <button className='w-[12rem] h-[4rem] bg-primary hover:bg-[#05002e] rounded-[20px] text-white text-center font-bold text-2xl mt-9 '>Get started</button>
      </div>
      
        <div className=''>
          <div className='w-[923px] h-[732px] transform rotate-45 flex-shrink-0 rounded-[30px] bg-gradient-to-t from-blue-900 to-blue-400 relative'></div>
          <img src={ArcadeImage} className='absolute right-44 top-20 w-[450px]'/>
        </div>
    </div>




    <div className=' flex gap-44 ml-[-550px] mt-16'>
        <div className=''>
           <img src={TugGame} className='absolute left-[1rem] z-10'/>
          <div className='w-[923px] h-[732px] transform rotate-45 flex-shrink-0 rounded-[30px] bg-gradient-to-t from-blue-900 to-blue-400 overflow-x-hidden relative'></div>
        </div>
      <div className='text-left ml-24 mt-[20rem]'>
        <div className='w-[600px]'>
           <h1 className=' font-bold text-primary text-5xl leading-normal'>be the first amoung your
            <span className='mr-3 ml-3'>teamates</span>
             <br></br>
             in the
           <span className='ml-3 '>LeaderBoard</span>
           </h1>
        </div>
       <button className='min-w-[14rem] h-[4rem] inline-block bg-primary hover:bg-[#05002e] rounded-[20px] text-white text-center font-bold text-2xl mt-9 '>Leader Board</button>
      </div>
      
    </div>

      <div className='gameSectioStart w-[180px] h-[180px] mt-[300px] ml-[100px] rounded-[30px] bg-gradient-to-t from-blue-900 to-blue-400 rotate-45 flex justify-center '><div className=' rotate-[-45deg] text-center pt-[55px] rounded text-white text-5xl font-semibold'>games</div></div>
   
    <div className=' mt-[-1200px] bg-gradient-to-b from-white via-blue-200 to-blue-600  '>
      <div className='blue pt-[1400px] flex gap-12 flex-wrap justify-center'>
        <Card/>
        <Card/>
        <Card/>
      </div>
        
          
    </div>
  </div>
    
  )
}
