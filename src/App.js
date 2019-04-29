import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerTop from "./components/BannerTop/BannerTop"
import TipsterStats from "./components/TipsterStats/TipsterStats"
import FormPick from "./components/FormPick/FormPick"
import OddsCalculator from "./components/OddsCalculator/OddsCalculator"
import ListPicks from './components/ListPicks/ListPicks';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <BannerTop />
        <ListPicks />
         <TipsterStats />
         <FormPick />
         <OddsCalculator />
       
      </div>
    );
  }
}

export default App;
