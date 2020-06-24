import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from '../MyGlobalSetting';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';

class ProjectImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            images: [],
        };
    }

    getProject() {
        axios.get(MyGlobalSetting.url +`/project?id_project=${this.props.match.params.id}`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
             this.setState({
                project: response.data.result,
                images: response.data.result.images
            })
        );
    }
    
     editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(id_image) {
        const isNotId = images => images.id_image !== id_image;
        const updatedImages = this.state.images.filter(isNotId);
        this.setState({ images: updatedImages });

        axios.delete(MyGlobalSetting.url +`/project/delete_image/`+id_image, {
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
          
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 > {this.state.project.title} Images</h3>

                                    <Link className="btn btn-primary" style={{width: '15%',marginLeft: '0px',marginTop: '15px', marginBottom:'25px'}} to={`/admin/project/addImages/${this.props.match.params.id}`} >
                                    Add Images
                                    </Link>
                                        <div className="row portfolio-grid">
                                            {this.state.images.map(img => (
                                            <div  key={img.id_image} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                              <figure className="effect-text-in">
                                                <img src={img.full_path} alt="image"  style={{height: '400px'}}  />
                                                    <figcaption>

                                                  <h4>{img.image_name}</h4>
                                                  <p>
                                                <a  onClick={() => this.deleteRecord(img.id_image)}  className="btn btn-danger">Delete</a>
                                                  </p>
                                                </figcaption>
                                              </figure>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
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

export default ProjectImages;
