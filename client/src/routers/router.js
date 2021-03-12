import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/AboutUs'
import Contact from '../pages/ContactUs'
import Services from '../pages/Services'



export const Routers = () => {
    
    return (
     
        <Router>
            
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/sobre-nos" component={About}/>
          <Route  path="/nossos-servicos" component={Services}/>
          <Route  path="/entre-em-contacto" component={Contact}/>
           
          
          
        </Switch>
      </Router>
    )
}