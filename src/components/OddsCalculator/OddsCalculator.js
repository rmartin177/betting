import React, { Component } from 'react';
import './OddsCalculator.css';
import {connect} from "react-redux"
import { CALCULATE } from '../../actions';

class OddsCalculator extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  mapStateToProps = state => ({
    result : state.result
  })

  mapDispatchToProps = dispatch => ({
    calculateOperation(result){
      dispatch({
        type: CALCULATE, resut
      })
    }
  })

  render() {
    return (
      <div className="OddsCalculator">
        <input type="number" placeholder="probabilidad 1" id="number1" />
        <input type="number" placeholder="probabilidad 2" id="number2" />
        <p>resultado: {props.result}</p>
      </div>
    );
  }
}

export default connect()(OddsCalculator);