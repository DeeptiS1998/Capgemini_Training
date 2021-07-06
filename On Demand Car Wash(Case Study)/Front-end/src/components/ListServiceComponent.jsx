import React, { Component } from 'react'
import ServicePlan from '../services/ServicePlan';
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export default class ListServiceComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           services : [],
           currentUser: AuthService.getCurrentUser()

           

       }
       this.addService = this.addService.bind(this);
       this.editService=this.editService.bind(this);
       this.deleteService=this.deleteService.bind(this);
       this.viewService=this.viewService.bind(this);

      
   }

   editService(serviceplanId){
    this.props.history.push(`/update-service/${serviceplanId}`);
 }

 deleteService(serviceplanId){
    ServicePlan.deleteService(serviceplanId).then(res => {
         this.setState({services:this.state.services.filter(service => service.serviceplanId !== serviceplanId)});
    });

}

viewService(serviceplanId){
    this.props.history.push(`/view-service/${serviceplanId}`);
 }




   componentDidMount(){
    ServicePlan.getService().then((res) =>{
             this.setState({services: res.data});
    });
}


addService(){
    this.props.history.push("/add-service");
}

//
submit = (serviceplanId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteService(serviceplanId)

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
        const {service} =this.props;
        console.log(currentUser);
        

        

        
        return (
            <div className="custom-scrollbar">
               <h2 className="text-center">Service Plan List</h2>
               <div className="row">
               { currentUser && currentUser.roles[0]==="ROLE_ADMIN" && <button className="btn btn-primary" onClick={this.addService}>Add Service Plan</button>}
               </div>

               <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Serviceplan id</th>
                                <th>Serviceplan name </th>
                                <th>Price(USD)</th>
                                
                                 <th>Actions</th>
                            </tr>
                        </thead>
                         <tbody>
                             {
                                 this.state.services.map(
                                     service =>
                                     <tr key= {service.serviceplan_id}>
                                         <td>{service.serviceplanId}</td>
                                         <td>{service.serviceplan_name}</td>
                                         <td>{service.price}</td>

                                         <td>
                                           { currentUser && (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )   &&   <button onClick={() =>this.editService(service.serviceplanId)} className="btn btn-info">Update</button> }
                                           { currentUser && (currentUser.roles[0] ==="ROLE_ADMIN" || currentUser.roles[0] ==="ROLE_WASHER" ) &&   <button  style={{marginLeft:"10px"}} onClick={() =>this.submit(service.serviceplanId)} className="btn btn-danger">Delete</button> }
                                             <button  style={{marginLeft:"10px"}} onClick={() =>this.viewService(service.serviceplanId)} className="btn btn-info">View</button>
                                               
                                             { currentUser && currentUser.roles[0] ==="ROLE_USER"   && <Link className="button"  style={{marginLeft:"10px"}} to={"/payment/"+ service.price}  >
                                              Book Now
                                               </Link> }
                                           
                                            

                                    
                                               
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

