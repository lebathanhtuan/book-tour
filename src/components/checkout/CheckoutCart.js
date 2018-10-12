import React, { Component } from 'react';
import CheckoutCartItem from './CheckoutCartItem';
import CheckoutCartTotal from './CheckoutCartTotal';
import { Link, Redirect } from 'react-router-dom';

class CheckoutCart extends Component {
    constructor(props) {
        super(props);
        this.onClickContinue = this.onClickContinue.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onChangeGuest = this.onChangeGuest.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.state = {
            totalPrice: '',
            checkContinue: false,
            checkDelete: false,
            checkChangeGuest: false,
            checkChangeDate: false
        };
    }
    componentDidMount() {
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        if(getCart){
            var totalPrice = 0;
            getCart.map((cart, index) => {
                var unitPrice = cart.price * cart.guest;
                totalPrice = totalPrice + unitPrice;
            })
            this.setState({
                totalPrice: totalPrice
            })
        }
    }
    onClickContinue() {
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        var isValid = true
        if (userName === null) {
            isValid = false;
            alert('Bạn chưa đăng nhập, bạn cần đăng nhập để tiếp tục!');
        }else if(getCart === null){
            isValid = false;
            alert('Giỏ hàng của bạn trống!');
        }
        if(isValid){
            if(window.confirm('Bạn chắc chắn muốn tiếp tục?')){
                this.setState({
                    checkContinue: true
                })
            }
        }
    }
    onClickDelete(index) {
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        if(getCart.length <= 1){
            if(window.confirm('Bạn có chắc muốn xóa?')){
                localStorage.removeItem(userName+"-BookTour");
            }
        }else{
            if(window.confirm('Bạn có chắc muốn xóa?')){
                getCart.splice(index, 1);
                var formatCart = JSON.stringify(getCart);
                localStorage.setItem(userName+"-BookTour", formatCart);
            }
        }
        this.setState({
            checkDelete: true
        })
    }
    onChangeGuest(index, value) {
        var totalPrice = 0;
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        getCart[index] = value;
        getCart.map((cart, index) => {
            var unitPrice = cart.price * cart.guest;
            totalPrice = totalPrice + unitPrice;
        })
        var formatCart = JSON.stringify(getCart);
        localStorage.setItem(userName+"-BookTour", formatCart);
        this.setState({
            totalPrice: totalPrice,
            checkChangeGuest: true
        })
    }
    onDateChange(index, day, month, year) {
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        getCart[index].day = day;
        getCart[index].month = month;
        getCart[index].year = year;
        var formatCart = JSON.stringify(getCart);
        localStorage.setItem(userName+"-BookTour", formatCart);
        this.setState({
            checkChangeDate: true
        })
    }
    render() {
        var cartContentError = null;
        var cartContentData = null;
        var userName = localStorage.getItem("userName");
        var getCart = JSON.parse(localStorage.getItem(userName+"-BookTour"));
        if( !userName ){
            cartContentError =
            <div className="container-checkout-main item-center">
                <div className="content-checkout-info text-center">
                    <img src="/img/heart-outline.png" />
                    <h2 style={{ color: '#1882B0' }}>Bạn chưa đăng nhập!</h2>
                    <h6>Bạn có muốn đăng nhập để tiếp tục?</h6>
                    <Link to="/sign-in"><button className="btn btn-outline-primary">Đồng ý</button></Link>
                </div>
            </div>
            cartContentData = 
                <div className="container-checkout-main">
                    {cartContentError}
                </div>;
        } else if (!getCart) {
            cartContentError =
                <div className="container-checkout-main item-center">
                    <div className="content-checkout-info text-center">
                        <img src="/img/shopping-cart.png" />
                        <h2 style={{ color: '#1882B0' }}>Giỏ hàng trống!</h2>
                        <h6>Bạn có muốn tìm hiểu thêm các tour của chúng tôi?</h6>
                        <Link to="/"><button className="btn btn-outline-primary">Đồng ý</button></Link>
                    </div>
                </div>
            cartContentData = 
                <div className="container-checkout-main">
                    {cartContentError}
                </div>;
        } else {
            var cartItem = getCart.map((cart, index) => {
                return (
                    <CheckoutCartItem
                        key={index}
                        index={index}
                        listCart={cart}
                        onClickDelete={this.onClickDelete}
                        onChangeGuest={this.onChangeGuest}
                        onDateChange={this.onDateChange}
                    />
                )
            })
            cartContentData =
                <div className="container-checkout-main">
                    {cartItem}
                    <CheckoutCartTotal totalPrice={this.state.totalPrice}/>
                </div>
        }

        if(this.state.checkContinue){
            return <Redirect to="/checkout/info"/>
        }
        return (
            <div className="container-step-checkout">
                <div className="head-step-checkout">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="checkout checkout-active">
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
                {cartContentData}
                <div className="container-checkout-footer">
                    <Link to="/"><input type="button" className="btn btn-secondary float-left" value="Đặt thêm Tour" /></Link>
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

export default CheckoutCart;
