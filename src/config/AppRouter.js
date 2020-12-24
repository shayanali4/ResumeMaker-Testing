  
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import SigninScreen from '../Screens/SigninScreen/SigninScreen';

export default class Routers extends Component {
       render() {
        return (
            <Router>
                    <Route path='/' exact component={SigninScreen} />
                    <Route path='/register' exact component={RegisterScreen} />
            </Router>
       )
    }
}