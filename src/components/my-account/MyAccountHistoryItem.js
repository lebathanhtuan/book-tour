import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class MyAccountHistoryItem extends Component {
    componentDidMount() {
        this.props.showListTours();
    }
    render() {
        var { listTours } = this.props;
        var nameTour;
        var imgTour;
        listTours.map((tour) => {
            if(tour.id === this.props.history.idTour){
                nameTour = tour.name;
                imgTour = tour.img;
            }
        })
        return (
            <tr>
                <td className="table-middle"><img src={imgTour} width="48" height="auto"></img></td>
                <td className="table-middle">{nameTour}</td>
                <td className="table-middle">{this.props.history.timeTour}</td>
                <td className="table-middle text-center">{this.props.history.guest}</td>
                <td className="table-middle">
                    <span className="displayTotal">{this.props.history.price}</span><span>&nbsp;₫</span>
                </td>
                <td className="table-middle">{this.props.history.timeBook}</td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listTours: state.listTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        showListTours: () => {
            dispatch(actions.fetchListTours());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MyAccountHistoryItem);
