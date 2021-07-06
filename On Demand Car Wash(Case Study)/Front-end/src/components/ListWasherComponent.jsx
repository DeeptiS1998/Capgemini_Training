import React, { Component } from 'react'
import WasherService from '../services/WasherService';
import AuthService from "../services/auth.service";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export default class ListWasherComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           washers : [],
           currentUser: AuthService.getCurrentUser()

       }
       this.addWasher = this.addWasher.bind(this);
       this.deleteWasher=this.deleteWasher.bind(this);
       this.editWasher=this.editWasher.bind(this);
       this.viewWasher=this.viewWasher.bind(this);
   }


   componentDidMount(){
    WasherService.getWasher().then((res) =>{
             this.setState({washers: res.data});
    });
}

addWasher(){
    this.props.history.push("/add-washer");
}
deleteWasher(id){
    WasherService.deleteWasher(id).then(res => {
         this.setState({washers:this.state.washers.filter(washer => washer.id !== id)});
    });

}

editWasher(id){
    this.props.history.push(`/update-washer/${id}`);

}
viewWasher(id){
    this.props.history.push(`/view-washer/${id}`);
}

// 
submit = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteWasher(id)

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
        return (
            <div>
               <h2 className="text-center">Washer List</h2>
               <div className="row">
               { currentUser && currentUser.roles[0]==="ROLE_ADMIN"  &&    <button className="btn btn-primary" onClick={this.addWasher}>Add Washer</button>}
               </div>
               <div className="row">
                    <table className="table table-striped table-bordered">
                    
                        <thead>
                            <tr>
                                <th>Washer id</th>
                                <th>Email </th>
                                <th>First Name</th>
                                <th> Last Name</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                         <tbody>
                             {
                                 this.state.washers.map(
                                     washer =>
                                     <tr key= {washer.id}>
                                         <td>{washer.id}</td>
                                         <td>{washer.emailId}</td>
                                         <td>{washer.firstName}</td>
                                         <td>{washer.lastName}</td>
                                         <td>{washer.phNum}</td>


                                         <td>
                                         { currentUser && currentUser.roles[0] === "ROLE_ADMIN" &&    <button onClick={() =>this.editWasher(washer.id)} className="btn btn-info">Update</button>}
                                           { currentUser && currentUser.roles[0]==="ROLE_ADMIN" &&   <button  style={{marginLeft:"10px"}} onClick={() =>this.submit(washer.id)} className="btn btn-danger">Delete</button>}
                                           {  currentUser && currentUser.roles[0]==="ROLE_ADMIN" &&     <button  style={{marginLeft:"10px"}} onClick={() =>this.viewWasher(washer.id)} className="btn btn-info">View</button>}
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

