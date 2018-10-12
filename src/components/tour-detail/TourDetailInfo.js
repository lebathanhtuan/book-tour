import React, { Component } from 'react';

class TourDetailInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.tourDetail.img} width="100%" height="auto" />
                </div>
                <div className="general-info">
                    <div>
                        <p className="general-info-item"><i className="fa fa-map-marker" style={{ fontSize: 18 }}></i> {this.props.tourDetail.locationName}</p>
                        <p className="general-info-item"><i className="fa fa-clock-o" style={{ fontSize: 16 }}></i> {this.props.tourDetail.time}</p>
                        <p className="general-info-item"><i className="fa fa-send" style={{ fontSize: 16 }}></i> Di chuyển: {this.props.tourDetail.vehicle}</p>
                        <p className="general-info-item"><i className="fa fa-exclamation-circle" style={{ fontSize: 16 }}></i> Giới hạn tuổi: {this.props.tourDetail.limitAge}</p>
                        <p className="general-info-item"><i className="fa fa-group" style={{ fontSize: 14 }}></i> Khách tối đa: {this.props.tourDetail.maxGuest}</p>
                        <p className="general-info-item"><i className="fa fa-hotel" style={{ fontSize: 16 }}></i> Nơi ở: {this.props.tourDetail.accommodation}</p>
                    </div>
                    <p className="m-0"><i className="fa fa-flag-checkered" style={{ fontSize: 18 }}></i> Khởi hành: {this.props.tourDetail.start}</p>
                </div>
                <div className="container-detail-tour">
                    <h2 style={{ fontWeight: 300, color: '#1882B0' }}>Lịch trình tour</h2>
                    Đang cập nhật ...
                </div>
            </div>
        );
    }
}

export default TourDetailInfo;
