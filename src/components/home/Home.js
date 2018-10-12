import React, { Component } from 'react';
import Search from './Search';
import HotTours from './HotTours';
import DomesticTours from './DomesticTours';
import InternationalTours from './InternationalTours';

class Home extends Component {
    render() {
        return (
            <div>
                <Search />
                <div style={{backgroundColor: '#E0E7EF'}}>
                    <div className="container pt-4 pb-4">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <img src="/img/best.png" className="p-3"/>
                                <h5>Lựa chọn tốt nhất</h5>
                                <ul className="text-left ul-choice">
                                    <li>Hơn 200 tour du lịch trong nước và quốc tế</li>
                                    <li>Hơn 10.000 phản hồi từ người dùng</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/saving.png" className="p-3"/>
                                <h5>Giá tốt nhất</h5>
                                <ul className="text-left ul-choice">
                                    <li>Luôn luôn có giá thấp nhất và tốt nhất</li>
                                    <li>Hỗ trợ tranh toán linh hoạt</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/trust.png" className="p-3"/>
                                <h5>Hướng dẫn tận tình</h5>
                                <ul className="text-left ul-choice">
                                    <li>Đội ngũ tư vấn chi tiết, tận tình</li>
                                    <li>Hướng dẫn viên thân thiện, nhiệt tình</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <HotTours />
                <DomesticTours />
                <InternationalTours />
            </div>
        );
    }
}

export default Home;
