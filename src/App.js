import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Hero from './components/Hero';
import Categories from './components/Categories';

const App = () => {
  return (
    <section>
    <div>
      <Nav />
      <Hero />
      <Categories />
    </div>
    </section>
  );
}

export default App;
