import React, { Component } from 'react'
import UsersService from '../services/UsersService';

export default class CreateUserComponent extends Component {
   constructor(props){
       super(props)

       this.state={
          email :'',
          name : '',
          phone  : ''
       }
       this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
       this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.changePhoneHandler = this.changePhoneHandler.bind(this);
       this.saveUser = this.saveUser.bind(this);

   }

   saveUser =(e) =>{
       e.preventDefault();
       let user = {email : this.state.email, name : this.state.name, phone : this.state.phone};
       console.log('user =>' + JSON.stringify(user));

       UsersService.createUser(user).then(res => {
            this.props.history.push('/userlist');
       });
   }


   changeUserNameHandler = (event) => {
          this.setState({name : event.target.value});
   }

   changeEmailHandler = (event) => {
       this.setState({email : event.target.value});

   }
   
   changePhoneHandler =(event) => {
       this.setState({phone : event.target.value});
   }

   cancel(){
       this.props.history.push("/userlist");
   }


    render() {
        return (
            <div>
                 <div className="container">
                     <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                              <h3 className="text-centered">Add User</h3>
                              <div className="card-body">
                                  <form>
                                      <div className="form-group">
                                          <label>User Name</label>
                                          <input placeholder="Name" name="name" className="form-control"
                                          value={this.state.name} onChange={this.changeUserNameHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label>Email</label>
                                          <input placeholder="Email" name="email" className="form-control"
                                          value={this.state.email} onChange={this.changeEmailHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label>Contact</label>
                                          <input placeholder="Phone" name="phone" className="form-control"
                                          value={this.state.phone} onChange={this.changePhoneHandler}></input>

                                      </div>

                                      <button className="btn btn-success" onClick={this.saveUser}>Save</button>
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
