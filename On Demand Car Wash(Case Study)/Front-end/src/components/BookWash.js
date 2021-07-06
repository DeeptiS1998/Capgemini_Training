
import React, {Component} from 'react';
import { Row, Col, } from 'react-bootstrap';
import {  Link } from "react-router-dom";

class BookWash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carName: "",
            carType: "",
            color: "",
            address:"",
            contact:"",
            package: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    carhandler = (event) => {
        this.setState({
            carName: event.target.value
        })
    }
    typehandler = (event) => {
        this.setState({
            carType: event.target.value
        })
    }
    colorhandler = (event) => {
        this.setState({
            color: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    contacthandler = (event) => {
        this.setState({
            contact: event.target.value
        })
    }

    packagehandler = (event) => {
        this.setState({
            package: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.carName} ${this.state.carType}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            carName: "",
            carType: "",
            color: '',
            address:"",
            contact:"",
            pacakge: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div className="bodyz">

                <form onSubmit={this.handleSubmit}>
                    <h1>Enter Details to Book a Car Wash</h1>
                    <Row> <Col>
                    <label>Car Name </label> <input type="text" value={this.state.carName} onChange={this.carhandler} placeholder="Car Name" /><br />
                    <label>Car Type </label> <input type="text" value={this.state.carType} onChange={this.typehandler} placeholder="Car Type" /><br />
                    <label>Color </label> <input type="text" value={this.state.color} onChange={this.colorhandler} placeholder="Color" /><br />
                    <label>Address </label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Color" /><br />
                    </Col>
                    <Col>
                    <label>Contact No. </label> <input type="text" value={this.state.contact} onChange={this.contacthandler} placeholder="Color" /><br />
                    <label>Package </label><select onChange={this.packagehandler} defaultValue="Select Package">
                     
                        <option defaultValue>Select Package</option>
                        <option value="male">Basic</option>
                        <option value="female">Standard</option>
                        <option value="female">Premiuem</option>
                    </select><br />
                    </Col>
                    </Row>
                    <Link className="button" to={"/payment"} >
                     Book Now
                    </Link>
                </form>

            </div>
            
        )
    }
}

export default BookWash