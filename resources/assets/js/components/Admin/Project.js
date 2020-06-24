import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from '../MyGlobalSetting';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
import ReactDatatable from '@ashvin27/react-datatable';
import ButtonModal from './ButtonModal';

class Project extends Component {
    constructor(props) {
        super(props);
        this.num = 1;
        this.columns = [
            {
                key: "id_project",
                text: "#",
                className: "id_project",
                sortable: true,
                 cell: record => { 
                    return (
                        <Fragment>
                        {record.id_project}
                        </Fragment>
                    );
                }
            },
            {
                key: "title",
                text: "Title",
                className: "title",
                align: "left",
                sortable: true,
            },
            {
                key: "description",
                text: "Description",
                className: "description",
                sortable: true,
                 cell: record => { 
                    var res = record.description;
                    if(record.description){
                        if(record.description.length >=25){
                        var res = record.description.substring(0, 25);
                        }
                    }
                    return (
                        <Fragment>
                        {res}                         
                        </Fragment>
                    );
                }
            },
            {
                key: "category",
                text: "Category",
                className: "category",
                align: "left",
                sortable: true
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
                            <Link
                                className="btn btn-primary btn-sm"
                                to={`/admin/project/images/${record.id_project}`}                                
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-photo"></i>
                            </Link>
                            <Link
                                className="btn btn-primary btn-sm"
                                to={`/admin/project/editProject/${record.id_project}`}                                
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-edit"></i>
                            </Link>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i>
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
            project: [],
        };
    }

    getProject() {
        axios.get(MyGlobalSetting.url +`/project`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
             this.setState({
                project: [...response.data.result]
            })
        );
    }
    
     editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        const isNotId = project => project.id_project !== record.id_project;
        const updatedProject = this.state.project.filter(isNotId);
        this.setState({ project: updatedProject });

        axios.delete(MyGlobalSetting.url +`/project/delete_project/`+record.id_project, {
        headers: { 'Authorization': MyGlobalSetting.auth }
        });
    }

    componentWillMount() {
        this.getProject();
    }




    render() {
        return (
    <div className="tes container-fluid page-body-wrapper">
             <SidebarAdmin />
         <div className="main-panel">    
         <div className="content-wrapper">
          <div className="card">
              <Link className="btn btn-primary pull-right" style={{width: '15%',marginLeft: '15px',marginTop: '15px'}} to={`/admin/project/addProject`} >
              Add Project
              </Link>
            <div className="card-body">
              <h4 className="card-title"></h4>
              <div className="row">
                <div className="col-12">
                   <ReactDatatable
                    config={this.config}
                    records={this.state.project}
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

export default Project;
