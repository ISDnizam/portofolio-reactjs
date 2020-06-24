import React, {Component} from 'react';
import MyGlobalSetting from '../MyGlobalSetting';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            logsProject: [],
        };
    }
    getLogs() {
      axios.get(MyGlobalSetting.url +`/logs?location=homepage`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
             this.setState({
                logs: response.data.result.length,
            })
        );
    }

   getLogsProject() {
      axios.get(MyGlobalSetting.url +`/logs?loaction=project`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
             this.setState({
                logsProject: response.data.result.length,
            })
        );
    }

 componentWillMount() {
        this.getLogs();
        this.getLogsProject();
    }
    render(){
           return (
    <div className="tes container-fluid page-body-wrapper">
             <SidebarAdmin />
         <div className="main-panel">    
         <div className="content-wrapper">
            <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-5 mb-4 mb-xl-0">
                  <h4 className="font-weight-bold">Hi, Welcomeback!</h4>
                  <h4 className="font-weight-normal mb-0">aaaa,</h4>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="border-right pr-4 mb-3 mb-xl-0">
                      <p className="text-muted">Visitor</p>
                      <h4 className="mb-0 font-weight-bold">{this.state.logs}</h4>
                    </div>
                    <div className="border-right pr-4 mb-3 mb-xl-0">
                      <p className="text-muted">Project Viewer</p>
                      <h4 className="mb-0 font-weight-bold">{this.state.logsProject}</h4>
                    </div>
                    <div className="border-right pr-4 mb-3 mb-xl-0">
                      <p className="text-muted">Purchases</p>
                      <h4 className="mb-0 font-weight-bold">4006</h4>
                    </div>
                    <div className="pr-3 mb-3 mb-xl-0">
                      <p className="text-muted">Downloads</p>
                      <h4 className="mb-0 font-weight-bold">4006</h4>
                    </div>
                    <div className="mb-3 mb-xl-0">
                      <button className="btn btn-warning rounded-0 text-white">Downloads</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Number of Meetings</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                    <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-warning">2.00% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Number of Clients</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                    <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-danger">0.22% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Today’s Bookings</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40016</h3>
                    <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-success">10.00%<span className="text-black ml-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title text-md-center text-xl-left">Total Items Bookings</p>
                  <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                    <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>  
                  <p className="mb-0 mt-2 text-success">22.00%<span className="text-black ml-1"><small>(30 days)</small></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Order and Downloads</p>
                  <p className="text-muted font-weight-light">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                  <div className="d-flex flex-wrap mb-5">
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Order value</p>
                      <h3>12.3k</h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Orders</p>
                      <h3>14k</h3>
                    </div>
                    <div className="mr-5 mt-3">
                      <p className="text-muted">Users</p>
                      <h3>71.56%</h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Downloads</p>
                      <h3>34040</h3>
                    </div> 
                  </div>
                  <canvas id="order-chart"></canvas>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Sales Report</p>
                  <p className="text-muted font-weight-light">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                  <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                  <canvas id="sales-chart"></canvas>
                </div>
                <div className="card border-right-0 border-left-0 border-bottom-0">
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                      <button className="btn btn-lg btn-outline-light dropdown-toggle rounded-0 border-top-0 border-bottom-0" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Today
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                        <a className="dropdown-item" href="#">January - March</a>
                        <a className="dropdown-item" href="#">March - June</a>
                        <a className="dropdown-item" href="#">June - August</a>
                        <a className="dropdown-item" href="#">August - November</a>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block" type="button"> View all </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card bg-primary border-0 position-relative">
                <div className="card-body">
                  <p className="card-title text-white">Performance Overview</p>
                  <div id="performanceOverview" className="carousel slide performance-overview-carousel position-static pt-2" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-4 mt-md-0">
                              <div className="icon icon-a text-white mr-3">
                                <i className="ti-cup icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Revenue</h3>
                                  <h3 className="mb-0">34040</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+34040</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">0.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-b text-white mr-3">
                                <i className="ti-bar-chart icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Sales</h3>
                                  <h3 className="mb-0">$9672471</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">-7.34567</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">2.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-c text-white mr-3">
                                <i className="ti-shopping-cart-full icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Purchases</h3>
                                  <h3 className="mb-0">6358</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+9082</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">35.54%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-4 mt-md-0">
                              <div className="icon icon-a text-white mr-3">
                                <i className="ti-cup icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Revenue</h3>
                                  <h3 className="mb-0">34040</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+34040</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">0.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-b text-white mr-3">
                                <i className="ti-bar-chart icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Sales</h3>
                                  <h3 className="mb-0">$9672471</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">-7.34567</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">2.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-c text-white mr-3">
                                <i className="ti-shopping-cart-full icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Purchases</h3>
                                  <h3 className="mb-0">6358</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+9082</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">35.54%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-4 mt-md-0">
                              <div className="icon icon-a text-white mr-3">
                                <i className="ti-cup icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Revenue</h3>
                                  <h3 className="mb-0">34040</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+34040</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">0.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-b text-white mr-3">
                                <i className="ti-bar-chart icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Sales</h3>
                                  <h3 className="mb-0">$9672471</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">-7.34567</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">2.036%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 item">
                            <div className="d-flex flex-column flex-xl-row mt-5 mt-md-0">
                              <div className="icon icon-c text-white mr-3">
                                <i className="ti-shopping-cart-full icon-lg ml-3"></i>
                              </div>
                              <div className="content text-white">
                                <div className="d-flex flex-wrap align-items-center mb-2 mt-3 mt-xl-1">
                                  <h3 className="font-weight-light mr-2 mb-1">Purchases</h3>
                                  <h3 className="mb-0">6358</h3>
                                </div>
                                <div className="col-8 col-md-7 d-flex border-bottom border-info align-items-center justify-content-between px-0 pb-2 mb-3">
                                  <h5 className="mb-0">+9082</h5>
                                  <div className="d-flex align-items-center">
                                    <i className="ti-angle-down mr-2"></i>
                                    <h5 className="mb-0">35.54%</h5>
                                  </div>  
                                </div>
                                <p className="text-white font-weight-light pr-lg-2 pr-xl-5">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#performanceOverview" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#performanceOverview" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
             <FooterAdmin />
          
        </div>
        </div>
        </div>
        );
    }
}
