import React, {Component} from 'react';

export default class Nav extends Component{

    render(){
        return (
            <header className="masthead">
                <div className="container h-100">
                  <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                      <h1 className="text-uppercase text-white font-weight-bold">Fullstack web development and mad science</h1>
                      <hr className="divider my-4"></hr>
                 </div>
                    <div className="col-lg-8 align-self-baseline">
                      <p className="text-white-75 font-weight-light mb-5">Hello, and thank you for visiting my site! I'm Alex Collazo, a junior fullstack web developer. This is my personal site for hosting personal projects and for outreach to those interested in my services. If you're curious about some of my work, or are interested in hiring my services, please shoot me a message in my contact form!</p>
                      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                  </div>
                </div>
            </header>
        )
    }
}