 import React, { Component } from 'react'
import CarService from '../services/CarService';

export default class CreateCarComponent extends Component {
   constructor(props){
       super(props)

       this.state={
          carname :'',
          cartype : '',
          colour  : ''
       }
       this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
       this.changeCarTypeHandler = this.changeCarTypeHandler.bind(this);
       this.changeCarColourHandler = this.changeCarColourHandler.bind(this);
       this.saveCar = this.saveCar.bind(this);

       this.handleSubmit=this.handleSubmit.bind(this)

   }

   saveCar =(e) =>{
       e.preventDefault();
       let car = {carname : this.state.carname , cartype : this.state.cartype, colour : this.state.colour};
       console.log('car =>' + JSON.stringify(car));

       CarService.createCar(car).then(res => {
            this.props.history.push('/carlist');
       });
   }


   changeCarNameHandler = (event) => {
          this.setState({carname : event.target.value});
   }

   changeCarTypeHandler = (event) => {
       this.setState({cartype : event.target.value});

   }
   
   changeCarColourHandler =(event) => {
       this.setState({colour : event.target.value});
   }

   cancel(){
       this.props.history.push("/carlist");
   }

   //
   handleSubmit = (event) => {
    alert(`${this.state.carname} ${this.state.cartype}  ${this.state.color}  Registered Successfully !!!!`)
    console.log(this.state);
    this.setState({
        carname: "",
        cartype: "",
        color: ''
    })
 event.preventDefault()
    
}


    render() {
        return (
            <div>
                 <div className="container">
                     <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                              <h3 className="text-centered">Add Car</h3>
                              <div className="card-body">
                                  <form>
                                      <div className="form-group">
                                          <label>Car Name</label>
                                          <input placeholder="Car Name" name="carname" className="form-control"
                                          value={this.state.carname} onChange={this.changeCarNameHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label>Car Type</label>
                                          <input placeholder="Car Type" name="cartype" className="form-control"
                                          value={this.state.cartype} onChange={this.changeCarTypeHandler}></input>

                                      </div>

                                      <div className="form-group">
                                          <label>Colour</label>
                                          <input placeholder="Car Colour" name="colour" className="form-control"
                                          value={this.state.colour} onChange={this.changeCarColourHandler}></input>

                                      </div>

                                      <button className="btn btn-success" onClick={this.saveCar}  > Save</button>
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
