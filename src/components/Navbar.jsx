import React from 'react'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo from '../assets/BJJ.svg'


const Navbar = () => {

const [showMenu, setShowMenu]=useState(false);
    return (
    <div className="  bg-[#1e3b8a0a]  fixed top-3 z-50 right-2 left-2 shadow-lg ">
    <div className='  flex flex-row items-center justify-start '>
       
       <Link to='/'><img src={Logo}alt='' className='w-28' /></Link>
       <ul className='hidden sm:flex flex-row items-end gap-4  text-[#F5F5F5] ' >
        <Link to="/Story"> Histoire</Link>
        <Link> <li>Regle</li></Link>
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
             <ul className='flex sm:hidden flex-col items-center mt-3 gap-4 text-black  text-[#F5F5F5] '>
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