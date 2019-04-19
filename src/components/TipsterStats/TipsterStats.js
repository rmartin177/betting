import React, { Component } from 'react';
import './TipsterStats.css';

class TipsterStats extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="TipsterStats">
        <table className="statsTable">
        <tbody>
        <tr>
        <th>Tipster</th>
        <th>Yield</th>
        <th>Profit</th>
        <th>Nº Picks</th>
        <th>AVG Stake</th>
        <th>Nº Picks</th>
        <th>AVG Stake</th>
        </tr>
        <tr>
          <td>pruebas</td>
          <td>pruebas</td>
          <td>pruebas</td>
          <td>pruebas</td>
          <td>pruebas</td>
          <td>pruebas</td>
          <td>pruebas</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default TipsterStats;