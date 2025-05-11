import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Page from './components/Page.jsx';
import Information from './components/Information.jsx';
import Passion from './components/Passion.jsx';
import Story from './Pages/Story.jsx';
import Rules from './Pages/Rules.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Page />
              <Information />
             
              
            </>
          }
        />
        <Route path="/Story" element={<Story />} />
        <Route path="/Rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}
