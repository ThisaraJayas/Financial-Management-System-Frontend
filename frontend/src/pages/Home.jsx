import React from 'react'
import iphone from '../assets/images/iphone.png'

export default function Home() {
  return (
    <div>
        <section id="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <img src={iphone} class="img-fluid" alt="Demo image"/>
        </div>
        <div class="col-md-7 content-box hero-content">
          <span>Unlimited Data</span>
          <h1>Digital Innovation and the <b>Future of Digital Marketing</b></h1>
          <p>Boost your digital marketing campaigns and increase your conversion rates</p>
          <a href="#" class="btn btn-regular">Learn more</a>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
