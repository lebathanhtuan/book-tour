import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Search extends Component {
    constructor(props) {
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.state = {
            keyUpSearch: ''
        };
    }
    componentDidMount() {
        this.props.showListTours();
    }
    onSearchChange(e) {
        var value = e.target.value;
        this.setState({
            keyUpSearch: value
        })

    }
    render() {
        var { listTours } = this.props;
        var expression = new RegExp(this.state.keyUpSearch, "i");
        if (expression != "/(?:)/i" & expression != "/ /i") {
            var listSearch = listTours.map((list, index) => {
                if (list.name.search(expression) != -1) {
                    return (
                        <li className="list-group-item list-group-item-action list-group-item-search" key={index}>
                            <Link to={`/tour-detail/${list.id}`} style={{ textDecoration: 'none' }}>
                                <div className="tag-search">
                                    <img src={list.img} height="56" width="auto" />
                                    <div className="d-inline-block pr-3 pl-3">{list.locationName}</div>
                                </div>
                                <p className="text-result" style={{ color: 'black' }}>{list.name}</p>
                                <p className="text-result text-muted text-price-search">{list.price}</p>
                            </Link>
                        </li>
                    )
                }
            })
        }
        return (
            <div className="container-search">
                <div className="search-tour">
                    <img src="icons8-location-64.png" className="icon-location" />
                    <div className="title-search">
                        <h1 style={{ fontWeight: 300 }}>Đặt tours du lịch!</h1>
                        <h5 style={{ fontWeight: 300 }}>Hơn 200 tour du lịch trong nước và quốc tế</h5>
                        <div className="search">
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control fix-input-search"
                                    onChange={this.onSearchChange}
                                    placeholder="Tên thành phố, khu vực..."
                                />
                                <div className="input-group-append">
                                    <div className="btn btn-primary fix-input-search">Tìm kiếm</div>
                                </div>
                            </div>
                            <ul className="list-group result-search" style={{ marginTop: 15 }}>
                                {listSearch}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTours: state.listTours
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showListTours: () => {
            dispatch(actions.fetchListTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
