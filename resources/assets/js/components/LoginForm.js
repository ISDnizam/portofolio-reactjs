import React, {Component} from 'react';
import MyGlobalSetting from './MyGlobalSetting';
import  { Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default class LoginForm extends Component {

      constructor(props) {
        super(props);
        this.state = {
            id_user :localStorage.getItem( "id_user" ),
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        $('#button_submit').html('Waiting...');
        axios
            .post(MyGlobalSetting.url + "/auth/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log(response);
                if(response.data.code==200){
                localStorage.setItem('id_user', response.data.result.id);
                localStorage.setItem('email', response.data.result.email);
                localStorage.setItem('name', response.data.result.name);
                $('#returnmessage').html('<div className="alert alert-success alert-dismissable"><strong>Logged In Success!</strong> </div>');  
                window.location = "/";
                }else{
                $('#returnmessage').html('<div className="alert alert-danger alert-dismissable"><strong>Login Failed!</strong> Please try again</div>');                    
                }
                $('#button_submit').html('Login');

            });
    }
 
    render(){
        return (
    <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                    <form  onSubmit={this.handleSubmit} className="login100-form validate-form">
                    <span className="login100-form-title p-b-43">
                    Login to continue
                    </span>

                   <div className="alert alert-fill-danger" role="alert" id="returnmessage">
                    <i className="ti-info-alt">
                    </i> 
                    </div>                   
                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input id="email" type="text" className="input100" name="email"  required autoComplete="email" onChange={this.handleChange}  />
                        <span className="focus-input100"></span>
                        <span className="label-input100">Email</span>
                    </div>
                    
                    
                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input id="password" type="password" className="input100" name="password" required autoComplete="current-password" onChange={this.handleChange} />
                        <span className="focus-input100"></span>
                        <span className="label-input100">Password</span>
                    </div>

                         
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit" id="button_submit">
                            Login
                        </button>
                    </div>
                    
                 
                </form>

                               <div className="login100-more bg-login"></div>
            </div>
        </div>
    </div>
    
    
        )
    }
}
