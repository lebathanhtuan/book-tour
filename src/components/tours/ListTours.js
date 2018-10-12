import React, { Component } from 'react';
import ListTourItem from './ListTourItem';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class ListTours extends Component {
    componentDidMount() {
        this.props.showListTours();
        this.props.showPlaces();
    }
    render() {
        var { match } = this.props;
        var id = match.params.id;
        var { listTours } = this.props;
        var { places } = this.props;
        if(id === "hot-tour"){
            var titleList = <h2>Hot Tours</h2>;
            var showListTours = listTours.map((tour, index) => {
                if(tour.hot === 1){
                    return(
                        <ListTourItem key={index} tour={tour}/>
                    )
                }
            });
        }else if(id === "trong-nuoc"){
            var titleList = <h2>Du lịch trong nước</h2>
            var showListTours = listTours.map((tour, index) => {
                if(tour.type === 0){
                    return(
                        <ListTourItem key={index} tour={tour}/>
                    )
                }
            });
        }else if(id === "nuoc-ngoai"){
            var titleList = <h2>Du lịch nước ngoài</h2>
            var showListTours = listTours.map((tour, index) => {
                if(tour.type === 1){
                    return(
                        <ListTourItem key={index} tour={tour}/>
                    )
                }
            });
        }else{
            var titleList = places.map((place, index) => {
                if(place.id === id){
                    return(
                        <h2 key={index}>Du lịch {place.name}</h2>
                    )
                }
            });
            var showListTours = listTours.map((tour, index) => {
                if(tour.locationId === id){
                    return(
                        <ListTourItem key={index} tour={tour}/>
                    )
                }
            });
        }
        return (
            <div className="col-md-9 order-sm-first">
                <div className="title-search-tours">
                    {titleList}
                </div>
                <div className="container-pagination">
                    <button type="button" id="btn-next" className="btn btn-outline-secondary float-right btn-next"><i className="material-icons">navigate_next</i></button>
                    <button type="button" id="btn-prev" className="btn btn-outline-secondary float-right btn-prev"><i className="material-icons">navigate_before</i></button>
                </div>
                <div>
                    {showListTours}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listTours: state.listTours,
        places: state.places
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showListTours: () => {
            dispatch(actions.fetchListTours());
        },
        showPlaces: () => {
            dispatch(actions.fetchPlaces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTours);
