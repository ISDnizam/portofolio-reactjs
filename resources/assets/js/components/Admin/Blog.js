import React, { Component, Fragment  } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from '../MyGlobalSetting';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
import ReactDatatable from '@ashvin27/react-datatable';

class Blog extends Component {
  
      constructor(props) {
        super(props);
        this.num = 1;
        this.columns = [
            {
                key: "id_blog",
                text: "#",
                className: "id_blog",
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
                    var res = record.description.substring(0, 25);
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
                                to={`/admin/blog/editBlog/${record.id_blog}`}                                
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
            blog: [],
        }
    }


    getBlog() {
        axios.get(MyGlobalSetting.url +`/blog`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
             this.setState({
                blog: [...response.data.result]
            })
        );
    }
    componentWillMount() {
        this.getBlog();
    }


    editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        const isNotId = blog => blog.id_blog !== record.id_blog;
        const updatedBlog = this.state.blog.filter(isNotId);
        this.setState({ blog: updatedBlog });

        axios.delete(MyGlobalSetting.url +`/blog/delete/`+record.id_blog, {
        headers: { 'Authorization': MyGlobalSetting.auth }
        });
    }

    render() {
        return (
            <div className="tes container-fluid page-body-wrapper">
             <SidebarAdmin />
         <div className="main-panel">    
         <div className="content-wrapper">
          <div className="card">
           <Link className="btn btn-primary pull-right" style={{width: '15%',marginLeft: '15px',marginTop: '15px'}} to={`/admin/blog/addBlog`} >
              Add Content
              </Link>
            <div className="card-body">
              <h4 className="card-title"></h4>

              <div className="row">

                <div className="col-12">
                   <ReactDatatable
                    config={this.config}
                    records={this.state.blog}
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

               
        )
    }
}


export default Blog;
