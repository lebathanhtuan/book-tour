import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlaceItem extends Component {
    render() {
        return (
            <Link to={`/tours/${this.props.place.id}`} className="list-group-item list-group-item-action list-location">{this.props.place.name}</Link>
        );
    }
}

export default PlaceItem;
