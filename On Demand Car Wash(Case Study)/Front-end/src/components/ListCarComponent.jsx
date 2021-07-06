import React, { Component } from 'react'
import CarService from '../services/CarService'
import AuthService from "../services/auth.service";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export default class ListCarComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           cars : [],
           currentUser: AuthService.getCurrentUser()


       }
       this.addCar = this.addCar.bind(this);
       this.editCar = this.editCar.bind(this);
       this.deleteCar = this.deleteCar.bind(this);
       
       
   }

   

    viewCar(carId){
        this.props.history.push(`/view-car/${carId}`);

    }

   editCar(carId){
       this.props.history.push(`/update-car/${carId}`);

   }
   deleteCar(carId){

      CarService.deleteCar(carId).then( res  => {
              this.setState({cars: this.state.cars.filter(car => car.carId !== carId)});
      });
   }



   componentDidMount(){
       CarService.getCars().then((res) =>{
                this.setState({cars: res.data});
       });
   }

   addCar(){
       this.props.history.push("/add-car");
   }

   //

   submit = (carId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteCar(carId)

        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
   

    render() {
        const { currentUser } = this.state;
        return (
              
            
            <div>
               <h2 className="text-center">Cars List</h2>
               <div className="row">
                {    currentUser && currentUser.roles[0] ==="ROLE_ADMIN" &&   <button className="btn btn-primary" onClick={this.addCar}>Add Car</button>}
               </div>

               <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Car id</th>
                                <th>Car name </th>
                                <th>Type</th>
                                <th>Color</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                         <tbody>
                             {
                                 this.state.cars.map(
                                     car =>
                                     <tr key= {car.carId}>
                                         <td>{car.carId}</td>
                                         <td>{car.carname}</td>
                                         <td>{car.cartype}</td>
                                         <td>{car.colour}</td>

                                         <td>
                                         {  currentUser &&  (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )    && <button onClick={() =>this.editCar(car.carId)} className="btn btn-info">Update</button>}
                                            { currentUser &&  (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )   && <button  style={{marginLeft:"10px"}} onClick={() =>this.submit(car.carId)} className="btn btn-danger">Delete</button>}
                                           <button  style={{marginLeft:"10px"}} onClick={() =>this.viewCar(car.carId)} className="btn btn-info">View</button>
                                         </td>
                                         
                                     </tr>

                                 
)
}
                         </tbody>


                    </table>
               </div>



            </div>
        )
    }
}

