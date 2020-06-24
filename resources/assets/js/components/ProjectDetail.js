import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from './MyGlobalSetting';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            project: [],
            images: []
        };
        // bind
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
    // lifecycle mehtod
    componentWillMount() {
        this.getProject();
    }


    render() {
        return (
        <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
            <div className="arlo_tm_portfolio_single_wrap">
                <div className="container">
                    <div className="title_holder">
                        <h3> {this.state.project.title}</h3>
                    </div>
                    <div className="details_wrap">
                        <div className="leftbox">
                            <div className="name_holder">
                                <h3>Project Details</h3>
                            </div>
                            <div className="short_list">
                                <ul>
                                    <li>
                                        <span className="first">Category :</span>
                                        <span className="second">{this.state.project.category}</span>
                                    </li>
                                    <li>
                                        <span className="first">Client :</span>
                                        <span className="second">{this.state.project.client}</span>
                                    </li>
                                    <li>
                                        <span className="first">Url :</span>
                                        <span className="second">{this.state.project.url}</span>
                                    </li>

                                    <li>
                                        <img src={this.state.project.image} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightbox">
                            <p>{this.state.project.description}</p>
                                <div className="images_list">
                                    <ul>
                                        {this.state.images.map(img => (
                                            <li  key={img.id_image}>
                                                    <img src={img.full_path} alt="" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default ProjectDetail;
