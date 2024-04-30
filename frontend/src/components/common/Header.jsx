import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/header.css'; 
import logo from '../../assets/images/logo.png'


export default function Header() {
  return (
    <div className='navBody'>
        
      <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon ion-md-menu"></span>
        </button>
        <img src={logo} className="img-fluid nav-logo-mobile w-10" alt="Company Logo"/>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="container">
          <img src={logo} className="img-fluid nav-logo-desktop" alt="Company Logo" width="200px"/>
            <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
              <li className="nav-item nav-custom-link">
                <a className="nav-link" href="index.html">Home <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
              </li>
              <li className="nav-item nav-custom-link">
                <a className="nav-link" href="#marketing">Features <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
              </li>
              <li className="nav-item nav-custom-link">
                <a className="nav-link" href="#testimonials">Testimonials <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
              </li>
              <li className="nav-item nav-custom-link">
                <a className="nav-link" href="#pricing">Pricing <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
              </li>
              <li className="nav-item nav-custom-link btn btn-demo-small">
                <a className="nav-link" href="#">Get Started<i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
