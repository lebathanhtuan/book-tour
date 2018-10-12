import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid container-footer-about">
                    <div className="container container-about">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="content-about">
                                    <div className="about-text">
                                        <h6>Về chúng tôi</h6>
                                        <p className="text-justify">Không hổ danh Thổ địa du lịch, vivuviet.com sẽ giúp bạn không bỏ lỡ bất cứ điều tuyệt vời nào trong chuyến du lịch của mình. Chúng tôi lựa chọn cho bạn khách sạn phù hợp, tour đặc sắc, thông tin du lịch chi tiết kèm mức giá hấp dẫn.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="content-about">
                                    <div className="about-text">
                                        <h6>Liên kết liên quan</h6>
                                        <ul style={{paddingLeft: 20}}>
                                            <li>Điều kiện & Điều khoản</li>
                                            <li>Quy chế hoạt động</li>
                                            <li>Câu hỏi thường gặp</li>
                                            <li>Tin khuyến mãi</li>
                                            <li>Hệ thống văn phòng</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="content-about">
                                    <div className="about-text">
                                        <h6>Liên hệ</h6>
                                        <p>Tư vấn miễn phí (24/7):</p>
                                        <span className="hotline">1800 6601</span>
                                        <p>Góp ý, phản ánh (8h00 - 22h00):</p>
                                        <span className="hotline">1800 6616</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-6">
                                <div className="content-about">
                                    <div className="about-text">
                                        <h6>Văn phòng</h6>
                                        <p><i className="material-icons" style={{fontSize: 16}}>location_on</i> HCM: Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh</p>
                                        <p><i className="material-icons" style={{fontSize: 16}}>location_on</i> HN: Tầng 12, 70-72 Bà Triệu, Quận Hoàn Kiếm, Hà Nội</p>
                                        <p><i className="material-icons" style={{fontSize: 16}}>location_on</i> Cần Thơ: 166B Trần Hưng Đạo, P. An Nghiệp, Quận Ninh Kiều, Tp Cần Thơ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="content-about">
                                    <div className="about-text text-left">
                                        <h6>Liên kết khác</h6>
                                        <p><i className="material-icons" style={{fontSize: 16}}>email</i>  Email: hotro@vivuviet.com</p>
                                        <p><i className="fa fa-facebook-official"></i>  Fanpage: fb.com/vivuviet</p>
                                        <p><i className="fa fa-youtube-play"></i>  Youtube: Vi Vu Việt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-footer-copyright">
                    <div className="container container-copyright">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6">
                                <div className="content-copyright">
                                    <p>Copyright © 2018</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <div className="content-card">
                                    <i className="fa fa-cc-visa mr-1"></i>
                                    <i className="fa fa-cc-mastercard mr-1"></i>
                                    <i className="fa fa-credit-card-alt mr-1"></i>
                                    <i className="fa fa-cc-jcb mr-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
