import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Navibar extends Component {
    constructor(props){
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }
    onClickLogout(){
        localStorage.removeItem("userName");
        window.location.reload();
    }
    render() {
        var userName = localStorage.getItem("userName");
        var loginNav = null;
        if(userName){
            loginNav = 
                <div className="dropdown-login">
                    <div className="login-navbar">
                        <img src="/img/contacts.png" height="28" width="28" alt=""/> {userName}
                    </div>
                    <div className="dropdown-login-content text-center">
                        <Link to="/my-account" className="list-group-item w-100 rounded-0">Trang cá nhân</Link>
                        <button 
                            className="list-group-item w-100 rounded-0"
                            onClick={this.onClickLogout}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
        }else{
            loginNav = 
                <div className="login-navbar">
                    <Link to="/sign-in"><img src="/img/contacts.png" height="28" width="28" alt=""/> Đăng nhập</Link>
                </div>
        }
        return (
            <div className="bg-light navbar-shadow">
                <nav className="navbar navbar-fix navbar-expand-md bg-light navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src="/img/logo.png" height="50px" width="50px" alt=""/>
                        <h3 className="brand-text">vivuviet</h3>
                    </Link>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/tours/trong-nuoc" className="nav-link">Tour trong nước</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tours/quoc-te" className="nav-link">Tour quốc tế</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tours" className="nav-link">Khuyến mãi</Link>
                            </li>
                        </ul>
                    </div> 
                    <div className="flex-nav">
                        <div><Link to="/checkout/cart"><img src="/img/cart.png" height="28" width="28" alt=""/></Link></div>
                        <div className="linedivide"></div>
                        {loginNav}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navibar;
