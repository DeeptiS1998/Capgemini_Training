import React, { Component } from 'react'
import OrderService from '../services/OrderService'
import AuthService from "../services/auth.service";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class ListOrderComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            orders: [],
            currentUser: AuthService.getCurrentUser()

        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder=this.editOrder.bind(this);
        this.deleteOrder=this.deleteOrder.bind(this);
        this.viewOrder=this.viewOrder.bind(this);
    }


    viewOrder(orderId){
        this.props.history.push(`/view-order/${orderId}`);

    }
    editOrder(orderId){
        this.props.history.push(`/update-order/${orderId}`);
    }

    deleteOrder(orderId){
        OrderService.deleteOrder(orderId).then(res => {
             this.setState({orders:this.state.orders.filter(order => order.orderId !== orderId)});
        });

    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({orders: res.data}); 

        });
    };

    addOrder(){
        this.props.history.push('/add-order');
    }
    //

    submit = (orderId) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to delete this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteOrder(orderId)

            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        });
      };
       



    render() {
        const { currentUser } = this.state;
        console.log(currentUser);
        const {order} =this.props;

        return (
            <div className="custom-scrollbar">
                <h2 className="text-xl-center">Order List</h2> 
                <div className="row">
                { currentUser && currentUser.roles[0]==="ROLE_ADMIN" &&   <button className="btn btn-primary" onClick={this.addOrder}>Add Order</button>}
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                      <thead>
                           <tr>
                               <th>Order Id</th>
                               <th>Car No.</th>
                               <th>Customer Id</th>
                               <th>Washer Id</th>
                               {/* <th>Status</th> */}
                               <th>Service Date</th>
                               <th>Actions</th>
                           </tr>
                      </thead>

                      <tbody>
                          {
                              this.state.orders.map(
                                  order =>
                                  <tr key={order.orderId}>
                                      <td>{order.orderId}</td>
                                      <td>{order.carNumber}</td>
                                      <td>{order.customerId}</td>
                                      <td>{order.washerId}</td>
                                      {/* <td>{order.status}</td> */}
                                      <td>{order.scheduledDate}</td>
                                      <td>
                                      { currentUser && (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )  &&<button onClick={() =>this.editOrder(order.orderId)} className="btn btn-info">Edit</button>}
                                      {currentUser && (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )  &&<button  onClick={() =>this.submit(order.orderId)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>}
                                         {/* <button  style={{marginLeft:"10px"}} onClick={() =>this.viewOrder(order.orderId)} className="btn btn-info">View</button> */}
                                      </td>


                                  </tr>
                              )
                          }
                      </tbody>

                    </table>
                </div>
                
            </div>
        )
    }
}
