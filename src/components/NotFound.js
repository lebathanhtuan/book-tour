import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found" style={{backgroundColor: '#ECF0F5'}}>
                <div className="not-found-content">
                    <img src="/img/not-found.png"/>
                    <h2 className="mt-4">404 Not Found</h2>
                    <h5>Trang này không tồn tại!</h5>
                </div>
            </div>
        );
    }
}

export default NotFound;
