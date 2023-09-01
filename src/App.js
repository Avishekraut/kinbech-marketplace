import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedDisProducts from './components/FeaturedDisProducts';
import Title from './components/Title';
import LatestUploads from './components/LatestUploads';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <section>
      <Nav />
      <Hero />
      <Categories />
      <Title content="Featured Ads"/>
      <FeaturedDisProducts />
      <Title content="Latest Uploads"/>
      <LatestUploads />
    </section>
      <Footer />
    </div>
  );
}

export default App;
