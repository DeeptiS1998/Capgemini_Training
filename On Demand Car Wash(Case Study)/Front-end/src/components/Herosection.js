import { Box } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'

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
        }
      }
}));


function Herosection(){
    const classes = useStyles();

    return(
        <Box className={classes.hero}>
            <Box>Switch Wash Car Service</Box>
        </Box>

    );
}

export default Herosection;