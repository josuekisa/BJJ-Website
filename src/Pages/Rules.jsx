import React from 'react'
import wp1 from '../assets/wp.jpg'
import { LuShieldCheck } from "react-icons/lu";



const Rules = () => {
  return (
    <div className=' relative  h-screen w-full bg-cover bg-center bg-no-repeat  ' 
    style={{backgroundImage:`url(${wp1})`}}>
     <div className=' absolute inset-0 bg-black/60'> 
          
        <div className='flex flex-col items-center py-3'>

          <h1 className='  font-bold text-5xl'>
            <span className='block text-gray-50'> Les </span>
            <span className='block text-red-600'>  Regles   </span>
          </h1> 
           <div className='grid grid-cols-2'>
           <LuShieldCheck className='text-amber-300 text-9xl'/>
          <div className='text-gray-50 text-2xl'>
            <span className='block'>4 points : montée en garde </span>
            <span className='block'>3 points : montée (mount)</span>
            <span className='block'>4 points : prise de dos (back take)</span>
            <span className='block'>2 points : amenée au sol (takedown)</span>
          </div>
           </div>    
        </div>
      </div>
        </div>
  )
}

export default Rules