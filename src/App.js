import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div className="App">
        <Nav />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
