// App.jsx - Version corrigée
import React from 'react';
import './App.css'
import RoundOne from './components/roundDesigns/RoundOne';
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";
import Home from './Home';

function App() {
  return (
    <>
      <div className='w-full min-h-screen md:h-screen font-bodyfont text-textColor bg-black relative overflow-auto md:overflow-hidden'>
        <div className='w-full h-full mx-auto flex justify-center items-center p-4 lg:p-0'>
          <Home />
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-0'>
          <RoundOne />
          <RoundTwo />
          <RoundThree />
          <RoundFour />
          <RoundFive />
        </div>
      </div>
    </>
  )
}

export default App