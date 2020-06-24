import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from '../MyGlobalSetting';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
import ReactDatatable from '@ashvin27/react-datatable';

class Logs extends Component {
    constructor(props) {
        super(props);
        this.num = 1;
        this.columns = [
            {
                key: "id_log",
                text: "#",
                className: "id_log",
                sortable: true,
                 cell: record => { 
                    return (
                        <Fragment>
                        {this.num++}
                        </Fragment>
                    );
                }
            },
            {
                key: "location",
                text: "Location",
                className: "location",
                align: "left",
                sortable: true,
            }, 
            {
                key: "created_at",
                text: "Created_at",
                className: "created_at",
                sortable: true,
                 cell: record => { 
                    return (
                        <Fragment>
                        {record.created_at}                         
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: true,
                print: true
            }
        }

        this.state = {
            logs: [],
        };
    }

    getLogs() {
      axios.get(MyGlobalSetting.url +`/logs`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
             this.setState({
                logs: [...response.data.result]
            })
        );
    }

 
    componentWillMount() {
        this.getLogs();
    }



    render() {
        return (
    <div className="tes container-fluid page-body-wrapper">
             <SidebarAdmin />
         <div className="main-panel">    
         <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <div className="row">
                <div className="col-12">
                    <ReactDatatable
                    config={this.config}
                    records={this.state.logs}
                    columns={this.columns}
                />
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

export default Logs;
