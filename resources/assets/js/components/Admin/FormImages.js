import React, {Component} from 'react';
import MyGlobalSetting from '../MyGlobalSetting';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
export default class FormProject extends Component {

  constructor(props) {
      super(props);
      if(this.props.match.params.id){
        this.id_project = this.props.match.params.id;
      }
      this.state = {
          data: [],
          id_project : this.id_project,
      };
      // bind

      this.handleFileSelect = this.handleFileSelect.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
    }
    handleSubmit(e) {
      e.preventDefault(); console.log(e.target.value);
        $('#button_submit').html('Waiting...');
        var uri_api = '/project/upload_images';
        axios
            .post(MyGlobalSetting.url + uri_api, {
                image_name: this.state.image_name,
                id_project: this.state.id_project,
                image: this.state.image
            })
            .then(response => {
                console.log(response);
                if(response.data.code==200){
                this.props.history.push('/admin/project/images/'+this.state.id_project);
                }else{
                $('#returnmessage').html('<div className="alert alert-danger alert-dismissable"><strong>Image Project  Failed!</strong> Please try again</div>');                    
                }
                $('#button_submit').html('Submit');

            });
    }
    getData() {
    axios.get(MyGlobalSetting.url + `/project?id_project=${this.props.match.params.id}`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
            this.setState({
                data: response.data.result,
                title: response.data.result.title
            })
        );
    }
    componentWillMount() {
      if(this.state.id_project){
        this.getData();
      }
    }

    handleFileSelect(evt) {
      var f = evt.target.files[0]; 
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var binaryData = e.target.result;
          var base64String = window.btoa(binaryData);
          document.getElementById('base64').value = base64String;
           this.setState({
                image: base64String
            })
        };
      })(f);
      reader.readAsBinaryString(f);
    }
    render(){
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
               
                  <form className="form-sample" onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div id="returnmessage"></div>
                      <div className="col-md-12">
                      <h3 style={{marginBottom: '50px'}}>
                      {this.state.title} Images
                      </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Image Name</label>
                          <div className="col-sm-9">
                            <input type="text"  className="form-control" name="image_name"  onChange={this.handleChange} />
                          </div>
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Image</label>
                          <div className="col-sm-9">
                            <input type="file" className="form-control" id="files" name="files"   onChange={this.handleFileSelect} />
                            <input id="base64" name="image" type="hidden" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2" id="button_submit">Submit</button>
                    <Link className="btn btn-light" to={`/admin/project/images/${this.props.match.params.id}`}>Cancel</Link>
                  </form>
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
