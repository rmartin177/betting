import { createStore } from "redux";
import { SAVE_OPERATION, CALCULATE } from "../actions";
import { calculate, saveOperation } from "../reducers/reducerOdds";

const reducer = (state, action) => {
    switch(action.type){
        case SAVE_OPERATION:
        return saveOperation(state, action);
        case CALCULATE: calculate(state, action);
        default: return state;
    }
}

const initialState = {
    operation = [],
    result = 0
}

export default createStore(reducer, initialState);

//min 54