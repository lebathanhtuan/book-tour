import * as types from "../constants/ActionTypes";

var initialState = [];

var comments = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_COMMENTS:
            state = action.comments;
            return state;     
        default: 
            return state;
    }
}

export default comments;