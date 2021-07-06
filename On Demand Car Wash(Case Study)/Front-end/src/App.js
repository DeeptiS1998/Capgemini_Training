import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import BoardUser from "./components/board-user.component";
import BoardWasher from "./components/board-washer.component";
import BoardAdmin from "./components/board-admin.component";
import ListUserComponent from "./components/ListUserComponent";
import Footer from "./components/Footer";
import ListCarComponent from "./components/ListCarComponent";
import ListWasherComponent from "./components/ListWasherComponent";
import ListServiceComponent from "./components/ListServiceComponent";
import CreateCarComponent from "./components/CreateCarComponent";
import UpdateCarComponent from "./components/UpdateCarComponent";
import ViewCarComponent from "./components/ViewCarComponent";
import CreateServiceComponent from "./components/CreateServiceComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import CreateWasherComponent from "./components/CreateWasherComponent";
import Dashboard from "./services/Dashboard"
import Bookingsection from "./components/Bookingsection";
import BookWash from "./components/BookWash";
import Paypal from "./components/PayPal";
import ListOrderComponent from "./components/ListOrderComponent";
import CreateOrderComponent from "./components/CreateOrderComponent";
import UpdateOrderComponent from "./components/UpdateOrderComponent";
import UpdateServiceComponent from "./components/UpdateServiceComponent";
import PayCash from "./components/PayCash";
import UpdateUserComponent from "./components/UpdateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import UpdateWasherComponent from "./components/UpdateWasherComponent";
import ViewOrderComponent from "./components/ViewOrderComponent";
import ViewWasherComponent from "./components/ViewWasherComponent";
import ViewServiceComponent from "./components/ViewServiceComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showWasherBoard: user.roles.includes("ROLE_WASHER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showWasherBoard, showAdminBoard } = this.state;

    return (
      <>
      <div className="bodyabc">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Switch Wash
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
              
            </li>
            
            <li className="nav-item"><Link to={"/carlist"} className="nav-link">Cars List</Link></li>
            <li className="nav-item"><Link to={"/servicelist"} className="nav-link">Services</Link></li>
              { currentUser && (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )  &&  <li className="nav-item"><Link to={"/userlist"} className="nav-link">User List</Link></li>}
            <li className="nav-item"><Link to={"/washerlist"} className="nav-link">Washers</Link></li>
            { currentUser && (currentUser.roles[0] ==="ROLE_ADMIN"  || currentUser.roles[0] ==="ROLE_WASHER" )  && <li className="nav-item"><Link to={"/orderlist"} className="nav-link">Orders</Link></li>}

           
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            
            
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Bookingsection} />
            <Route exact path="/payment/:amount" component={Paypal} />
            
            <Route exact path="/cash" component={PayCash} />

            <Route exact path="/booking" component={BookWash} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardWasher} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/userlist" component={ListUserComponent} />
            <Route path="/carlist" component={ListCarComponent} />
            <Route path="/servicelist" component={ListServiceComponent} />
            <Route path="/washerlist" component={ListWasherComponent} />
            <Route path="/orderlist" component={ListOrderComponent} />
            <Route path="/add-order" component={CreateOrderComponent} />
            <Route path="/update-order/:orderId" component={UpdateOrderComponent} />
            
             //for car
            <Route path="/add-car" component={CreateCarComponent} />
            <Route path="/update-car/:carId" component={UpdateCarComponent} />
              <Route path="/view-car/:carId" component={ViewCarComponent} />
             //for service
            <Route path="/add-service" component={CreateServiceComponent} />
            <Route path="/update-service/:serviceplanId" component={UpdateServiceComponent} />
            <Route path="/view-service/:serviceplanId" component={ViewServiceComponent} />

             //user
            <Route path="/add-user" component={CreateUserComponent} />
            <Route path="/update-user/:userId" component={UpdateUserComponent} />
            <Route path="/view-user/:userId" component={ViewUserComponent} />
           
             
             //washer
            <Route path="/add-washer" component={CreateWasherComponent} />
            <Route path="/update-washer/:id" component={UpdateWasherComponent} />
            <Route path="/view-washer/:id" component={ViewWasherComponent} />
            

            //order
            <Route path="/view-order/:orderId" component={ViewOrderComponent} />

            <Route exact path="/dashboard" component={Dashboard}/>
            



            

          </Switch>
          {/* <Footer/> */}
        </div>
        
      </div>
      <Footer/>
      </>
    );
  }
}

export default App;