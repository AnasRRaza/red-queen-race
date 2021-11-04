import React from 'react';
import './App.css';
import Backgrounds from './Components/Backgrounds';
import Earth from './Components/Earth';
import Foregrounds from './Components/Foregrounds';
import Sky from './Components/Sky';

const App = () => {


  return (
    <div className="wrapper">
      <Sky />
      <Earth />
      <Foregrounds />
      <Backgrounds />
    </div>
  );
}

export default App;
