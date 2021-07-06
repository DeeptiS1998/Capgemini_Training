import React, { Component } from 'react'
import ServicePlan from '../services/ServicePlan'

export default class ViewServiceComponent extends Component {
  constructor(props){
      super(props)

      this.state= {
          serviceplanId : this.props.match.params.carId,
          service : {}

      }
  }

  componentDidMount(){
     ServicePlan.getserviceById(this.state.serviceplanId).then( res => {
         this.setState({service : res.data});
     })

  }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Service Plan Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Service Plan Name :</label>
                            <div>{this.state.service.serviceplan_name}</div>

                        </div>
                        <div className="row">
                            <label>Price :</label>
                            <div>{this.state.service.price}</div>

                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
