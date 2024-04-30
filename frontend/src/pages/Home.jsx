import React from 'react'
import finace from '../assets/images/finance4.png'
import Header from '../components/common/Header'


export default function Home() {
  return (
    <div>
      <Header/>
      <div className="mt-24">
        <section id="hero">
          <div className="container hero-container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-">
                <img src={finace} className="img-fluid" alt="Demo image"/>
              </div>
              <div className="col-md-8 content-box hero-content">
                <span>Your perfect bookkeeper</span>
                <h1>Maintain your finances <b>Future of Personal Financing</b></h1>
                <p>Manage accounts, perform financial forecasts, all from a single application.</p>
                <a href="#" className="btn btn-regular">Get Started</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
