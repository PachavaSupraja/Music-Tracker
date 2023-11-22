import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import {Provider} from './Context';
import Lyrics from './components/tracks/Lyrics';
function App() {
  return (
    <Provider>
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
         <Route path="/" element={<Index/>} />
         <Route path="/lyrics/track/:id" element={<Lyrics/>}/>
     </Routes>
   
  
 </BrowserRouter>
 </Provider>
      
   
  );
}

export default App;
