// Header.js
import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render(){
        return (
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a href="/"><h2>Nizam.id</h2></a>
        <a className="navbar-brand brand-logo-mini" href="/"><img src="/assets/images/logo.png" alt="logo"/></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="ti-layout-grid2"></span>
        </button>

        <ul className="navbar-nav navbar-nav-right">
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="ti-layout-grid2"></span>
        </button>
           <li className="nav-item">
             <Link  to={`/admin/logout`}   className="btn btn-sm btn-danger nav-link button-padding">
                <span style={{color: 'white',marginLeft: '15px',marginRight: '15px',marginBottom: '15px',marginTop: '15px'}}> Log Out</span>
              </Link>
          </li>
          </ul>
      </div>
    </nav>
        )
    }
}