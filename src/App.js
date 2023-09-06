import React from 'react';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
    <section>
      {/* <Landing/> */}
      {/* <Signup /> */}
      <Login />
    </section>
      <Footer />
    </div>
  );
}

export default App;
