import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckoutCart from './CheckoutCart';
import CheckoutInfo from './CheckoutInfo';
import CheckoutPayment from './CheckoutPayment';
import CheckoutComplete from './CheckoutComplete';

class Checkout extends Component {
    render() {
        return (
            <div className="pb-4" style={{backgroundColor: '#ECF0F5'}}>
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" style={{fontSize: 16}}></i> Trang chủ</a></li>
                        <li className="breadcrumb-item active">Thanh toán</li>
                    </ul> 
                    <Route path="/checkout/cart" component={CheckoutCart}/>
                    <Route path="/checkout/info" component={CheckoutInfo}/>
                    <Route path="/checkout/payment" component={CheckoutPayment}/>
                    <Route path="/checkout/complete" component={CheckoutComplete}/>
                </div>
            </div>
        );
    }
}

export default Checkout;
