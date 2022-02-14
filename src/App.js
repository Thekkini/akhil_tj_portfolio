import React from 'react';
import BackToTop from 'react-custom-back-to-top-button';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='bg-myLight min-h-screen select-none '>
      <BrowserRouter>
        <ScrollToTop>
          <Header  />
          <Switch>
            <Route exact path='/' component={Home}>
              <Home />
            </Route>
            <Route path='/about' component={About}>
              <About />
            </Route>
          </Switch>
          <BackToTop
            style={{
              bottom: '20px',
              right: '30px',
              backgroundColor: '#F6490D',
              color: '#FAF9F0',
              filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
            }}
          />
          <div>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
