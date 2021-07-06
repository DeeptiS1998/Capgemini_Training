import React, { Component } from "react";
import UserService from "../services/user.service";
import Cards from "./Cards";
import Herosection from "./Herosection";
import Places from "./Places";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

 
  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
          {/* <div><img src="images/poster2.png" height="400" width="1080"/></div> */}

          <Herosection  />

        <header className="jumbotron"> 
          <h3>{this.state.content}</h3>
          <h1>Welcome to Switch Wash</h1>
          <p>
          An On-Demand Car wash service application will make the lives of car owners easier by providing car-washing service at their doorstep or as per the user's convenience.
          This application has a lot to offer, such as location-based car wash services, user customization add-ons on the services, simple online payments, and review and ratings.
                  
        </p>
        
           
        </header>
        
       <Cards />

       <Places/>

      </div>
    );
  }
}