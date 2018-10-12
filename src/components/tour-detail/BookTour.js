import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Calendar from 'react-calendar';

class BookTour extends Component {
    constructor(props){
        super(props);
        this.onDateChange = this.onDateChange.bind(this);
        this.onChangeGuest = this.onChangeGuest.bind(this);
        this.onClickBookTour = this.onClickBookTour.bind(this);
        this.state = {
            unitPrice: '',
            price: '',
            formatDate: '',
            day: '',
            month: '',
            year: '',
            guest: 1,
            checkBookTour: false
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ 
            unitPrice: newProps.tourDetail.price,
            price: newProps.tourDetail.price 
        })
    }
    onDateChange(date){
        var formatDate = date.getDate() +'/'+ parseInt(date.getUTCMonth()+1) + '/' + date.getFullYear();
        var day = date.getDate();
        var month = parseInt(date.getUTCMonth()+1);
        var year = date.getFullYear();
        this.setState({ 
            formatDate: formatDate,
            day: day,
            month: month,
            year: year
        })
    }
    onChangeGuest(e){
        var value = parseInt(e.target.value);
        var unitPrice = this.state.unitPrice;
        this.setState({ 
            price: unitPrice*value,
            guest: value
        })
    }
    onClickBookTour(){
        var { tourDetail } = this.props;
        var userName = localStorage.getItem("userName");
        var today = new Date();
        var formatToday = today.getDate() +'/'+ parseInt(today.getUTCMonth()+1) + '/' + today.getFullYear();
        var choiceDay = new Date(this.state.year, parseInt((this.state.month)-1), this.state.day);
        if(userName === null){
            alert('Bạn chưa đăng nhập, bạn cần đăng nhập để đặt tour!');
        }else if(this.state.formatDate === ''){
            alert('Bạn chưa chọn ngày khởi hành!');
        }else if(choiceDay <= today){
            alert('Ngày khởi hành phải sau ngày hôm nay ('+formatToday+') !');
        }else{
            if(window.confirm("Bạn có chắc muốn đặt tour này không?")){
                var bookTourValue = [
                    {
                        idTour: tourDetail.id,
                        price: this.state.unitPrice,
                        day: this.state.day,
                        month: this.state.month,
                        year: this.state.year,
                        guest: this.state.guest
                    }
                ];
                if(localStorage.getItem(userName+"-BookTour") === null){
                    var setLocalBookTour = JSON.stringify(bookTourValue);
                    localStorage.setItem(userName+"-BookTour", setLocalBookTour); 
                }else{
                    var getLocalBookTour = localStorage.getItem(userName+"-BookTour");
                    var formatArrayLocalBookTour = JSON.parse(getLocalBookTour);
                    var newLocalBookTour = JSON.stringify(formatArrayLocalBookTour.concat(bookTourValue));
                    localStorage.setItem(userName+"-BookTour", newLocalBookTour);
                }
                if (window.confirm("Đã đặt thành công, bạn có muốn thanh toán ngay không?")) {
                    this.setState({
                        checkBookTour: true
                    })
                }
            }
        }
    }
    render() {
        if(this.state.checkBookTour){
            return <Redirect to="/checkout/cart"/>
        }
        return (
            <div className="container-book-tour sticky-top">
                <h2 className="price-tour-detail" style={{ fontWeight: 300, fontSize: 40 }}>{this.state.price} VND</h2>
                <div className="form-group">
                    <label>Ngày khởi hành:</label>
                    <Calendar
                        className="form-control w-100 rounded-0"
                        onChange={this.onDateChange}
                        value={this.state.date}
                    />
                </div>
                <div className="form-group">
                    <label>Số khách:</label>
                    <select 
                        className="form-control form-control-fix"
                        onChange={this.onChangeGuest}
                        defaultValue={this.state.guest}
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
                <button className="btn btn-primary w-100" onClick={this.onClickBookTour}>ĐẶT TOUR</button>
            </div>
        );
    }
}

export default BookTour;
