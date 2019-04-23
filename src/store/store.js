import { createStore } from "redux";
import { SAVE_OPERATION, CALCULATE } from "../actions";
import { calculate, saveOperation } from "../reducers/reducerOdds";

const reducer = (state, action) => {
    switch(action.type){
        case SAVE_OPERATION:
        return saveOperation(state, action);
        case CALCULATE:
        return calculate(state, action);
        default: return state;
    }
}

const initialState = {
    operation : [],
    probability : {
        adjust: {
            n1 : 0,
            n2 : 0
        },
        expected: {
            n1 : 0,
            n2 : 0
        }
    }
}

export default createStore(reducer, initialState);

//min 54