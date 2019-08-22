import React, {Component} from 'react';
import Axolotl1 from '../img/axolotl-1.jpg'
import Axolotl2 from '../img/axolotl-2.jpg'
import Axolotl3 from '../img/axolotl-3.jpg'

export default class Nav extends Component{

    render(){
        return (
          <section id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                    <img className="img-fluid" src={Axolotl1} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                    <img className="img-fluid" src={Axolotl2} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Placeholder Project 2
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                    <img className="img-fluid" src={Axolotl3} alt=""></img>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Placeholder Project 3
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