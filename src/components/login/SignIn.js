import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            userName: '',
            password: '',
            userNameError: '',
            passwordError: '',
            styleUserNameError: {},
            stylePasswordError: {},
            completeSignIn: false
        };
    }
    componentDidMount() {
        this.props.getUsers();
    }

    onHandleChange(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    onHandleSubmit(e){
        e.preventDefault();
        var isValid = true;
        var userNamePattern = /[A-Za-z0-9]{3}/;
        var userName = this.state.userName;
        var password = this.state.password;

        if(userName === ''){
            isValid = false;
            this.setState({
                userNameError: "Bạn chưa nhập tên đăng nhập!",
                styleUserNameError: {border: '1px solid red'}
            })
        }else if(!userNamePattern.test(userName)){
            isValid = false;
            this.setState({
                userNameError: "Tên của bạn quá ngắn!",
                styleUserNameError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                userNameError: "",
                styleUserNameError: {border: '1px solid #ced4da'}
            })
        }

        if(password === ''){
            isValid = false;
            this.setState({
                passwordError: "Bạn chưa nhập mật khẩu!",
                stylePasswordError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                passwordError: "",
                stylePasswordError: {border: '1px solid #ced4da'}
            })
        }

        if(isValid === true){
            var { users } = this.props;
            var isValidSignIn = false;
            users.map((user) => {
                if(userName === user.userName & password === user.password){
                    isValidSignIn = true;
                }else{
                    this.setState({
                        passwordError: "Tên đăng nhập hoặc mật khẩu không đúng!",
                        styleUserNameError: {border: '1px solid red'},
                        stylePasswordError: {border: '1px solid red'}
                    })
                }
            });
            if(isValidSignIn === true){
                localStorage.setItem("userName", this.state.userName);
                alert('Đăng nhập thành công!');
                this.setState({
                    passwordError: "",
                    styleUserNameError: {border: '1px solid #ced4da'},
                    stylePasswordError: {border: '1px solid #ced4da'},
                    completeSignIn: true
                })
            }
        }
    }
    render() {
        if(this.state.completeSignIn === true){
            return <Redirect to="/"/>
        }
        return (
            <div className="bg-login">
                <div className="container-login">
                    <a className="navbar-brand"><img src="/img/logo.png" height="50px" width="50px" /><h3 className="brand-text">vivuviet</h3></a>
                    <h4>Đăng nhập</h4>
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group text-left mt-4">
                            <label>Tên đăng nhập:</label>
                            <input 
                                type="text" 
                                className="form-control form-control-fix"
                                name="userName"
                                style={this.state.styleUserNameError}
                                value={this.state.userName}
                                onChange={this.onHandleChange}
                            />
                            <span className="error-pattern">{this.state.userNameError}</span>
                        </div>
                        <div className="form-group text-left mb-4">
                            <label>Mật khẩu:</label>
                            <input 
                                type="password" 
                                className="form-control form-control-fix"
                                name="password"
                                style={this.state.stylePasswordError}
                                value={this.state.password}
                                onChange={this.onHandleChange}
                            />
                            <span className="error-pattern">{this.state.passwordError}</span>
                        </div>
                        <Link to="/sign-up" className="btn btn-link float-left">Tạo tài khoản</Link>
                        <button className="btn btn-primary float-right">Đăng nhập</button>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
