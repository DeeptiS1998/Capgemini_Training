import React, { Component } from 'react'
import WasherService from '../services/WasherService';

export default class CreateWasherComponent extends Component {
   constructor(props){
       super(props)

       this.state={
          washeremail :'',
          washerfirstname: '',
          washerlastname  : '',
          phNum   : '',
       }
       this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
       this.changePhoneHandler = this.changePhoneHandler.bind(this);
       this.saveWasher = this.saveWasher.bind(this);

   }

   saveWasher =(e) =>{
       e.preventDefault();
       let washer = {washeremail : this.state.washeremail , washerfirstname : this.state.washerfirstname ,washerlastname : this.state.washerlastname, phNum:this.state.phNum};
       console.log('washer =>' + JSON.stringify(washer));

       WasherService.createWasher(washer).then(res => {
            this.props.history.push('/washerlist');
       });
   }


   changeEmailHandler = (event) => {
          this.setState({washeremail : event.target.value});
   }

   changeFirstNameHandler = (event) => {
       this.setState({washerfirstname : event.target.value});

   }
   
   changeLastNameHandler =(event) => {
       this.setState({washerlastname : event.target.value});
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
                              <h3 className="text-centered">Add Washer</h3>
                              <div className="card-body">
                                  <form>

                                      <div className="form-group">
                                          <label>Washer Email</label>
                                          <input placeholder="email" name="washeremail" className="form-control"
                                          value={this.state.washeremail} onChange={this.changeEmailHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label> Name</label>
                                          <input placeholder="first name" name="washerfirstname" className="form-control"
                                          value={this.state.washerfirstname} onChange={this.changeFirstNameHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label>Contact</label>
                                          <input placeholder="phone" name="phNum" className="form-control"
                                          value={this.state.phNum} onChange={this.changePhoneHandler}></input>

                                      </div>

                                      <button className="btn btn-success" onClick={this.saveCar}>Save</button>
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
