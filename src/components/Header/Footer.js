import React from 'react'
// import { MdLocationOn,MdEmail } from "react-icons/fa"
import styled from "styled-components";


const Footer = () => {
  return (
   <>
   <MainFooter>
    <div id="footer-widgets" className='footer-dark footer-widgets-dark'>
        <div className='container'>
            <div className='inner row'>
                <div className='col-md-3'>
                    <div className='widget_text widget-odd widget-last widget-first widget-1 bar footer-widget footer-widget-col-1'>
                        <h4>ABOUT US</h4>
                        <div className='textwidget custom-html-widget'>
                            <div className="bar footer-widget footer-widget-col-1 foo-about">
                                <p>
                                Anil Bhargavji is a distinguished astrologer in India well-known for his accurate predictions and effective astrological remedies.
                                </p>
                                <a className='btn' href='/'>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                <div className='widget_text widget-odd widget-last widget-first widget-1 bar footer-widget footer-widget-col-2'>
                <h4>QUICK LINKS</h4>
                <div className='menu-quick-links-container'>
                    <ul id='menu-quick-links' className='menu'>
                        <li id="menu-item-3357" >
                        <a href='/' aria-current="page">
                            HOME
                        </a>
                        </li>
                        <li id='menu-item-2876' >
                        <a href='/'>
                            Best Astrologer in India
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Blog
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Disclaimer
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Privacy Policy & Terms
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Contact Us
                        </a>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                <div className='col-md-3'>
                <div className='widget_text widget-odd widget-last widget-first widget-1 bar footer-widget footer-widget-col-3'>
                <h4>QUICK LINKS</h4>
                <div className='menu-quick-links-container'>
                    <ul id='menu-quick-links' className='menu'>
                        <li id="menu-item-3357" >
                        <a href='/' aria-current="page">
                            HOME
                        </a>
                        </li>
                        <li id='menu-item-2876' >
                        <a href='/'>
                            Best Astrologer in India
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Blog
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Disclaimer
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Privacy Policy & Terms
                        </a>
                        </li>
                        <li id='menu-item'>
                        <a href='/'>
                            Contact Us
                        </a>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                <div className='col-md-3'>
                    <div className='widget_text widget-odd widget-last widget-first widget-1 bar footer-widget footer-widget-col-4'>
                    <h4>Contact Info</h4>
                        <div className='widget-contact-details contact-details-map'>
                            <div className='widget-contact-details-item'>
                            </div>
                            <div className='widget-contact-details-item'>
                            <i className='fa fa-map-marker'></i>
                            <span>surat,India</span>
                            </div>
                            <div className='widget-contact-details-item'>
                            <i className='fa fa-phone'></i>
                            <span>+91 9001136061</span>
                            </div>
                            <div className='widget-contact-details-item'>
                            <i className='fa fa-envelope'></i>
                            <span>
                                <a className='accent-hover' href='/'>contact@anilastrologer.com</a>
                            </span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </MainFooter>
   </>
  )
}



const MainFooter = styled.footer`

#footer-widgets {
  background: #151d2d;
    background-size: auto;
  background-size: cover;
  padding: 80px 0 30px;
}
#footer-widgets .bar h4 {
  font-size: 24px;
  color: #ffffff;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  border: none;
  padding: 0;
  text-transform: uppercase;
}
.foo-about p {
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
}
.widget-contact-details > div {
  color: #fff;
  font-size: 15px;
}
ul li, ol li {
  font-size: 14px;
  color: #292829;
  font-weight: 400;
  line-height: 1.5;
  padding: 0;
    padding-bottom: 0px;
  margin: 0;
  padding-bottom: 5px;
}

`;

export default Footer