import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListTourItem extends Component {
    render() {
        return (
            <div className="card-tour-page">
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-card-tour-page" style={{background: `url(${this.props.tour.img}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <div className="img-location"><i className="material-icons" style={{ fontSize: 16 }}>location_on</i> {this.props.tour.locationName}</div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-title-tour-page">
                            <h5 className="title-tour-page">{this.props.tour.name}</h5>
                            <p>Điểm đến: {this.props.tour.destination}</p>
                            <p>Phương tiện: {this.props.tour.vehicle}</p>
                            <p>Khách sạn: {this.props.tour.accommodation}</p>
                            <p>Khởi hành: {this.props.tour.start}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2">
                            <p className="border-bottom pb-1 pt-1 m-0"><i className="fa fa-clock-o" style={{ fontSize: 16 }}></i> {this.props.tour.time}</p>
                            <h5 className="card-price-tour-page">{this.props.tour.price}</h5>
                            <Link to={`../tour-detail/${this.props.tour.id}`} className="btn btn-outline-primary w-100">Chi tiết</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTourItem;
