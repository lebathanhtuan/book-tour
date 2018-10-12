import React, { Component } from 'react';

class CheckoutCartTotal extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr className="text-right">
                            <td className="pr-5 h5">Tổng tiền tours:</td>
                            <td className="h5">
                                <span className="displayTotalBag">{this.props.totalPrice}</span><span>&nbsp;₫</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CheckoutCartTotal;
