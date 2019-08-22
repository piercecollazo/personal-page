import React, {Component} from 'react';


export default class Nav extends Component{

    render(){
        return (
            <section className="page-section bg-primary" id="about">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h2 className="text-white mt-0">A little about myself!</h2>
                      <hr className="divider light my-4"></hr>
                      <p className="text-white-50 mb-4">Originally a Florida man(Take that as you will), a stint in the service catapulted my life into an interesting set of circumstances; After taking off the uniform, I bounced from job to job, adapting to several rather different industries. From construction, to film, to maritime service for NYC ferry, and even as a salesman; I've always been accustomed to learning on my feet and meeting the demands of new, challenging environments. By the end of 2018, however, I new it was time to make big changes and drive for more. Always interested in computers and technology, and encouraged by family with a long history in software development, I too decided it was time to take what had started as an interest and develop it into a true job skill and career. Finishing with the Code Immersives program in the end of 2019, I've become proficient in fullstack development and am marching onward optimistically into this new career.</p>
                      <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}