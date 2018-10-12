import * as types from "../constants/ActionTypes";

var initialState = [];

var places = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_PLACES:
            state = action.places;
            return state;     
        default: 
            return state;
    }
}

export default places;