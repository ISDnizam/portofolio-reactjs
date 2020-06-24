import React, {Component} from 'react';
import MyGlobalSetting from '../MyGlobalSetting';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
export default class Logout extends Component {

    constructor(props) {
        super(props);
        localStorage.clear();
        localStorage.removeItem("id_user");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        window.location.href ='/';
    }
}
