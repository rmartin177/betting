import React, { Component } from 'react';
import './ListPicks.css';

class ListPicks extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componenthidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componenthidUpdate(){}

  render() {
    return (
      <div className="pickStats">
      <table className="tableStats">
      <tr>
      <th>tipster</th><th>torneo</th><th>evento</th><th>categoria</th><th>mercado</th><th>pronostico</th><th>stake</th><th>cuota</th><th>profit</th><th>fecha</th>
      </tr>
      </table>
      </div>
    );
  }
}

export default ListPicks;