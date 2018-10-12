import React, { Component } from 'react';
import MyAccountHistoryItem from './MyAccountHistoryItem';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions/index";

class MyAccountHistory extends Component {
    componentDidMount() {
        var userName = localStorage.getItem("userName")
        this.props.showHistory(userName);
    }
    render() {
        var { historyBookTour } = this.props;
        if (historyBookTour.length === 0){
            var historyContent = 
                <div className="container-history-payment d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <img src="/img/shopping-cart.png"/>
                        <h2 style={{ color: '#1882B0' }}>Lịch sử trống!</h2>
                        <h6>Bạn có muốn tìm hiểu thêm các tour của chúng tôi?</h6>
                        <Link to="/"><button className="btn btn-outline-primary">Đồng ý</button></Link>
                    </div>
                </div>
        }else{
            var showHistory = historyBookTour.map((history, index) => {
                return <MyAccountHistoryItem key={index} history={history} />
            })
            var historyContent =
                <div className="container-history-payment">
                    <div style={{ color: '#1882B0' }}>
                        <h5>LỊCH SỬ ĐẶT TOURS:</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover" id="history-payment">
                            <tbody>
                                <tr>
                                    <th colSpan="2">Tên tour</th>
                                    <th>Ngày khởi hành</th>
                                    <th>Số khách</th>
                                    <th>Tổng tiền</th>
                                    <th>Ngày đặt</th>
                                </tr>
                                {showHistory}
                            </tbody>
                        </table>
                    </div>
                </div>
        }
        
        return (
            <div className="col-md-8">
                {historyContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        historyBookTour: state.historyBookTour
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showHistory: (userName) => {
            dispatch(actions.fetchHistory(userName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountHistory);
