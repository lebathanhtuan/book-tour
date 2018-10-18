import * as types from "./../constants/ActionTypes";
import axios from 'axios';

export const fetchHotTours = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/tours?hot=1&_start=0&_end=6')
        .then(response => {
            dispatch({
                type: types.SHOW_HOT_TOURS, 
                hotTours: response.data
            })
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showDomesticTours = (domesticTours) => {
    return{
        type: types.SHOW_DOMESTIC_TOURS, 
        domesticTours
    }
}
export const fetchDomesticTours = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/tours?type=0&_start=0&_end=6')
        .then(response => {
            dispatch(showDomesticTours(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showInternationalTours = (internationalTours) => {
    return{
        type: types.SHOW_INTERNATIONAL_TOURS, 
        internationalTours
    }
}
export const fetchInternationalTours = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/tours?type=1&_start=0&_end=6')
        .then(response => {
            dispatch(showInternationalTours(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showListTours = (listTours) => {
    return{
        type: types.SHOW_LIST_TOURS, 
        listTours
    }
}
export const fetchListTours = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/tours')
        .then(response => {
            dispatch(showListTours(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showTourDetail = (tourDetail) => {
    return{
        type: types.SHOW_TOUR_DETAIL, 
        tourDetail
    }
}
export const fetchTourDetail = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/tours/'+id)
        .then(response => {
            dispatch(showTourDetail(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showPlaces = (places) => {
    return{
        type: types.SHOW_PLACES, 
        places
    }
}
export const fetchPlaces = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/places')
        .then(response => {
            dispatch(showPlaces(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const getUsers = (users) => {
    return{
        type: types.GET_USERS, 
        users
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/users')
        .then(response => {
            dispatch(getUsers(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};
export const addUsers = (userName, password, fullName, email) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/users', {
            userName: userName,
            password: password,
            fullName: fullName,
            email: email,
        })
        .then(() => {
            dispatch(fetchUsers())
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showComments = (comments) => {
    return{
        type: types.SHOW_COMMENTS, 
        comments
    }
}
export const fetchComments = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/comments')
        .then(response => {
            dispatch(showComments(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addComment = (idTour, name, time, cmt) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/comments',{
            idTour: idTour, 
            name: name, 
            time: time, 
            cmt: cmt
        })
        .then(response => {
            dispatch(fetchComments(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const showHistory = (history) => {
    return{
        type: types.SHOW_HISTORY, 
        history
    }
}

export const fetchHistory = (userName) => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/historyBookTour?userName='+userName)
        .then(response => {
            dispatch(showHistory(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addHistory = (idTour, userName, timeTour, guest, price, timeBook) => {
    return () => {
        return axios.post('http://localhost:3001/historyBookTour',{
            idTour: idTour, 
            userName: userName,
            timeTour: timeTour, 
            guest: guest, 
            price: price,
            timeBook: timeBook
        })
        .catch(error => {
            throw(error);
        });
    };
};