import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Page from './components/Page.jsx'
import Information from './components/Information.jsx'
import Passion from './components/Passion.jsx'
import Story from './components/Story.jsx'
import Rules from './components/Rules.jsx'
import { BrowserRouter , Route , Routes} from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route exact path="/" element={
       <>
       <Page/>
       <Information />
       <Passion />
         
         </>
       } />
       <Route exact path='/Story' element={<Story/>}/>
       <Route exact path='/Rules' element={<Rules/>}/>

     </Routes>
   </BrowserRouter>
    
  </StrictMode>,
)
