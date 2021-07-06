import React, { Component } from 'react'
import UsersService from '../services/UsersService'

export default class ViewUserComponent extends Component {
  constructor(props){
      super(props)

      this.state= {
          userId : this.props.match.params.userId,
          user : {}

      }
  }

  componentDidMount(){
     UsersService.getUserById(this.state.userId).then( res => {
         this.setState({user : res.data});
     })

  }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View User Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>User Name :</label>
                            <div>{this.state.user.name}</div>

                        </div>
                        <div className="row">
                            <label>Contact :</label>
                            <div>{this.state.user.phone}</div>

                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
