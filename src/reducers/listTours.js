import * as types from "../constants/ActionTypes";

var initialState = [];

var listTours = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_LIST_TOURS:
            state = action.listTours;
            return state;     
        default: 
            return state;
    }
}

export default listTours;