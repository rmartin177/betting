import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerTop from "./components/BannerTop/BannerTop"
import TipsterStats from "./components/TipsterStats/TipsterStats"
import FormPick from "./components/FormPick/FormPick"
import OddsCalculator from "./components/OddsCalculator/OddsCalculator"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
        </header>
        <body>
        <BannerTop />
         <TipsterStats />
         <FormPick />
         <OddsCalculator />
        </body>
      </div>
    );
  }
}

export default App;
