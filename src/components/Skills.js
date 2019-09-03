import React, {Component} from 'react';
import nodeImg from '../img/nodejs.png'
import reactImg from '../img/React-icon.svg'
import mongoImg from '../img/mongodb.png'
import awsImg from '../img/aws.png'

export default class Nav extends Component{
    render(){
        return(
            <section class="page-section" id="services">
    <div class="container">
      <h2 class="text-center mt-0">Part of the arsenal</h2>
      <hr class="divider my-4"></hr>
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class='skill-image' src={nodeImg} alt=""></img>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class='skill-image' src={reactImg} alt=""></img>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class='skill-image' src={mongoImg} alt=""></img>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class='skill-image' src={awsImg} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  </section>
        )
    }
}