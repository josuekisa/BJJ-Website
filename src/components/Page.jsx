import React, { useState,useEffect} from 'react'
import 'animate.css';
import wp1 from '../assets/wp.jpg'

const Page = () => {
  
  const [showText,setShowText]= useState('');
  const [blurEffect,setBlurEffect]=useState('');
  const [hideText,setHideText]= useState('');

  

 

  useEffect(()=> {
   
   const handleScroll = () => {
        if (window.scrollY < 250) {
            setBlurEffect('blur-md')
            setShowText('BJJ FANATIQUE - Scroll down to learn more');
            setHideText(' ');
        }
        else {
            setBlurEffect('');
            setHideText('  animate__animated animate__fadeOutUp ');;
        }
    };
    window.addEventListener( 'scroll', handleScroll);
    
    return()=>{ 
        window.removeEventListener("scroll",handleScroll);
    };

},[]);

/*useEffect (()=>{

    const handleScroll = () => {
        if (window.scrollY = 200) {
            setShowText('');
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

}

},[]);*/


    return (
   <div className='relative h-screen w-screen'>
   
        <div
     className= {`absolute items-center h-screen w-full bg-cover bg-center bg-no-repeat transition duration-500 ease-in-out bg-fixed ${blurEffect} `}
     style={{ backgroundImage: `url(${wp1})` }}>
          

         </div>
       
        <div className={`absolute top-0 left-0 h-full w-full flex justify-center items-center `}>
       <h1 className={`text-3xl font-extrabold text-black text-center transition duration-700 ease-out ${hideText} `}> {showText} </h1>
        
       
       
        </div>

        </div>
     


    
  )
}

export default Page