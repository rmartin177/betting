import React, { Component } from 'react';
import './FormPick.css';

class FormPick extends Component {
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
     <div></div>
    );
  }
}

const calculador = props => {
  let n1 = document.getElementById("number1");
  let n2 = document.getElementById("number2");
  let n3 = document.getElementById("yieldExpected");
  let result1S = (1/Number(n1.value)*100).toFixed(2);
  let result2S = (1/Number(n2.value)*100).toFixed(2);
  let result1 = parseFloat(result1S);
  let result2 = parseFloat(result2S);
  let result3 = parseFloat((1/Number(n1.value)*(100+Number(n3.value))).toFixed(2));
  let result4 = parseFloat((1/Number(n2.value)*(100+Number(n3.value))).toFixed(2));
  let obj = [
     result1,
    result2,
    result3,
    result4
  ]
  props.calculateOperation(obj)
}

export default FormPick;