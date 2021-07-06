import React, { Component } from 'react'
import WasherService from '../services/WasherService'

export default class UpdateWasherComponent extends Component {
    constructor(props){
        super(props)
 
        this.state={
           id   : this.props.match.params.id, 
           emailId :'',
           firstName : '',
           lastName : '',
           phNum : ''
          
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        
        this.updateWasher = this.updateWasher.bind(this);
 
    }
    componentDidMount(){
        WasherService.getWasherId(this.state.id).then((res) =>{
                    let washer = res.data;
                    this.setState({ emailId:washer.emailId,
                        firstName:washer.firstName, lastName:washer.lastName,
                        phNum:washer.phNum
                        

                    })
        });
    }

 
    updateWasher =(e) =>{
        e.preventDefault();
        let washer = {emailId : this.state.emailId , firstName : this.state.firstName, lastName:this.state.lastName,
                      phNum:this.state.phNum  };
        console.log('washer =>' + JSON.stringify(washer));
        WasherService.updateWasher(washer, this.state.id).then( res => {
            this.props.history.push('/washerlist');

        });
 
        
    }
 
 
    changeEmailHandler = (event) => {
           this.setState({emailId : event.target.value});
    }
 
    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
 
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
 
    }
    changePhoneHandler = (event) => {
        this.setState({phNum : event.target.value});
 
    }
    
    
 
    cancel(){
        this.props.history.push("/washerlist");
    }
 
 
     render() {
         return (
             <div>
                  <div className="container">
                      <div className="row">
                           <div className="card col-md-6 offset-md-3 offset-md-3">
                               <h3 className="text-centered">Update Washer </h3>
                               <div className="card-body">
                                   <form>
                                       <div className="form-group">
                                           <label>EmailId</label>
                                           <input placeholder="EmailId" name="emaildId" className="form-control"
                                           value={this.state.emailId} onChange={this.changeEmailHandler}></input>
 
                                       </div>
 
                                       <div className="form-group">
                                           <label>First Name</label>
                                           <input placeholder="First Name" name="firstName" className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
 
                                       </div>

                                       <div className="form-group">
                                           <label>Last Name</label>
                                           <input placeholder="Last Name" name="lastName" className="form-control"
                                           value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
 
                                       </div>

                                       
                                       <div className="form-group">
                                           <label>Contact</label>
                                           <input placeholder="Contact" name="phNum" className="form-control"
                                           value={this.state.phNum} onChange={this.changePhoneHandler}></input>
 
                                       </div>
 
                                      
 
                                       <button className="btn btn-success" onClick={this.updateWasher}>Save</button>
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