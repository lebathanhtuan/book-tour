import * as types from "../constants/ActionTypes";

var initialState = [];

var internationalTours = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_INTERNATIONAL_TOURS:
            state = action.internationalTours;
            return state;     
        default: 
            return state;
    }
}

export default internationalTours;