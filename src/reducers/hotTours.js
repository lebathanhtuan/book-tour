import * as types from "../constants/ActionTypes";

var initialState = [];

var hotTours = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_HOT_TOURS:
            state = action.hotTours;
            return state;     
        default: 
            return state;
    }
}

export default hotTours;