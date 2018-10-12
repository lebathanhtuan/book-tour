import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import Calendar from 'react-calendar';

class CheckoutCartItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeGuest = this.onChangeGuest.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        var unitPrice = this.props.listCart.price;
        var guest = this.props.listCart.guest;
        var day = this.props.listCart.day;
        var month = this.props.listCart.month;
        var year = this.props.listCart.year;
        var dateTour = day+'/'+month+'/'+year;
        this.state = {
            unitPrice: unitPrice,
            price: unitPrice*guest,
            dateTour: dateTour,
            date: new Date(year, month-1, day),
        };
    }
    componentDidMount() {
        this.props.showListTours();
    }
    onChangeGuest(e) {
        var value = parseInt(e.target.value);
        var unitPrice = this.state.unitPrice;
        this.setState({
            price: unitPrice*value
        })
        var cart = this.props.listCart;
        cart.guest = value;
        this.props.onChangeGuest(this.props.index, cart);
    }
    onDateChange(date){
        var today = new Date();
        var formatToday = today.getDate() +'/'+ parseInt(today.getUTCMonth()+1) + '/' + today.getFullYear();
        if(date <= today){
            alert('Ngày khởi hành phải sau ngày hôm nay ('+formatToday+') !');
        }else{
            var day = date.getDate();
            var month = parseInt(date.getUTCMonth()+1);
            var year = date.getFullYear();
            var dateTour = day+'/'+month+'/'+year;
            this.setState({
                dateTour: dateTour
            })
            this.props.onDateChange(this.props.index, day, month, year);
        }
    }
    render() {
        var { listTours, listCart } = this.props;
        var cartItem = listTours.map((tour, index) => {
            if (tour.id === listCart.idTour) {
                return (
                    <div className="row position-relative" key={index}>
                        <div className="col-md-4">
                            <div className="img-card-tour-page" style={{background: `url(${tour.img}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <div className="img-location"><i className="material-icons" style={{ fontSize: 16 }}>location_on</i> {tour.locationName}</div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card-title-tour-page">
                                <h5 className="title-tour-page">{tour.name}</h5>
                                <p className="h5 border-bottom pb-2"><i className="fa fa-clock-o" style={{ fontSize: 16 }}></i> {tour.time}</p>
                                <p>Điểm đến: Hà Nội, Đà Nẵng, Hội An</p>
                                <p>Phương tiện: Máy bay, xe buýt</p>
                                <p>Khởi hành: Thứ 5 hàng tuần</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-2">
                                <div className="form-group position-relative calendar-book-tour">
                                    <div className="form-control form-control-fix">{this.state.dateTour}</div>
                                    <div className="calendar-book-tour-item">
                                        <Calendar
                                            className="form-control w-100 rounded-0"
                                            onChange={this.onDateChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-fix"
                                        onChange={this.onChangeGuest}
                                        defaultValue={listCart.guest}
                                    >
                                        <option value="1">1 khách</option>
                                        <option value="2">2 khách</option>
                                        <option value="3">3 khách</option>
                                        <option value="4">4 khách</option>
                                        <option value="5">5 khách</option>
                                        <option value="6">6 khách</option>
                                        <option value="7">7 khách</option>
                                        <option value="8">8 khách</option>
                                        <option value="9">9 khách</option>
                                        <option value="10">10 khách</option>
                                    </select>
                                </div>
                                <h5 className="card-price-tour-page mb-0">{this.state.price}</h5>
                            </div>
                        </div>
                        <button className="btn btn-danger btn-delete" onClick={() => this.props.onClickDelete(this.props.index)}>x</button>
                    </div>
                )
            }
        })
        return (
            <div className="card-tour-page">
                {cartItem}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTours: state.listTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showListTours: () => {
            dispatch(actions.fetchListTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCartItem);
