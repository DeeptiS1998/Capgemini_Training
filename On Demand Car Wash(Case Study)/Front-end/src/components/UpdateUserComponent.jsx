import React, { Component } from 'react'
import UsersService from '../services/UsersService'

export default class UpdateUserComponent extends Component {
    constructor(props){
        super(props)
 
        this.state={
           userId   : this.props.match.params.userId, 
           name :'',
           phone : ''
          
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        
        this.updateUser = this.updateUser.bind(this);
 
    }
    componentDidMount(){
        UsersService.getUserById(this.state.userId).then((res) =>{
                    let user = res.data;
                    this.setState({ name:user.name,
                        phone:user.phone
                        

                    })
        });
    }

 
    updateUser =(e) =>{
        e.preventDefault();
        let user = {name : this.state.name , phone : this.state.phone};
        console.log('user =>' + JSON.stringify(user));
        UsersService.updateUser(user, this.state.userId).then( res => {
            this.props.history.push('/userlist');

        });
 
        
    }
 
 
    changeNameHandler = (event) => {
           this.setState({name : event.target.value});
    }
 
    changePhoneHandler = (event) => {
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
                               <h3 className="text-centered">Update User </h3>
                               <div className="card-body">
                                   <form>
                                       <div className="form-group">
                                           <label>User Name</label>
                                           <input placeholder="User Name" name="name" className="form-control"
                                           value={this.state.name} onChange={this.changeNameHandler}></input>
 
                                       </div>
 
                                       <div className="form-group">
                                           <label>Contact</label>
                                           <input placeholder="Contact Number" name="phone" className="form-control"
                                           value={this.state.phone} onChange={this.changePhoneHandler}></input>
 
                                       </div>
 
                                      
 
                                       <button className="btn btn-success" onClick={this.updateUser}>Save</button>
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