import React from 'react'

const Information = () => {
  return (
    <div    className="flex flex-col justify-center items-center  h-screen w-full   bg-[#1C1C1C] text-[#F5F5F5] '" >

      <h1 className='text-4xl font-stretch-condensed p-1 '>
      <span className='block  text-center'> “  Bonjour et bienvenue sur mon site consacré a une de mes passions, le Jiu Jitsu Brésilien. </span> 
        <span className='block text-center'> sur ce site je vous compter l'histoire de ce sport , vous donnez les regles , et les </span> 
       <span className='block text-center'> Différentes fédération qui existent ”.</span>
      </h1>
     <button className='bg-[#E63946] rounded-md my-10 text-2xl p-2'>
        Découvrir L'hsitoire 
     </button>


    </div>

  )
}

export default Information