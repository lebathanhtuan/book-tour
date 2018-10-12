import React, { Component } from 'react';
import MiniSearch from './MiniSearch';
import MenuPlace from './MenuPlace';
import ListTours from './ListTours';
import { Link } from 'react-router-dom';

class Tours extends Component {
    render() {
        var { match } = this.props;
        return (
            <div>
                <MiniSearch />
                <div className="pt-4" style={{backgroundColor: '#ECF0F5'}}>
                    <div className="container">
                        <div className="row">
                            <MenuPlace />
                            <ListTours match={match}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tours;
