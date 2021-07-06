import React, { Component } from 'react'
import WasherService from '../services/WasherService'

export default class ViewWasherComponent extends Component {
  constructor(props){
      super(props)

      this.state= {
          id : this.props.match.params.id,
          washer : {}

      }
  }

  componentDidMount(){
     WasherService.getWasherId(this.state.id).then( res => {
         this.setState({washer : res.data});
     })

  }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Washer Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>First Name :</label>
                            <div>{this.state.washer.firstName}</div>

                        </div>
                        <div className="row">
                            <label>Last Name :</label>
                            <div>{this.state.washer.lastName}</div>

                        </div>

                        <div className="row">
                            <label>Email :</label>
                            <div>{this.state.washer.emailId}</div>

                        </div>
                        <div className="row">
                            <label>Contact :</label>
                            <div>{this.state.washer.phNum}</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
