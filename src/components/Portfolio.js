import React, {Component} from 'react';


export default class Nav extends Component{

    render(){
        return (
          <section id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                    <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt=""></img>
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
                    <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt=""></img>
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
                </div>
            </div>
          </section>
        )
    }
}