import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
import Movies from "./Movies"

import AllTheatresAndTimings from "./AllTheatresAndTimings";
import '../App.css';

import Ticket from "./Ticket";
import Addmovies from "./Addmovies";
import Addhall from "./Addhall";
import Realticket from "./realticket";
import history from "./History";
import Payments from "./Payments";
import Profile from "./Profile";
import myprofile from "./myprofile";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/booking' component={Booking}/>
                    <Route  path='/movies' component={Movies}/>

                    <Route  path='/alltheatresAndTimings' component={AllTheatresAndTimings}/>
                    <Route  path='/Ticket' component={Ticket}/>
                    <Route  path='/payments' component={Payments}/>

                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/realticket' component={Realticket}/>
                    <Route  path='/addmovies' component={Addmovies}/>
                    <Route  path='/addhall' component={Addhall}/>
                    <Route  path='/myprofile' component={myprofile}/>
                </Switch>
            </Router>
        );

    }
}
export default Routes;