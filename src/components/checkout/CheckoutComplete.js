import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CheckoutComplete extends Component {
    render() {
        return (
            <div className="container-step-checkout">
                <div className="head-step-checkout">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="checkout">
                                <div className="checkout-number">1</div>
                                <div className="checkout-info">
                                    <div className="checkout-title">Kiểm tra</div>
                                    <div className="checkout-desc">Tours của bạn</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="checkout">
                                <div className="checkout-number">2</div>
                                <div className="checkout-info">
                                    <div className="checkout-title">Thông tin</div>
                                    <div className="checkout-desc">Cá nhân của bạn</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="checkout">
                                <div className="checkout-number">3</div>
                                <div className="checkout-info">
                                    <div className="checkout-title">Xác nhận</div>
                                    <div className="checkout-desc">Dịch vụ thanh toán</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="checkout checkout-active">
                                <div className="checkout-number">4</div>
                                <div className="checkout-info">
                                    <div className="checkout-title">Hoàn tất</div>
                                    <div className="checkout-desc">Đặt tour online</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-checkout-main">
                    <div className="container-checkout-main item-center">
                        <div className="content-checkout-info text-center">
                            <img src="/img/heart-outline.png" />
                            <h2 style={{ color: '#1882B0' }}>Cảm ơn!</h2>
                            <h6>Thanh toán đặt tour. Bạn có thể xem lịch sử đặt tại đây.</h6>
                            <Link to="/my-account" className="btn btn-outline-primary">Xem lịch sử đặt tour</Link>
                        </div>
                    </div>
                </div>
                <div className="container-checkout-footer">
                    <Link to="/"><input type="button" className="btn btn-secondary float-left" value="Tiếp tục đặt Tour" /></Link>
                </div>
            </div>
        );
    }
}

export default CheckoutComplete;
