import React, { Component } from 'react';
import TourItem from './TourItem';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions/index";

class DomesticTours extends Component {
    componentDidMount() {
        this.props.showDomesticTours();
    }
    render() {
        var { domesticTours } = this.props;
        var showDomesticTours = domesticTours.map((tour, index) => {
            return (
                <TourItem 
                    key={index}
                    tour={tour}
                />
            )
        })
        return (
            <div className="container-tour">
                <div className="container pb-4">
                    <div className="tour-hot-container">
                        <div className="title-tour-hot">
                            <h3 style={{ fontWeight: 300, margin: 0 }}>Tour trong nước</h3>
                        </div>
                        <Link to="/tours/trong-nuoc" className="float-right btn btn-link">Xem chi tiết ></Link>
                    </div>
                    <div className="row">
                        {showDomesticTours}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        domesticTours: state.domesticTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showDomesticTours: () => {
            dispatch(actions.fetchDomesticTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DomesticTours);
