import React, {Component} from 'react';
import { Link } from "react-router-dom";
import MyGlobalSetting from '../../MyGlobalSetting';

export default class Sidebar extends Component {

      constructor(props) {
        super(props);
        this.state = {
            id_user :localStorage.getItem( "id_user" ),
        };

        this.renderMenuAdmin = this.renderMenuAdmin.bind(this);
      }

    renderMenuAdmin() {
      if(MyGlobalSetting.isAuthenticated==true){
        return  (
                       <li><a href="/admin/dashboard">Dashboard</a></li>
        );
      }
    }

 
    render(){
        return (
               <div className="arlo_tm_wrapper_all">
  <div id="arlo_tm_popup_blog">
    <div className="container">
      <div className="inner_popup scrollable"></div>
    </div>
    <span className="close"><a href="#"></a></span>
  </div>
  

          <div className="arlo_tm_mobile_header_wrap">
            <div className="main_wrap">
              <div className="logo">
              <img src={"/assets/images/logo.png"} alt=""  className="logo_sm"/>
              </div>
              <div className="arlo_tm_trigger">
                <div className="hamburger hamburger--collapse-r">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arlo_tm_mobile_menu_wrap">
                <div className="mob_menu">
                <ul className="anchor_nav">
                  <li><Link to={`/`}>Home</Link></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#portofolio">Project</a></li>
                  <li><a href="/#contact">Contact</a></li>
                        {this.renderMenuAdmin()}
                </ul>
                </div>
            </div>
          </div>

              <div className="arlo_tm_content">
    
                <div className="arlo_tm_leftpart_wrap">
                  <div className="leftpart_inner">
                    <div className="logo_wrap">
                    <a href="#"><img src={"/assets/images/logo.png"} alt=""  className="logo_md"/></a>
                    </div>
                    <div className="menu_list_wrap">
                      <ul className="anchor_nav">

                       <li><Link to={`/`} >Home</Link></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#portofolio">Project</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        {this.renderMenuAdmin()}

                      </ul>
                    </div>
                    <a className="arlo_tm_resize" href="#"><i className="fa fa-angle-double-left"></i></a>
                  </div>
                </div>
              </div>
                </div>
        )
    }
}