import React, { Component } from 'react';
import MyAccountInfo from './MyAccountInfo';
import MyAccountHistory from './MyAccountHistory';
import { Link, Redirect } from 'react-router-dom';

class MyAccount extends Component {
    render() {
        var userName = localStorage.getItem("userName");
        if(!userName){
            return <Redirect to="/"/>
        }
        return (
            <div className="pb-4" style={{backgroundColor: '#ECF0F5', minHeight: 550}}>
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home" style={{fontSize: 16}}></i> Trang chủ</Link></li>
                        <li className="breadcrumb-item active">Thông tin cá nhân</li>
                    </ul>
                    <div className="container-myaccount">
                        <div className="row">
                            <MyAccountInfo/>
                            <MyAccountHistory/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccount;
