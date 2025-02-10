import React from 'react'
import Navbar from './Navbar'
import Jigoro from '../assets/jigoro.jpg'
import Maeda from '../assets/maeda.jpg'


const Story = () => {
  return (
    <div className=' flex items-center justify-center bg-[#1C1C1C] h-screen w-full'>
       
      
        <div>
          <h1 className='text-4xl text-white text-center mb-3'>Histoire du BJJ</h1>
         
           <div className='flex justify-center items-center gap-4 mb-7'>
            <img src={Jigoro} alt='' className='w-64 ' />
            <img src={Maeda} alt='' className='w-52' />
            </div>
   
        </div>
    </div>
  )
}

export default Story