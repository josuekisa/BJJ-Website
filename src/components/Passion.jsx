import React from 'react'
import photo from '../assets/moi.jpeg'

const Passion = () => {
  return (
    <div className='flex  justify-center items-center  h-screen w-full   bg-[#1C1C1C] text-[#F5F5F5]'>
   
  
   <div className='grid grid-flow-col grid-rows-3'>
   <div className='row-span-3'>
        <img src={photo} alt="moi" className='w-72' />

        </div>
    
     <div className='col-span-2'>
        <h1 className='text-2xl'> Comment j'ai decouvert ce Sport</h1>
        </div>
    <div className='col-span-2 row-span-2'>
      <p className='text-xs'>En septembre 2023, j'ai fait une rencontre qui allait changer ma vision du sport et de la discipline : le Jiu-Jitsu Brésilien. <br />
         À l'origine, je cherchais un sport qui combine à la fois travail physique et mental, mais je ne savais pas encore que cette <br />
         recherche allait me mener à quelque chose d’aussi fascinant.  Un ami m’a parlé de cette discipline, m'expliquant qu’il s’agissait d’un art martial axé sur le grappling,<br />
          avec une grande importance accordée à la technique, à la stratégie, et à l'endurance. Curieux, j'ai décidé de m'y inscrire pour essayer.<br />
           Dès les premiers cours, j'ai été frappé par la complexité et l'intensité des mouvements, <br />
        mais aussi par l’esprit de camaraderie qui règne dans ce sport. Le fait qu’on puisse se battre tout en respectant son adversaire et en apprenant<br />
         ensemble a été un vrai coup de cœur. Aujourd'hui, après plusieurs mois de pratique, je peux dire que le JJB m'a non seulement permis de me surpasser, <br />
         mais aussi de développer une discipline mentale que je n'avais pas anticipée. C’est devenu bien plus qu’un simple sport : c’est une passion.</p>
        
         </div>
        </div>
    </div>
  )
}

export default Passion