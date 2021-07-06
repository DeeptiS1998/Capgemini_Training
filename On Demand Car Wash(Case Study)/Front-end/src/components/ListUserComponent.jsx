 import React, { Component } from 'react'
import UsersService from '../services/UsersService'
import AuthService from "../services/auth.service";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default class ListUserComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           users : [],
           currentUser: AuthService.getCurrentUser()
           

       }
       this.addUser = this.addUser.bind(this);
       this.deleteUser=this.deleteUser.bind(this);
       this.viewUser=this.viewUser.bind(this);
       this.editUser=this.editUser.bind(this);
    }
 
   componentDidMount(){
       UsersService.getUser().then((res) => {
           this.setState({users: res.data});
       });

   } 

   addUser(){
    this.props.history.push("/add-user");
   } 

   editUser(userId){
    this.props.history.push(`/update-user/${userId}`);

   }

   viewUser(userId){
       this.props.history.push(`/view-user/${userId}`);
   }


   deleteUser(userId){
    UsersService.deleteUser(userId).then(res => {
         this.setState({users:this.state.users.filter(user => user.userId !== userId)});
    });

}

   //

   submit = (userId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteUser(userId)

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
            
            <div  className="custom-scrollbar">
               <h2 className="text-center">User List</h2>
               <div className="row">
               { currentUser && currentUser.roles[0] =="ROLE_ADMIN" &&     <button className="btn btn-primary" onClick={this.addUser}>Add User</button>}
               </div>
               <div className="row">
                    <table className="table table-striped table-bordered" >
                        <thead>
                            <tr>
                                <th>User id</th>
                                {/* <th>Email </th> */}
                                <th>User Name</th>
                                <th>Contact</th>
                                
                                <th>Actions</th>
                            </tr>
                        </thead>
                         <tbody>
                             {
                                 this.state.users.map(
                                     user =>
                                     <tr key= {user.user_id}>
                                         <td>{user.userId}</td>
                                         {/* <td>{user.email}</td> */}
                                         <td>{user.name}</td>
                                         <td>{user.phone}</td>

                                         <td>
                                         {     currentUser && currentUser.roles[0] ==="ROLE_ADMIN"   &&  <button onClick={() =>this.editUser(user.userId)} className="btn btn-info">Update</button> }
                                          {  currentUser && currentUser.roles[0] ==="ROLE_ADMIN"  && <button  style={{marginLeft:"10px"}} onClick={() =>this.submit(user.userId)} className="btn btn-danger">Delete</button>}
                                          <button  style={{marginLeft:"10px"}} onClick={() =>this.viewUser(user.userId)} className="btn btn-info">View</button>
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

