import React from 'react';
import './App.css';
import './Template.css'
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
