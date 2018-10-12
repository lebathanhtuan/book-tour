import React, { Component } from 'react';
import TourDetailInfo from './TourDetailInfo';
import TourDetailComment from './TourDetailComment';
import TourDetailComments from './TourDetailComments';
import BookTour from './BookTour';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class TourDetail extends Component {
    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        this.props.showTourDetail(id);
        this.props.showComments();
    }
    render() {
        var { tourDetail, comments } = this.props;
        return (
            <div className="pb-4" style={{backgroundColor: 'rgba(204, 204, 204, 0.1)'}}>
                <div className="container">
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/"><i className="fa fa-home" style={{fontSize: 16}}></i> Trang chủ</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={`/tours/${tourDetail.type === 1 ? "nuoc-ngoai" : "trong-nuoc"}`}>{tourDetail.type === 1 ? "Nước ngoài" : "Trong nước"}</Link>
                            </li>
                            <li className="breadcrumb-item active">{tourDetail.locationName}</li>
                        </ul>
                    </div>
                    <div className="title-name-tour-detail">
                        <h2>{tourDetail.name}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 order-md-first">
                            <div className="border">
                                <TourDetailInfo tourDetail={tourDetail}/>
                                <TourDetailComment tourDetail={tourDetail}/>
                                <TourDetailComments tourDetail={tourDetail} comments={comments}/>
                            </div>
                        </div>
                        <div className="col-md-4 order-sm-first order-first">
                            <BookTour tourDetail={tourDetail}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        tourDetail: state.tourDetail,
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showTourDetail: (id) => {
            dispatch(actions.fetchTourDetail(id));
        },
        showComments: () => {
            dispatch(actions.fetchComments());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);
