import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './component';
import Header from './component/header'
import CardOne from './component/cardOne';
import Card from './component/card';

function App() {
  return (
    <Router>
      <NavBar />
      <br/> <br/><br/> <br/>
      <Header />
      <CardOne/>
      <Card/>
    </Router>
  );
}

export default App;
