import React, { Component } from 'react';
import TourItem from './TourItem';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions/index";

class HotTours extends Component {
    componentDidMount() {
        this.props.showHotTours();
    }
    render() {
        var { hotTours } = this.props;
        var showHotTours = hotTours.map((tour, index) => {
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
                            <h3 style={{ fontWeight: 300, margin: 0 }}>Tour nổi bật</h3>
                        </div>
                        <Link to="/tours/hot-tour" className="float-right btn btn-link">Xem chi tiết ></Link>
                    </div>
                    <div className="row">
                        {showHotTours}
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return{
        hotTours: state.hotTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showHotTours: () => {
            dispatch(actions.fetchHotTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HotTours);
