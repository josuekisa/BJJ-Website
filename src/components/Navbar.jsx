import React from 'react'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {

const [showMenu, setShowMenu]=useState(false);
    return (
    <div className="  bg-amber-800  fixed top-3 z-50 right-2 left-2 shadow-lg ">
    <div className='  flex flex-row items-center justify-between '>
       <h1 className='text-4xl'> La Navbar</h1>
       <ul className='hidden sm:flex flex-row items-end gap-4' >
         <li>Histoire </li>
         <li>Regle</li>
         <li>soumision</li>
         <li> Fédération </li>
       </ul>
         <button
         className='block sm:hidden'
         onClick={()=>setShowMenu(!showMenu)}
         >
         { showMenu ?   <IoMdClose color='white' className='w-6 h-6 bg-black' /> :  <RxHamburgerMenu color='black' className='w-6 h-6 text-black' />}
         </button>

         </div>
         { showMenu && (
             <ul className='flex sm:hidden flex-col items-center mt-3 gap-4 text-black'>
               <li>Histoire </li>
               <li>Regle</li>
               <li>soumision</li>
               <li> Fédération </li>
             </ul>
         )

         }
       
        
    


    </div>
  )
}

export default Navbar