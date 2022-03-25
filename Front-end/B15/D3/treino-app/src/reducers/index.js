import { combineReducers } from "redux";
import { SUBMIT_INFO } from "../actions";

const INITIAL_STATE = {
    info: {}
};

const myReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SUBMIT_INFO:
        return {
          ...state,
          info: action.info,
        }
      default: 
        return state;
    }
}

const rootReducer = combineReducers({ myReducer })

export default rootReducer;