import React, { Component } from 'react'
import CarService from '../services/CarService'

export default class ViewCarComponent extends Component {
  constructor(props){
      super(props)

      this.state= {
          carId : this.props.match.params.carId,
          car : {}

      }
  }

  componentDidMount(){
     CarService.getCarById(this.state.carId).then( res => {
         this.setState({car : res.data});
     })

  }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Car Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Car Name :</label>
                            <div>{this.state.car.carname}</div>

                        </div>
                        <div className="row">
                            <label>Car Type :</label>
                            <div>{this.state.car.cartype}</div>

                        </div>
                        <div className="row">
                            <label>Color :</label>
                            <div>{this.state.car.colour}</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
