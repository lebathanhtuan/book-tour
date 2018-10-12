import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class CheckoutInfo extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onClickContinue = this.onClickContinue.bind(this);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            fullNameError: '',
            phoneNumberError: '',
            emailError: '',
            styleFullNameError: {},
            stylePhoneNumberError: {},
            styleEmailError: {},
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
        var fullNamePattern = /[A-za-z]{3}/;
        var phoneNumberPattern = /[0-9]{9,11}/g;
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var fullName = this.state.fullName;
        var phoneNumber = this.state.phoneNumber;
        var email = this.state.email;

        if(fullName === ''){
            isValid = false;
            this.setState({
                fullNameError: "Bạn chưa nhập tên!",
                styleFullNameError: {border: '1px solid red'}
            })
        }else if(!fullNamePattern.test(fullName)){
            isValid = false;
            this.setState({
                fullNameError: "Tên của bạn quá ngắn!",
                styleFullNameError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                fullNameError: "",
                styleFullNameError: {border: '1px solid #ced4da'}
            })
        }

        if(phoneNumber === ''){
            isValid = false;
            this.setState({
                phoneNumberError: "Bạn chưa nhập số điện thoại!",
                stylePhoneNumberError: {border: '1px solid red'}
            })
        }else if(!phoneNumberPattern.test(phoneNumber)){
            isValid = false;
            this.setState({
                phoneNumberError: "Số điện thoại của bạn không đúng!",
                stylePhoneNumberError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                phoneNumberError: "",
                stylePhoneNumberError: {border: '1px solid #ced4da'}
            })
        }

        if(email === ''){
            isValid = false;
            this.setState({
                emailError: "Bạn chưa nhập email!",
                styleEmailError: {border: '1px solid red'}
            })
        }else if(!emailPattern.test(email)){
            isValid = false;
            this.setState({
                emailError: "Email của bạn không đúng định dạng!",
                styleEmailError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                emailError: "",
                styleEmailError: {border: '1px solid #ced4da'}
            })
        }

        if(isValid === true){
            if(window.confirm('Bạn chắc chắn muốn tiếp tục?')){
                this.setState({
                    checkContinue: true
                })
            }
        }
    }
    render() {
        if(this.state.checkContinue === true){
            return <Redirect to="/checkout/payment"/>
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
                            <div className="checkout checkout-active">
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
                            <h3>THÔNG TIN LIÊN HỆ</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Họ và tên:</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-fix"
                                        name="fullName"
                                        style={this.state.styleFullNameError}
                                        value={this.state.fullName}
                                        onChange={this.onHandleChange}
                                    />
                                    <span className="error-pattern">{this.state.fullNameError}</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-fix"
                                        name="phoneNumber"
                                        style={this.state.stylePhoneNumberError}
                                        value={this.state.phoneNumber}
                                        onChange={this.onHandleChange}
                                    />
                                    <span className="error-pattern">{this.state.phoneNumberError}</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-fix"
                                        name="email"
                                        style={this.state.styleEmailError}
                                        value={this.state.email}
                                        onChange={this.onHandleChange}
                                    />
                                    <span className="error-pattern">{this.state.emailError}</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Yêu cầu khác:</label>
                                    <textarea className="form-control form-control-fix" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div><i className="fa fa-lock" style={{ fontSize: 18 }}></i> <img src="/img/logo.png" height="26" width="26" /> vivuviet cam kết bảo mật thông tin của quý khách.</div>
                    </div>
                </div>
                <div className="container-checkout-footer">
                    <Link to="/checkout/cart"><input type="button" className="btn btn-secondary float-left" value="Trở lại" /></Link>
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

export default CheckoutInfo;
