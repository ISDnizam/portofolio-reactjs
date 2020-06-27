import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyGlobalSetting from './MyGlobalSetting';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            setting_name: [],
            profil: [],
            additional_data: [],
            skill: [],
            skills: [],
            id_user :localStorage.getItem( "id_user" ),
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderBanner = this.renderBanner.bind(this);
        this.renderAbout = this.renderAbout.bind(this);
        this.renderAbilities = this.renderAbilities.bind(this);
        this.renderProject = this.renderProject.bind(this);
        this.renderCountProject = this.renderCountProject.bind(this);
        this.renderContact = this.renderContact.bind(this);

    }
    handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        $('#button_submit').html('Waiting...');
        axios
            .post(MyGlobalSetting.url + "/messages/create", {
                name: this.state.name,
                email: this.state.email,
                messages: this.state.messages
            }, {
    headers: { 'Authorization': MyGlobalSetting.auth }
  })
            .then(response => {
                if(response.data.code==200){
                localStorage.setItem('recipe', 'ssssss');
                var sessio = localStorage.getItem( "recipe" );
                console.log(sessio);

                $('#name').val('');
                $('#email').val('');
                $('#messages').val('');  
                $('#returnmessage').html('<div className="alert alert-success alert-dismissable"><strong>Success!</strong> Your message has been received, We will contact you soon.</div>');                    
                }else{
                $('#returnmessage').html('<div className="alert alert-danger alert-dismissable"><strong>Failed!</strong> Please try again</div>');                    
                }
                $('#button_submit').html('Send Message');

            });
    }
 
    getTasks() {
        axios.get(MyGlobalSetting.url + "/project", {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
            this.setState({
                tasks: [...response.data.result]
            })
        );
    }

    getProfil() {
        axios.get(MyGlobalSetting.url + "/settings?setting_name=profile", {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
            this.setState({
                setting_name: response.data.result.setting_name,
                profil: response.data.result,
                additional_data :  JSON.parse(response.data.result.additional_data)
            })
        );
    }
    getSkill() {
        axios.get(MyGlobalSetting.url + "/settings?setting_name=skills", {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
            this.setState({
                skill :  JSON.parse(response.data.result.additional_data)
            })
        );
    }
    getSkills() {
        axios.get(MyGlobalSetting.url + "/settings?setting_name=other_skills", {
    headers: { 'Authorization': MyGlobalSetting.auth }
  }).then(response =>
            this.setState({
                skills :  JSON.parse(response.data.result.additional_data)
            })
        );
    }
    // lifecycle mehtod
    componentDidMount() {

        const script = document.createElement("script");
    script.src = "/assets/js/plugins.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
 
   const scripts = document.createElement("script");
    scripts.src = "/assets/js/init.js";
    scripts.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(scripts);



    }
    componentWillMount() {
 
    this.getTasks();
    this.getProfil();
    this.getSkill();
    this.getSkills();

    }

    renderBanner() {
        return  (
                <div className="arlo_tm_section" id="home">
                    <div className="arlo_tm_hero_header_wrap">
                        <div className="arlo_tm_universal_box_wrap particle jarallax" data-speed="0.1">
                            <div id="particles-js"></div> 
                            <div className="particle_overlay"></div>
                            <div className="inner_content">
                                <div className="image_wrap">
                                    <img src={this.state.additional_data.profile_picture} alt="" />
                                </div>
                                <div className="name_holder">
                                    <h3>I'm <span>{this.state.additional_data.name}</span></h3>
                                </div>
                                <div className="text_typing">
                                    <p>as a <span className="arlo_tm_animation_text_word"></span></p>
                                </div>
                            </div>
                            <div className="arlo_tm_arrow_wrap bounce anchor">
                                <a href="#about"><i className="fa fa-angle-double-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

   renderAbout() {
        return  (
<div className="arlo_tm_section relative" id="about">
    <div className="arlo_tm_about_wrapper_all">
        <div className="container">
            <div className="arlo_tm_title_holder">
                <h3>About Me</h3>
                <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
                <div className="author_wrap">
                    <div className="leftbox">
                        <div className="about_image_wrap parallax" data-relative-input="true">
                            <div className="image layer" data-depth="0.1">
                                <img src={"http://frenify.com/envato/marketify/html/arlo/1/img/about/550x640.jpg"} alt="" />
                                <div className="inner" data-img-url={"/assets/images/foto1.jpg"}></div>


                            </div>
                            <div className="border layer" data-depth="0.2">
                                <img src={"http://frenify.com/envato/marketify/html/arlo/1/img/about/550x640.jpg"} alt="" />
                                <div className="inner"></div>
                            </div>
                        </div>
                    </div>
                    <div className="rightbox">
                        <div className="arlo_tm_mini_title_holder hidden-xs">
                            <h4>I'm {this.state.additional_data.name} as a <span className="arlo_tm_animation_text_word"></span></h4>
                        </div>
                        <div className="definition">
                            <p>{this.state.additional_data.about}</p>
                        </div>
                        <div className="about_short_contact_wrap">
                            <ul>
                                <li>
                                    <span><label>Birtday:</label> {this.state.additional_data.birthday}</span>
                                </li>
                                <li>
                                    <span><label>City:</label> {this.state.additional_data.city}</span>
                                </li>
                                <li>
                                    <span><label>Study:</label> {this.state.additional_data.study}</span>
                                </li>
                                <li>
                                    <span><label>Website:</label> {this.state.additional_data.website}</span>
                                </li>
                                <li>
                                    <span><label>Mail:</label> {this.state.additional_data.email}</span>
                                </li>
                                <li>
                                    <span><label>Phone:</label> {this.state.namaya} {this.state.additional_data.phone}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="buttons_wrap">
                            <ul>
                                <li>
                                    <a href="/assets/doc/CV-Abul-Nizam-Faisal.pdf" target="_blank"><span>Download CV</span></a>
                                </li>
                                <li className="anchor">
                                    <a href="#contact" className="btn btn-primary"><span>Send Message</span></a>
                                </li>
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


    renderAbilities() {
        return  (
                    <div className="arlo_tm_section">
                    <div className="arlo_tm_skills_wrap">
                        <div className="container">
                            <div className="inner_wrap">
                                    <div className="arlo_tm_mini_title_holder" >
                                        <h4>Some About my Abilities</h4>
                                    </div>
                                        <div className="progress_bar_wrap_total" >
                                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                
                                                {this.state.skill.map(sk => (
                                                   <div  key={sk.ability} className="arlo_tm_progress" data-value={sk.ability} data-color="#000">
                                                            <span><span className="label"> {sk.name}   - <span className="experience"></span></span><span className="number"></span></span>
                                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                                        </div>
                                                ))}
                                                </div>
                                        </div>

                                            <div className="progress_bar_wrap_total" >
                                                <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                                {this.state.skills.map(sk => (
                                                   <div  key={sk.ability} className="arlo_tm_progress" data-value={sk.ability} data-color="#000">
                                                            <span><span className="label"> {sk.name}   - <span className="experience"></span></span><span className="number"></span></span>
                                                            <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                                                        </div>
                                                ))}
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        );
    }

    renderProject() {
        return  (
                            <div className="arlo_tm_section relative" id="portofolio">
                    <div className="arlo_tm_portfolio_wrapper_all">

                        <div className="arlo_tm_second_portfolio">
                        <div className="container">
                            <div className="arlo_tm_portfolio_wrap">
                                <div className="arlo_tm_title_holder portfolio">
                                    <h3>Projects</h3>
                                    <span>Check out our latest creative works</span>
                                </div>
                                <div className="arlo_tm_portfolio_titles"></div>
                                <ul class="arlo_tm_portfolio_filter">
									<li><a href="#" class="current" data-filter="*">All</a></li>
									<li><a href="#" data-filter=".WebDevelopment">Web Development</a></li>
									<li><a href="#" data-filter=".MobileApp">Mobile App</a></li>
									<li><a href="#" data-filter=".Design">Design</a></li>
								</ul>
                                <ul className="arlo_tm_portfolio_list gallery_zoom">
                                    {this.state.tasks.map(task => (
                                    <li  key={task.id_project} className={task.category.replace(' ','',task.category)}>
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title={task.title} data-category={task.category.replace(' ','',task.category)}>
                                            <Link to={`/project/detail/${task.id_project}`}>
                                                <img className="image_project" src={task.image} alt="" />
                                                <div className="arlo_tm_portfolio_image_main" data-img-url={'task.image'}></div>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

        );
    }



    renderCountProject() {
        const projectToRender = this.state.tasks
        const totalProject = projectToRender.length
        const totalClient = parseInt(totalProject)-3;
        return  (
                            <div className="arlo_tm_section hidden-xs" id="testimonials">
    <div className="arlo_tm_testimonials_wrapper_all">
        <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
                <div className="overlay_image testimonial jarallax" data-speed="0"></div>
                <div className="overlay_color testimonial"></div>
            </div>
            <div className="content testimonial">
                <div className="arlo_tm_testimonial_wrap">
                    <div className="container">
                        <div className="arlo_tm_counter_wrap" data-col="4" data-delay="300">
                            <ul className="arlo_tm_counter_list arlo_tm_miniboxes">
                                <li>
                                    <div className="inner arlo_tm_minibox">
                                        <h3><span><span className="arlo_tm_counter text_white" data-from="0" data-to={totalProject} data-speed="5000"> {totalProject}</span></span></h3>
                                        <span className="text_white color_white" >Projects Completed</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner arlo_tm_minibox">
                                        <h3><span><span className="arlo_tm_counter text_white" data-from="0" data-to="999" data-speed="3000">999K+</span></span></h3>
                                        <span className="text_white color_white" >Lines of Code</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner arlo_tm_minibox">
                                        <h3><span><span className="arlo_tm_counter text_white" data-from="0" data-to={totalClient} data-speed="5000"> {totalClient} </span></span></h3>
                                        <span className="text_white color_white" > Clients</span>
                                    </div>
                                </li>
                                
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


    renderContact() {
        return  (
                   
<div className="arlo_tm_section" id="contact">
<div className="container">
<div className="arlo_tm_title_holder contact">  <h3>Contact Me</h3>
  <span>Get in touch with me</span>
</div>
</div>
<div className="arlo_tm_footer_contact_wrapper_all">
<div className="arlo_tm_contact_wrap_all">
  <div className="container">
    <div className="leftbox">
      <div className="short_info_wrap hidden-xs">
        <ul>
          <li><p><label>Address:</label><span>{this.state.additional_data.address}</span></p></li>
          <li><p><label>Email:</label><span>{this.state.additional_data.email}</span></p></li>
          <li><p><label>Phone:</label><span>{this.state.additional_data.phone}</span></p></li>
        </ul>
      </div>
    </div>
    <div className="rightbox">
      <div className="arlo_tm_contact_wrap">
        <div className="main_input_wrap">
            <div id="returnmessage"></div>
            <form onSubmit={this.handleSubmit}>
            <div className="empty_notice"><span>Please Fill Required Fields</span></div>
            <div className="wrap">
               <input type="text" id="name"  onChange={this.handleChange} name="name" placeholder="Your Name"  />
            </div>
            <div className="wrap">
               <input  name="email" id="email" type="text"  onChange={this.handleChange}  placeholder="Your Email"  />
            </div>
            <div className="wrap">
              <textarea id="messages"  name="messages"  placeholder="Your Message"  onChange={this.handleChange}></textarea>
            </div>
            <div className="arlo_tm_button">
                <button type="submit" className="btn btn-primary" id="button_submit">
                    Send Message
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>  
</div>  
</div>  

        );
    }
    render() {
        return (
                <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
                                {this.renderBanner()}
                                {this.renderAbout()}
                                {this.renderAbilities()}
                                {this.renderProject()}
                                {this.renderCountProject()}
                                {this.renderContact()}

                        
            </div>
            </div>
        );
    }
}

export default App;
