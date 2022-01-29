import React from 'react';
import BackToTop from 'react-custom-back-to-top-button';
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-myLight min-h-screen select-none px-[16px] md:px-[160px]'>
      <Home />
      <BackToTop
        style={{
          bottom: '20px',
          right: '30px',
          backgroundColor: '#fff',
          color: '#F6490D',
          filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
        }}
      />
    </div>
  );
}

export default App;
