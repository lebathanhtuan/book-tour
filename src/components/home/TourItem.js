import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TourItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                <Link className="card text-left card-tour" to={`tour-detail/${this.props.tour.id}`}>
                    <div className="card-img-tour">
                        <img className="w-100" src={this.props.tour.img} />
                        <div className="img-location"><i className="material-icons" style={{ fontSize: 16 }}>location_on</i> {this.props.tour.locationName}</div>
                    </div>
                    <div className="card-body card-body-tour">
                        <h5 className="card-title">{this.props.tour.name}</h5>
                        <p className="card-text mb-1"><i className="fa fa-clock-o" style={{ fontSize: 16 }}></i> {this.props.tour.time}</p>
                        <p className="card-price-tour">{this.props.tour.price} VND</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default TourItem;
