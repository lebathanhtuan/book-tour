import React, { Component } from 'react';
import PlaceItem from './PlaceItem';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions/index";

class MenuPlace extends Component {
    componentDidMount() {
        this.props.showPlaces();
    }
    render() {
        var { places } = this.props;
        var showDomesticPlaces = places.map((place, index) => {
            if(place.type === 0){
                return(
                    <PlaceItem key={index} place={place}/>
                )
            }
        });
        var showInternationalPlaces = places.map((place, index) => {
            if(place.type === 1){
                return(
                    <PlaceItem key={index} place={place}/>
                )
            }
        });
        return (
            <div className="col-md-3 order-md-first order-first">
                <div className="card card-tour mb-4">
                    <div className="card-header">
                        <h5><Link to="/tours/trong-nuoc">Địa điểm trong nước</Link></h5>
                    </div>
                    <div className="list-group list-group-flush">
                        {showDomesticPlaces}
                    </div>
                </div>
                <div className="card card-tour">
                    <div className="card-header">
                        <h5><Link to="/tours/nuoc-ngoai">Địa điểm nước ngoài</Link></h5>
                    </div>
                    <div className="list-group list-group-flush">
                        {showInternationalPlaces}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        places: state.places
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showPlaces: () => {
            dispatch(actions.fetchPlaces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPlace);
