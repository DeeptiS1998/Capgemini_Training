import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css'; 


ReactDOM.render(
  
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>,
  
  

  document.getElementById("root")
);

serviceWorker.unregister();