import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Template_1 from '../components/ResumeTemplates/Template_1/Template_1';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import SigninScreen from '../screens/SigninScreen/SigninScreen';

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={SigninScreen} />
                <Route path='/register' exact component={RegisterScreen} />
                <Route path='/resume/1' exact component={Template_1} />
            </Router>
       )
    }
};