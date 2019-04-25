import React, { Component } from 'react';
import './OddsCalculator.css';
import {connect} from "react-redux"
import { CALCULATE } from '../../actions';
import { Number } from 'core-js';

class OddsCalculator extends Component {
  constructor(props){
     super(props);
     console.log(props.result)
     this.state = {result: props.result};
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
      <div className="OddsCalculator">
      <div className="basicProps">
        <div className="probability">
        <input type="number" placeholder="probabilidad 1" id="number1" />
          <input type="number" placeholder="probabilidad 2" id="number2" />
        </div>
        <div className="odds">
        <p>odd adjust : {this.props.probability.adjust.n1}</p>
        <p>odd adjust : {this.props.probability.adjust.n2}</p>
        </div>
        </div>
      <div className="yieldCalculate">
      <div className="textYieldCalculate">
      <p>Yield expected {this.props.yieldExpected}</p>
        <input type="number" placeholder="yield esperado" id="yieldExpected"/>
      </div>
        <div className="yieldResult">
        <p>odd at yield : {this.props.probability.expected.n1}</p>
        <p>odd at yield : {this.props.probability.expected.n2}</p>
         </div>
         </div>
        <button className="btnn" onClick = {() => calculador(this.props)} >calcular</button>
      </div>
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

//Funcion importante, para que solo se renderice el componente cuando cambie los datos que nos interesan
const mapStateToProps = state => ({
  probability : state.probability
})

const mapDispatchToProps = dispatch => ({
  calculateOperation(probability){
    //mando una accion
    dispatch({
      type: CALCULATE, prob: probability
    })
  }
})

//Manera de exportarlo sin ser un decorador
export default connect(mapStateToProps, mapDispatchToProps )(OddsCalculator);