import React, { Component } from 'react';
import TourItem from './TourItem';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions/index";

class InternationalTours extends Component {
    componentDidMount() {
        this.props.showInternationalTours();
    }
    render() {
        var { internationalTours } = this.props;
        var showInternationalTours = internationalTours.map((tour, index) => {
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
                                <h3 style={{fontWeight: 300, margin: 0}}>Tour quốc tế</h3>
                            </div>
                            <Link to="/tours/nuoc-ngoai" className="float-right btn btn-link">Xem chi tiết ></Link>
                        </div>
                        <div className="row">
                            {showInternationalTours}
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        internationalTours: state.internationalTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showInternationalTours: () => {
            dispatch(actions.fetchInternationalTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InternationalTours);
