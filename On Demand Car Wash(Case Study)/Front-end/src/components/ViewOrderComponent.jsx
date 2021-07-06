import React, { Component } from 'react'
import OrderService from '../services/OrderService'

export default class ViewOrderComponent extends Component {
  constructor(props){
      super(props)

      this.state= {
          orderId : this.props.match.params.orderId,
          order : {}

      }
  }

  componentDidMount(){
     OrderService.getOrderById(this.state.orderId).then( res => {
         this.setState({order : res.orderId});
     })

  }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Order Details</h3>
                    <div className="card-body">
                        {/* <div className="row">
                            <label></label>
                            <div>{this.state.order.orderId}</div>

                        </div> */}
                        <div className="row">
                            <label>Car Number :</label>
                            <div>{this.state.order.carNumber}</div>

                        </div>
                        <div className="row">
                            <label>Service Date :</label>
                            <div>{this.state.order.scheduledDate}</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
