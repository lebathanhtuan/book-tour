import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class TourDetailComment extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            tourId: '',
            name: '',
            cmt: '',
            nameError: '',
            cmtError: '',
            styleNameError: {},
            styleCmtError: {}
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ 
            tourId: newProps.tourDetail.id,
        })
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
        var namePattern = /[A-Za-z0-9]{1}/;
        var name = this.state.name;
        var cmt = this.state.cmt;

        if(name === ''){
            isValid = false;
            this.setState({
                nameError: "Bạn chưa nhập tên!",
                styleNameError: {border: '1px solid red'}
            })
        }else if(!namePattern.test(name)){
            isValid = false;
            this.setState({
                nameError: "Tên của bạn quá ngắn!",
                styleNameError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                nameError: "",
                styleNameError: {border: '1px solid #ced4da'}
            })
        }

        if(cmt === ''){
            isValid = false;
            this.setState({
                cmtError: "Bạn chưa nhập đánh giá!",
                styleCmtError: {border: '1px solid red'}
            })
        }else{
            this.setState({
                cmtError: "",
                styleCmtError: {border: '1px solid #ced4da'}
            })
        }

        if(isValid === true){
            var now = new Date();
            var formatTime = now.getDate() +'/'+ parseInt(now.getUTCMonth()+1) + '/' + now.getFullYear() + '  ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            this.props.addComment(this.state.tourId, this.state.name, formatTime, this.state.cmt);
        }
    }
    render() {
        return (
            <div className="container-comment border-top border-bottom">
                <h4>Viết nhận xét</h4>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameCmt" id="nameCmtLabel">Tên</label>&nbsp;<span style={{ color: 'red' }}>*</span>
                        <input 
                            className="form-control form-control-fix" 
                            type="text" 
                            name="name" 
                            id="nameCmt" 
                            style={this.state.styleNameError}
                            value={this.state.name}
                            onChange={this.onHandleChange}
                        />
                        <span className="error-pattern">{this.state.nameError}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment" id="commentLabel">Nhận xét</label>&nbsp;<span style={{ color: 'red' }}>*</span>
                        <textarea 
                            className="form-control form-control-fix" 
                            rows="3" 
                            name="cmt" 
                            id="comment"
                            style={this.state.styleCmtError}
                            value={this.state.cmt}
                            onChange={this.onHandleChange}
                        ></textarea>
                        <span className="error-pattern">{this.state.cmtError}</span>
                    </div>
                    <button id="submitCmt" className="btn btn-secondary">Gửi</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        addComment: (idTour, name, time, cmt) => {
            dispatch(actions.addComment(idTour, name, time, cmt));
        }
    }
};

export default connect(null, mapDispatchToProps)(TourDetailComment);
