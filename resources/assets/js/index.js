import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import Sidebar from './components/layout/home/Sidebar';
import LoginForm from './components/LoginForm';
import Footer from './components/layout/home/Footer';
import MyGlobalSetting from './components/MyGlobalSetting';


import HeaderAdmin from './components/layout/admin/Header';
import FooterAdmin from './components/layout/admin/Footer';
import ProjectAdmin from './components/Admin/Project';
import ProjectImages from './components/Admin/ProjectImages';
import LogsAdmin from './components/Admin/Logs';
import BlogAdmin from './components/Admin/Blog';
import MessagesAdmin from './components/Admin/Messages';
import DashboardAdmin from './components/Admin/Dashboard';
import FormProject from './components/Admin/FormProject';
import FormImages from './components/Admin/FormImages';
import FormBlog from './components/Admin/FormBlog';
import Logout from './components/Admin/Logout';
if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
             <Sidebar />
                <Switch>
                    <Route exact path="/project/detail/:id" component={ProjectDetail} />
                    <App />
                </Switch>
                 <Footer />
            </div>
        </BrowserRouter>,

        document.getElementById('root')
    );
}


if (document.getElementById('root-login')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                 <LoginForm />

                </Switch>
            </div>
        </BrowserRouter>,

        document.getElementById('root-login')
    );
}



if (document.getElementById('root-admin')) {
    if(MyGlobalSetting.isAuthenticated==true){
        ReactDOM.render(
            <BrowserRouter>
                <div>
                 <HeaderAdmin />
                    <Switch>
                        <Route exact path="/project/detail/:id" component={ProjectDetail} />
                        <Route exact path="/admin/project/images/:id" component={ProjectImages} />
                        <Route exact path="/admin/project" component={ProjectAdmin} />
                        <Route exact path="/admin/logs" component={LogsAdmin} />
                        <Route exact path="/admin/project/addProject" component={FormProject} />
                        <Route exact path="/admin/project/editProject/:id" component={FormProject} />
                        <Route exact path="/admin/project/addImages/:id" component={FormImages} />
                        <Route exact path="/admin/dashboard" component={DashboardAdmin} />
                        <Route exact path="/admin/blog" component={BlogAdmin} />
                        <Route exact path="/admin/blog/addBlog" component={FormBlog} />
                        <Route exact path="/admin/blog/editBlog/:id" component={FormBlog} />
                        <Route exact path="/admin/messages" component={MessagesAdmin} />
                        <Route exact path="/admin/logout" component={Logout} />
                    </Switch>
                </div>
            </BrowserRouter>,
            document.getElementById('root-admin')
        );
    }else{
    window.location.href ='/';
    }
}
