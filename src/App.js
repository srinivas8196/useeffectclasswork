import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './components/Body/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <br></br>

      <Main />

      <br></br>
      <br></br>
      <Footer />
    </div>
   
  );
}

export default App;
