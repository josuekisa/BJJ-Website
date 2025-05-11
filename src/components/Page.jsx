import React, { useState,useEffect} from 'react'
import 'animate.css';
import wp1 from '../assets/wp.jpg'
import wp2 from '../assets/jjb-training.jpg'

const Page = () => {
  
  const [showText,setShowText]= useState('');
  const [blurEffect,setBlurEffect]=useState('blur-xs');
  const [hideText,setHideText]= useState('');
  

  

 

  useEffect(()=> {
   
   const handleScroll = () => {
        if (window.scrollY < 300) {
            setBlurEffect('blur-lg text-white')
            setShowText('Faixa-Preta');
            
            setHideText(' ');
        }
        else {
            setBlurEffect('blur-xs');
            setHideText('  animate__animated animate__fadeOutUp ');;
        }
    };
    window.addEventListener( 'scroll', handleScroll);
    
    return()=>{ 
        window.removeEventListener("scroll",handleScroll);
    };

},[]);

return (
   <div className='relative h-screen w-screen'>
   
        <div
     className= {`absolute items-center h-screen w-full bg-cover bg-center bg-no-repeat transition duration-500 ease-in-out bg-fixed  `}
     style={{ backgroundImage: `url(${wp2})` }}>
          <div className="absolute inset-0 bg-black/70"></div>


         </div>
       
        <div className={`absolute top-0 left-0 h-full w-full flex justify-center items-center `}>
       <h1 className={`text-9xl font-extrabold text-gray-100  text-center transition duration-700 ease-out ${hideText} `}> {showText} </h1>
        
       
       
        </div>

        </div>
     


    
  )
}

export default Page