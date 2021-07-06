import React, { useRef, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router";
import ServicePlan from '../services/ServicePlan';
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";


export default function Paypal({price}) {

    //  this.state = {
    
    // currentUser: AuthService.getCurrentUser()

    // }
  
  console.log(price)
  const paypal = useRef();

   const {amount} = useParams();
   console.log(amount)

  //  const {currentUser} = useParams();
  //  console.log(currentUser)


  
 
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Regular Wash",
                amount: {
                  currency_code: "USD",
                  value: amount,
                 
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []); 

  return (  
    
    <div>
      {<div ref={paypal}></div>}
      <Link className="button"  style={{marginLeft:"10px"}} to={"/cash"}  >
                                              Pay Using Cash
                                               </Link> 
    </div>
    
     
     
  );
}