import React, { Component } from 'react'
import CarService from '../services/CarService';

export default class UpdateCarComponent extends Component {
    constructor(props){
        super(props)
 
        this.state={
           carId   : this.props.match.params.carId, 
           carname :'',
           cartype : '',
           colour  : ''
        }
        this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
        this.changeCarTypeHandler = this.changeCarTypeHandler.bind(this);
        this.changeCarColourHandler = this.changeCarColourHandler.bind(this);
        this.updateCar = this.updateCar.bind(this);
 
    }
    componentDidMount(){
        CarService.getCarById(this.state.carId).then((res) =>{
                    let car = res.data;
                    this.setState({ carname:car.carname,
                        cartype:car.cartype,
                        colour:car.cartype

                    })
        });
    }

 
    updateCar =(e) =>{
        e.preventDefault();
        let car = {carname : this.state.carname , cartype : this.state.cartype, colour : this.state.colour};
        console.log('car =>' + JSON.stringify(car));
        CarService.updateCar(car, this.state.carId).then( res => {
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
 
 
     render() {
         return (
             <div>
                  <div className="container">
                      <div className="row">
                           <div className="card col-md-6 offset-md-3 offset-md-3">
                               <h3 className="text-centered">Update Car</h3>
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
 
                                       <button className="btn btn-success" onClick={this.updateCar}>Save</button>
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
 