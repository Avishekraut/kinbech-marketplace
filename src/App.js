import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedDisProducts from './components/FeaturedDisProducts';
import Title from './components/Title';

const App = () => {
  return (
    <section>
    <div>
      <Nav />
      <Hero />
      <Categories />
      <Title content="Featured Ads"/>
      <FeaturedDisProducts />
    </div>
    </section>
  );
}

export default App;
