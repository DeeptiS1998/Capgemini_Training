import React, { Component } from 'react'
import ServicePlan from "../services/ServicePlan"

export default class ServiceComponent extends Component {
    constructor(props){
        super(props)
 
        this.state={
           serviceplanId  : this.props.match.params.serviceplanId, 
           serviceplan_name :'',
           price : ''
           
        }
        this.changeServiceNameHandler = this.changeServiceNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        
        this.updateService = this.updateService.bind(this);
 
    }
    componentDidMount(){
        ServicePlan.getserviceById(this.state.serviceplanId).then((res) =>{
                    let service = res.data;
                    this.setState({ serviceplan_name:service.serviceplan_name,
                        price:service.price
                        

                    })
        });
    }

 
    updateService =(r) =>{
        r.preventDefault();
        let service = {serviceplan_name : this.state.serviceplan_name , price : this.state.price};
        console.log('service =>' + JSON.stringify(service));
        ServicePlan.updateService(service, this.state.serviceplanId).then( res => {
            this.props.history.push('/servicelist');

        });
 
        
    }
 
 
    changeServiceNameHandler = (event) => {
           this.setState({serviceplan_name : event.target.value});
    }
 
    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
 
    }
    
    
    cancel(){
        this.props.history.push("/servicelist");
    }
 
 
     render() {
         return (
             <div>
                  <div className="container">
                      <div className="row">
                           <div className="card col-md-6 offset-md-3 offset-md-3">
                               <h3 className="text-centered">Update Service Plan</h3>
                               <div className="card-body">
                                   <form>
                                       <div className="form-group">
                                           <label>Service Plan Name</label>
                                           <input placeholder="Plan Name" name="serviceplan_name" className="form-control"
                                           value={this.state.serviceplan_name} onChange={this.changeServiceNameHandler}></input>
 
                                       </div>
 
                                       <div className="form-group">
                                           <label>Price</label>
                                           <input placeholder="Price" name="price" className="form-control"
                                           value={this.state.price} onChange={this.changePriceHandler}></input>
 
                                       </div>
 
                                    
 
                                       <button className="btn btn-success" onClick={this.updateService}>Save</button>
                                       <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                   </form>
                               </div>
 
                           </div>
                      </div>
                  </div>
             </div>
         )
     }
 }
 