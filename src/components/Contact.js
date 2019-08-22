import React, {Component} from 'react';


export default class Nav extends Component{

    render(){
        return (
            <section className="page-section" id="contact">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h2 className="mt-0">Let's Get In Touch!</h2>
                      <hr className="divider my-4"></hr>
                      <p className="text-muted mb-5">Interested in my services, or have any questions? Shoot me an email and I'll get to you soon!</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mr-auto text-center">
                      <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                      <a className="d-block" href="mailto:piercecollazo@gmail.com">piercecollazo@gmail.com</a>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}