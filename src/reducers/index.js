import { combineReducers } from "redux";
import hotTours from "./hotTours";
import domesticTours from "./domesticTours";
import internationalTours from "./internationalTours";
import listTours from "./listTours";
import tourDetail from "./tourDetail";
import comments from "./comments";
import places from "./places";
import users from "./users";
import historyBookTour from "./historyBookTour";

const myReducer = combineReducers({
    hotTours,
    domesticTours,
    internationalTours,
    listTours,
    tourDetail,
    comments,
    places,
    users,
    historyBookTour
});

export default myReducer;