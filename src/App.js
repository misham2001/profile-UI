import React from 'react';
import Navbar from './Component/Navbar';
import Homepage from './Component/Home';
import Skills from './Component/Skill';
import Projects from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
