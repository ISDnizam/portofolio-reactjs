import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from '../MyGlobalSetting';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
import ReactDatatable from '@ashvin27/react-datatable';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.num = 1;
        this.columns = [
            {
                key: "id_message",
                text: "#",
                className: "id_message",
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
                key: "name",
                text: "Name",
                className: "name",
                align: "left",
                sortable: true,
            }, 
            {
                key: "email",
                text: "Email",
                className: "email",
                align: "left",
                sortable: true
            },
            {
                key: "messages",
                text: "Messages",
                className: "messages",
                sortable: true,
                 cell: record => { 
                    var res = record.messages.substring(0, 25);
                    return (
                        <Fragment>
                        {res}                         
                        </Fragment>
                    );
                }
            },
           
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => { 
                    return (
                        <Fragment>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i> Delete
                            </button>
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
            messages: [],
        };
    }

    getMessages() {
      axios.get(MyGlobalSetting.url +`/messages`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
             this.setState({
                messages: [...response.data.result]
            })
        );
    }
    editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        const isNotId = messages => messages.id_message !== record.id_message;
        const updatedMessage = this.state.messages.filter(isNotId);
        this.setState({ messages: updatedMessage });

        axios.delete(MyGlobalSetting.url +`/messages/delete/`+record.id_message, {
        headers: { 'Authorization': MyGlobalSetting.auth }
        });
    }
    componentWillMount() {
        this.getMessages();
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
                    records={this.state.messages}
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

export default Messages;
