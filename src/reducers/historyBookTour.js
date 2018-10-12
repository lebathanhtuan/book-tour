import * as types from "../constants/ActionTypes";

var initialState = [];

var historyBookTour = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_HISTORY:
            state = action.history;
            return state;     
        default: 
            return state;
    }
}

export default historyBookTour;