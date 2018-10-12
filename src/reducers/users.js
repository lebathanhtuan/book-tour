import * as types from "../constants/ActionTypes";

var initialState = [];

var users = (state = initialState, action) => {
    switch(action.type){
        case types.GET_USERS:
            state = action.users;
            return state;     
        default: 
            return state;
    }
}

export default users;