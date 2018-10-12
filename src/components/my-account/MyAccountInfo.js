import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class MyAccountInfo extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        var userName = localStorage.getItem("userName");
        var { users } = this.props;
        var fullName = null;
        var email = null;
        users.map((user) => {
            if(user.userName === userName){
                fullName = user.fullName;
                email = user.email;
            }
        })
        return (
            <div className="col-md-4">
                <div className="container-user-info">
                    <div className="avatar">
                        <img src="userAvatar.png" className="rounded" width="100%" height="auto" />
                    </div>
                    <div className="content-user-info">
                        <h4 id="displayUserName">#{userName}</h4>
                        <p id="displayFullName">Họ và tên: {fullName}</p>
                        <p id="displayEmailUser">Email: {email}</p>
                        <button className="btn btn-outline-secondary mt-2 mr-2">Đổi mật khẩu</button>
                        <button className="btn btn-outline-secondary mt-2">Đăng xuất</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        getUsers: () => {
            dispatch(actions.fetchUsers());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountInfo);
