import { Box } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'
import  { useState } from "react";
import { Link } from "react-router-dom";





const useStyles=makeStyles((theme) =>({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1616804087352-0d82fc0c37bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em"
        },
        button:{
              fontSize:"40px",
              margin:"30px",
              padding:"10px"


        }
      }
}));


function Bookingsection(){
    const classes = useStyles();
    const [checkout, setCheckOut] = useState(false);

    

    return(

   
      

        <Box className={classes.hero}>
            <Box>Book Your Car Wash </Box>
            {/* <button className="button" onClick={window.location='http://localhost:3002/booking'}> */}
            
           <Link className="button" to={"/servicelist"} className="nav-link">
           Book Now
              </Link>
            {/* </ button> */}

            
        </Box>

        

        
        

    );
}

export default Bookingsection;