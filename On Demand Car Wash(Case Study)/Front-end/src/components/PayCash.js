import React, { Component } from 'react'
import { Box } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { BlockRounded, BorderLeft } from '@material-ui/icons';


const useStyles=makeStyles((theme) =>({
    pay: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1549339435-27b266ac6f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        opacity:0.8,
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em",
         
        }
        
        
      }
}));


function PayCash(){
    const classes = useStyles();

    return(
        <Box className={classes.pay}>
            <Box>Pay Using Cash to the washer after your service is done. </Box>
        </Box>

    );
}

export default PayCash;
