import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class UpdateOrderComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            orderId: this.props.match.params.orderId,
            carNumber:"",
            customerId:"",
            washerId:"",
            scheduledDate:""

        }
        this.changeCarNumberHandler=this.changeCarNumberHandler.bind(this);
        this.changeCustIdHandler=this.changeCustIdHandler.bind(this);
        this.changeWasherIdHandler=this.changeWasherIdHandler.bind(this);
        this.changeScheduleHandler=this.changeScheduleHandler.bind(this);

        this.updateOrder = this.updateOrder.bind(this);

    }

    componentDidMount(){
        OrderService.getOrderById(this.state.orderId).then((res) =>{
            let order =res.data;
            this.setState({carNumber:order.carNumber, customerId:order.customerId,
                washerId:order.washerId, scheduledDate:order.scheduledDate})

        });
    }


    updateOrder =(o) => {
       o.preventDefault();
       let order = {carNumber:this.state.carNumber, customerId:this.state.customerId,
                     washerId:this.state.washerId, scheduledDate:this.state.scheduledDate}
        console.log('order =>' + JSON.stringify(order)); 

        OrderService.updateOrder(order, this.state.orderId).then(res =>{
            this.props.history.push('/orderlist')
        });
        
        
    }

    cancel(){
        this.props.history.push('/orderlist');
    }

    changeCarNumberHandler = (event) => {
        this.setState({carNumber: event.target.value});
    }
    changeCustIdHandler = (event) =>{
        this.setState({customerId:event.target.value});
    }
    changeWasherIdHandler = (event) =>{
        this.setState({washerId:event.target.value});
    }
    changeScheduleHandler = (event) =>{
        this.setState({scheduledDate:event.target.value});
    }



    render() {
        return (
            <div>
                 <div className="container">
                     <div className="row">
                         <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update Order</h3>
                             <div className="card-body">
                                 <form>
                                     <div className="form-group">
                                         <label>Car Number</label>
                                         <input placeholder="Car Number"  name="carnumber" className="form-control"
                                          value={this.state.carNumber} onChange={this.changeCarNumberHandler}/>
                                     </div>
                                     <div className="form-group">
                                         <label>Customer Id</label>
                                         <input placeholder="Customer Id" name="customerId" className="form-control"
                                          value={this.state.customerId} onChange={this.changeCustIdHandler}/>
                                     </div>
                                     <div className="form-group">
                                         <label>Washer Id</label>
                                         <input placeholder="washer id" name="washerId" className="form-control"
                                          value={this.state.washerId} onChange={this.changeWasherIdHandler}/>
                                     </div>
                                     <div className="form-group">
                                         <label>Schedule Date</label>
                                         <input placeholder="Choose date" name="scheduleddate" className="form-control"
                                          value={this.state.scheduledDate} onChange={this.changeScheduleHandler}/>
                                     </div>

                                     <button className="btn btn-success" onClick={this.updateOrder}>Update</button>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this) } style={{marginLeft:"10px"}}>Cancel</button>
                                 </form>
                             </div>

                         </div>

                     </div>
                 </div>


            </div>
        )
    }
}

export default UpdateOrderComponent;