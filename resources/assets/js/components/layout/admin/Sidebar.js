import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render(){
        return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link  className="nav-link" to={`/admin/dashboard`}>
              <i className="ti-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
              </Link>
          </li>
         
        <li className="nav-item">
              <Link  className="nav-link" to={`/admin/blog`}>
              <i className="ti-clipboard menu-icon"></i>
              <span className="menu-title">Blog</span>
              </Link>
        </li>

        <li className="nav-item">
              <Link className="nav-link" to={`/admin/project`}>
              <i className="ti-bookmark-alt menu-icon"></i>
              <span className="menu-title">Project</span>
              </Link>
        </li>
           <li className="nav-item">
              <Link  className="nav-link" to={`/admin/messages`}>
              <i className="ti-envelope menu-icon"></i>
              <span className="menu-title">Messages</span>
              </Link>
        </li>

        <li className="nav-item">
              <Link  className="nav-link" to={`/admin/logs`}>
              <i className="ti-direction-alt menu-icon"></i>
              <span className="menu-title">Logs</span>
              </Link>
        </li>
        </ul>
      </nav>
        )
    }
}