import React, {Component} from 'react';
import github from '../img/github.jpg'
import linkedin from '../img/linkedin.jpg'
import ISS from '../img/ISS.jpg'

export default class Nav extends Component{

    render(){
        return (
          <section id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://github.com/piercecollazo">
                    <img className="img-fluid" src={github} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Portfolio
                      </div>
                      <div className="project-name">
                        Check out my github!
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://www.linkedin.com/in/piercecollazo/">
                    <img className="img-fluid" src={linkedin} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        History
                      </div>
                      <div className="project-name">
                        Connect with me on Linkedin!
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                    <img className="img-fluid" src={ISS} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Latest project
                      </div>
                      <div className="project-name">
                        ISS Intercept
                      </div>
                    </div>
                  </a>
                </div>

                </div>
            </div>
          </section>
        )
    }
}