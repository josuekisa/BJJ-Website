import React from 'react'
import photo from '../assets/moi.jpeg'

const Passion = () => {
  return (
    <div className='flex  justify-center items-center  h-screen w-full   bg-[#1C1C1C] text-[#F5F5F5]'>
   
  
   <div className='grid grid-flow-col rounded-xl  bg-[#343434a9] p-4'>
   
   <div className='row-span-3 mr-4'>
        <img src={photo} alt="moi" className='w-72' />
   </div>
        
    
     <div className='col-span-2'>
        <h1 className='text-2xl text-[#E63946] font-bold'> Comment j'ai decouvert ce Sport ? </h1>
        </div>
    <div className='col-span-2 row-span-2 leading-8 '>
      <span className='block'>En septembre 2023, j'ai fait une rencontre qui allait changer ma vision du sport et de la discipline : le Jiu-Jitsu Brésilien. </span>
         <span className='block'>À l'origine, je cherchais un sport qui combine à la fois travail physique et mental, mais je ne savais pas encore que cette </span>
         <span className='block'> recherche allait me mener à quelque chose d’aussi fascinant.  Un ami m’a parlé de cette discipline, m'expliquant qu’il s’agissait </span>
         <span className='block'>  d’un art martial axé sur le grappling, avec une grande importance accordée à la technique, à la stratégie, et à l'endurance. Curieux,</span>
         <span className='block'>  j'ai décidé de m'y inscrire pour essayer. Dès les premiers cours, j'ai été frappé par la complexité et l'intensité des mouvements, </span>
         <span className='block'> mais aussi par l’esprit de camaraderie qui règne dans ce sport. Le fait qu’on puisse se battre tout en respectant son adversaire et en apprenant</span>
         <span className='block'> ensemble a été un vrai coup de cœur. Aujourd'hui, après plusieurs mois de pratique, je peux dire que le JJB m'a non seulement permis de me surpasser, </span>
         <span className='block'>  mais aussi de développer une discipline mentale que je n'avais pas anticipée. C’est devenu bien plus qu’un simple sport : c’est une passion.</span>
        
         </div>
        </div>  
    </div>
  )
}

export default Passion