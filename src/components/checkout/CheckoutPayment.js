import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class CheckoutPayment extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onClickContinue = this.onClickContinue.bind(this);
        this.state = {
            nameCard: '',
            numberCard: '',
            expirationDay: '',
            expirationMonth: '',
            cscCard: '',
            nameCardError: '',
            numberCardError: '',
            expirationError: '',
            cscCardError: '',
            styleNameCardError: {},
            styleNumberCardError: {},
            styleExpirationDayError: {},
            styleExpirationMonthError: {},
            styleCSCCardError: {},
            checkContinue: false
        };
    }
    onHandleChange(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    onClickContinue(e) {
        e.preventDefault();
        var isValid = true;
        var nameCardPattern = /[A-Za-z0-9]{3,}/;
        var numberCardPattern = /[0-9]{13,16}/g;
        var expirationDayPattern = /[0-9]{1,2}/g;
        var expirationMonthPattern = /[0-9]{1,2}/g;
        var cscCardPattern = /[0-9]{3}/g;
        var nameCard = this.state.nameCard;
        var numberCard = this.state.numberCard;
        var expirationDay = this.state.expirationDay;
        var expirationMonth = this.state.expirationMonth;
        var cscCard = this.state.cscCard;

        if(nameCard === ''){
            isValid = false;
            this.setState({
                nameCardError: "Bạn chưa nhập tên chủ thẻ!",
                styleNameCardError: {border: '1px solid red'}
            })
        }else if(!nameCardPattern.test(nameCard)){
            isValid = false;
            this.setState({
                nameCardError: "Tên chủ thẻ của bạn không đúng định dạng!",
                styleNameCardError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                nameCardError: "",
                styleNameCardError: {border: '1px solid #ced4da'}
            })
        }

        if(numberCard === ''){
            isValid = false;
            this.setState({
                numberCardError: "Bạn chưa nhập số thẻ!",
                styleNumberCardError: {border: '1px solid red'}
            })
        }else if(!numberCardPattern.test(numberCard)){
            isValid = false;
            this.setState({
                numberCardError: "Số thẻ của bạn không đúng định dạng!",
                styleNumberCardError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                numberCardError: "",
                styleNumberCardError: {border: '1px solid #ced4da'}
            })
        }

        if(expirationDay === ''){
            isValid = false;
            this.setState({
                expirationError: "Bạn đang để trống!",
                styleExpirationDayError: {border: '1px solid red'}
            })
        }else if(!expirationDayPattern.test(expirationDay)){
            isValid = false;
            this.setState({
                expirationError: "Ngày hết hạn không đúng định dạng!",
                styleExpirationDayError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                expirationError: "",
                styleExpirationDayError: {border: '1px solid #ced4da'}
            })
        }

        if(expirationMonth === ''){
            isValid = false;
            this.setState({
                expirationError: "Bạn đang để trống!",
                styleExpirationMonthError: {border: '1px solid red'}
            })
        }else if(!expirationMonthPattern.test(expirationMonth)){
            isValid = false;
            this.setState({
                expirationError: "Ngày hết hạn không đúng định dạng!",
                styleExpirationMonthError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                expirationError: "",
                styleExpirationMonthError: {border: '1px solid #ced4da'}
            })
        }

        if(cscCard === ''){
            isValid = false;
            this.setState({
                cscCardError: "Bạn chưa nhập mã CSC!",
                styleCSCCardError: {border: '1px solid red'}
            })
        }else if(!cscCardPattern.test(cscCard)){
            isValid = false;
            this.setState({
                cscCardError: "Mã CSC của bạn không đúng!",
                styleCSCCardError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                cscCardError: "",
                styleCSCCardError: {border: '1px solid #ced4da'}
            })
        }

        if(isValid === true){
            if(window.confirm('Bạn chắc chắn muốn thực hiện giao dịch?')){
                var userName = localStorage.getItem("userName");
                var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
                var now = new Date();
                var timeBook = now.getDate() +'/'+ parseInt(now.getUTCMonth()+1) + '/' + now.getFullYear() + '  ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                getCart.map((cart) => {
                    var timeTour = cart.day+'/'+cart.month+'/'+cart.year;
                    this.props.addHistory(cart.idTour, userName, timeTour, cart.guest, cart.price, timeBook);

                });
                localStorage.removeItem(userName+"-BookTour");
                this.setState({
                    checkContinue: true
                })
            }
        }
    }
    render() {
        if(this.state.checkContinue === true){
            return <Redirect to="/checkout/complete"/>
        }
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
                            <div className="checkout checkout-active">
                                <div className="checkout-number">3</div>
                                <div className="checkout-info">
                                    <div className="checkout-title">Xác nhận</div>
                                    <div className="checkout-desc">Dịch vụ thanh toán</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="checkout">
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
                    <div className="content-checkout-info">
                        <div className="mb-4" style={{ color: '#1882B0' }}>
                            <h3>CHUYỂN KHOẢN NGÂN HÀNG</h3>
                        </div>
                        <form action="">
                            <div className="row">
                                <div className="col-md-4">
                                    <label for="">Tên chủ thẻ:</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-fix"
                                            name="nameCard"
                                            style={this.state.styleNameCardError}
                                            value={this.state.nameCard}
                                            onChange={this.onHandleChange}
                                        />
                                        <span className="error-pattern">{this.state.nameCardError}</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="">Số thẻ:</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-fix"
                                            name="numberCard"
                                            style={this.state.styleNumberCardError}
                                            value={this.state.numberCard}
                                            onChange={this.onHandleChange}
                                        />
                                        <span className="error-pattern">{this.state.numberCardError}</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="">Hình thức:</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-inline" style={{ marginBottom: 20 }}>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="visaCard" name="typeCard" value="Visa Card" title="Visa Card" checked />
                                            <label className="custom-control-label" for="visaCard"><i className="fa fa-cc-visa" title="Visa Card" style={{ fontSize: 24 }}></i></label>
                                        </div>
                                        <div className="custom-control custom-radio" style={{ marginLeft: 5 }}>
                                            <input type="radio" className="custom-control-input" id="masterCard" name="typeCard" value="Master Card" title="Master Card" />
                                            <label className="custom-control-label" for="masterCard"><i className="fa fa-cc-mastercard" title="Master Card" style={{ fontSize: 24 }}></i></label>
                                        </div>
                                        <div className="custom-control custom-radio" style={{ marginLeft: 5 }}>
                                            <input type="radio" className="custom-control-input" id="creditCard" name="typeCard" value="Credit Card" title="Credit Card" />
                                            <label className="custom-control-label" for="creditCard"><i className="fa fa-credit-card-alt" title="Credit Card" style={{ fontSize: 24 }}></i></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="">Ngày hết hạn:</label>
                                </div>
                                <div className="col-md-8 mb-3">
                                    <div className="form-inline">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-fix"
                                            name="expirationDay"
                                            style={this.state.styleExpirationDayError}
                                            value={this.state.expirationDay}
                                            onChange={this.onHandleChange}
                                        />
                                        <span>&nbsp;/&nbsp;</span>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-fix"
                                            name="expirationMonth"
                                            style={this.state.styleExpirationMonthError}
                                            value={this.state.expirationMonth}
                                            onChange={this.onHandleChange}
                                        />
                                        <span className="error-pattern">{this.state.expirationError}</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="">Mã CSC:</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-fix"
                                            name="cscCard"
                                            style={this.state.styleCSCCardError}
                                            value={this.state.cscCard}
                                            onChange={this.onHandleChange}
                                        />
                                        <span className="error-pattern">{this.state.cscCardError}</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-checkout-footer">
                    <Link to="/checkout/info"><input type="button" className="btn btn-secondary float-left" value="Trở lại" /></Link>
                    <button 
                        className="btn btn-primary float-right"
                        onClick={this.onClickContinue}
                    >
                        Tiếp theo
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        addHistory: (idTour, userName, timeTour, guest, price, timeBook) => {
            dispatch(actions.addHistory(idTour, userName, timeTour, guest, price, timeBook));
        }
    }
};

export default connect(null, mapDispatchToProps)(CheckoutPayment);
