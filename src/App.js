import React from 'react';
import Projects from './components/Projects';
import Home from './pages/Home';

function App() {
  return (
    <div className='min-h-screen bg-myLight px-[16px] md:px-[160px]'>
      <Home />
      <Projects />
    </div>
  );
}

export default App;
