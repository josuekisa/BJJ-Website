import React from 'react'
import Navbar from '../components/Navbar'
import Jigoro from '../assets/jigoro.jpg'
import Maeda from '../assets/maeda.jpg'
import wp1 from '../assets/wp.jpg'


const Story = () => {
  return (
   
   
   <div className=' relative  h-screen w-full bg-cover bg-center bg-no-repeat  ' 
   style={{backgroundImage:`url(${wp1})`}}>
       
       
         <div className='absolute inset-0 bg-black/90 flex flex-col '>
         <div className='flex justify-center w-full max-w-screen-xl mx-auto px-4'>
        <h1 className='text-5xl font-bold py-6'>
          <span className='block text-red-600'>L'histoire</span>
          <span className='block text-gray-50'>Du JJB</span>
          </h1>
        </div>
        <div className='flex justify-center  w-full max-w-screen-xl mx-auto py-7 px-4'>
        <div className=' grid grid-cols-2 gap-x-4 '>   
             <div className='text-slate-200 text-xl' >
             <span className='block'>  Le Jiu-Jitsu Brésilien, ou JJB, </span> 
             <span className='block'> prend ses racines dans les</span> 
             <span className='block'>  Jujutsu japonais et le Judo. </span> 
             <span className='block'> Cet art martial a vu le jour</span> 
             <span className='block'>grace à l'arrivee de Mitsuyo</span> 
             <span className='block'>Maeda au Bresil au debut</span> 
             <span className='block'> du XXe siécle. Les Gracie,</span> 
             <span className='block'> une familie bresilienne,</span> 
             <span className='block'> ont alors adopté et adapté</span> 
             <span className='block'> ces techniques pour</span> 
             <span className='block'> développer leur propre</span> 
             <span className='block'> systeme de combat, mettant</span> 
             <span className='block'> traditions, d'innovations et</span> 
             <span className='block'> de compétitions, le JJB s'est</span> 
             <span className='block'> également imposé</span> 
             <span className='block'> mondialement, reconnu</span> 
             <span className='block'> pour ses valeurs de respect,</span> 
             <span className='block'> discipline et perséverance.</span> 
            </div>
            <div className="relative w-1 h-auto bg-red-600 px-1">
              <div className='absolute top-16 w-4 h-4 bg-white rounded-full -translate-x-1/2 left-1/2 '>  
              <img className='px-9 w-96' src={Maeda} alt="maeda" /></div>
           
             
              
              <div className='absolute top-2/4 w-4 h-4 bg-white rounded-full -translate-x-1/2 left-1/2 '></div>
              <div className='absolute top-3/4 w-4 h-4 bg-white rounded-full -translate-x-1/2 left-1/2 '></div>
            </div>
      </div>
      </div>
        </div>
        </div>
   
  )
}

export default Story