import React, {Component} from 'react';
import MyGlobalSetting from '../MyGlobalSetting';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SidebarAdmin from '../layout/admin/Sidebar';
import FooterAdmin from '../layout/admin/Footer';
export default class FormBlog extends Component {

  constructor(props) {
      super(props);
      if(this.props.match.params.id){
        this.id_blog = this.props.match.params.id;
      }else{
        this.id_blog='';
      }
      this.state = {
          data: [],
          id_blog : this.id_blog,
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
      if(this.state.id_blog){
        var uri_api = '/blog/update';
        axios
            .put(MyGlobalSetting.url + uri_api, {
                id_blog: this.state.id_blog,
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                category: this.state.category
            })
            .then(response => {
                console.log(response);
                if(response.data.code==200){
                this.props.history.push('/admin/blog');
                }else{
                $('#returnmessage').html('<div className="alert alert-danger alert-dismissable"><strong>Update blog Failed !</strong> Please try again</div>');                    
                }
                $('#button_submit').html('Submit');

            });
      }else{
        var uri_api = '/blog/create';
        axios
            .post(MyGlobalSetting.url + uri_api, {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,
                image: this.state.image
            })
            .then(response => {
                console.log(response);
                if(response.data.code==200){
                this.props.history.push('/admin/blog');
                }else{
                $('#returnmessage').html('<div className="alert alert-danger alert-dismissable"><strong>Create blog  Failed!</strong> Please try again</div>');                    
                }
                $('#button_submit').html('Submit');

            });
      }

    }
    getData() {
    axios.get(MyGlobalSetting.url + `/blog?id_blog=${this.props.match.params.id}`, {
    headers: { 'Authorization': MyGlobalSetting.auth }
    }).then(response =>
            this.setState({
                data: response.data.result,
                title: response.data.result.title,
                category: response.data.result.category,
                client: response.data.result.client,
                description: response.data.result.description,
                url: response.data.result.url
            })
        );
    }
    componentWillMount() {
      if(this.state.id_blog){
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
                      {this.state.title}
                      </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Title</label>
                          <div className="col-sm-9">
                            <input type="text" value={this.state.title} className="form-control" name="title"  onChange={this.handleChange} />
                          </div>
                        </div>

               

                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Description</label>
                          <div className="col-sm-9">
                            <textarea className="form-control" name="description"   onChange={this.handleChange} value={this.state.description} />
                          </div>
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Category</label>
                          <div className="col-sm-9">
                            <select name="category" className="form-control" id="form_category"  onChange={this.handleChange} >
                              <option value="Codeigniter">Codeigniter</option>
                              <option value="Development">Development</option>
                              <option value="Design">Design</option>
                            </select>
                          </div>
                        </div>

                   
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
                    <Link className="btn btn-light" to={"/admin/blog"}>Cancel</Link>
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
