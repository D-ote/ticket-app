import React, { Component } from 'react'

class OrderCard extends Component {
    render() { 
        return ( 
            <div className="orderCard">
                <h5>{this.props.title}</h5>
                <p>{this.props.number}</p>
            </div>
         );
    }
}
 
export default OrderCard;