import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            fullName: '',
            userName: '',
            password: '',
            rePassword: '',
            email: '',
            fullNameError: '',
            userNameError: '',
            passwordError: '',
            rePasswordError: '',
            emailError: '',
            styleFullNameError: {},
            styleUserNameError: {},
            stylePasswordError: {},
            styleRePasswordError: {},
            styleEmailError: {},
            completeSignUp: false
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
        var fullNamePattern = /[A-za-z]{3}/;
        var userNamePattern = /[A-Za-z0-9]{3}/;
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var fullName = this.state.fullName;
        var userName = this.state.userName;
        var password = this.state.password;
        var rePassword = this.state.rePassword;
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

        if(rePassword === ''){
            isValid = false;
            this.setState({
                rePasswordError: "Bạn chưa xác minh lại mật khẩu!",
                styleRePasswordError: {border: '1px solid red'}
            })
        }else if(rePassword !== password){
            isValid = false;
            this.setState({
                rePasswordError: "Mật khẩu của bạn không trùng khớp!",
                styleRePasswordError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                rePasswordError: "",
                styleRePasswordError: {border: '1px solid #ced4da'}
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
            var { users } = this.props;
            users.map((user) => {
                if(userName === user.userName){
                    isValid = false;
                    this.setState({
                        userNameError: "Tên đăng nhập của bạn đã tồn lại!",
                        styleUserNameError: {border: '1px solid red'}
                    })
                }
                if(email === user.email){
                    isValid = false;
                    this.setState({
                        emailError: "Email của bạn đã tồn lại!",
                        styleEmailError: {border: '1px solid red'}
                    })
                }
            });
            if(isValid === true){
                this.props.addUsers(userName, password, fullName, email);
                alert('Đã đăng ký thành công!');
                this.setState({
                    completeSignUp: true
                })
            }
        }
    }
    render() {
        if(this.state.completeSignUp === true){
            return <Redirect to="/sign-in"/>
        }
        return (
            <div className="bg-login">
                <div className="container-login">
                    <a className="navbar-brand" href="#"><img src="/img/logo.png" height="50px" width="50px" /><h3 className="brand-text">vivuviet</h3></a>
                    <h4>Đăng ký</h4>
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group text-left mt-4">
                            <label>Họ và tên:</label>
                            <input 
                                type="text"
                                className="form-control form-control-fix"
                                style={this.state.styleFullNameError}
                                name="fullName"
                                value={this.state.fullName}
                                onChange={this.onHandleChange}
                            />
                            <span className="error-pattern">{this.state.fullNameError}</span>
                        </div>
                        <div className="form-group text-left">
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
                        <div className="form-group text-left">
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
                        <div className="form-group text-left">
                            <label>Nhập lại mật khẩu:</label>
                            <input 
                                type="password" 
                                className="form-control form-control-fix" 
                                name="rePassword"
                                style={this.state.styleRePasswordError}
                                value={this.state.rePassword}
                                onChange={this.onHandleChange}
                            />
                            <span className="error-pattern">{this.state.rePasswordError}</span>
                        </div>
                        <div className="form-group text-left mb-4">
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
                        <Link to="/sign-in" className="btn btn-link float-left">Đã có tài khoản? Đăng nhập</Link>
                        <button className="btn btn-primary float-right">Tạo tài khoản</button>
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
        },
        addUsers: (userName, password, fullName, email) => {
            dispatch(actions.addUsers(userName, password, fullName, email));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
