import * as types from "../constants/ActionTypes";

var initialState = [];

var domesticTours = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_DOMESTIC_TOURS:
            state = action.domesticTours;
            return state;     
        default: 
            return state;
    }
}

export default domesticTours;