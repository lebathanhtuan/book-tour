import * as types from "../constants/ActionTypes";

var initialState = {};

var tourDetail = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_TOUR_DETAIL:
            state = action.tourDetail;
            return state;     
        default: 
            return state;
    }
}

export default tourDetail;