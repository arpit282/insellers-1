import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="main-footer footer">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-3 col-sm-6">
                            <h3>About Us</h3>
                            <p>We share your business story with the world and help our clients optimize their sales and grow their revenues</p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>Company</h3>
                            <ul className='list-unstyled'>
                                <li className='mt-3 links'> <NavLink to='/'   style={{color:'#fff'}}> Home</NavLink>  </li>
                                <li className='mt-3 links'> <NavLink to='/About' style={{color:'#fff'}}>About</NavLink>  </li>
                                <li className='mt-3 links'> <NavLink to='/Services' style={{color:'#fff'}}>Services</NavLink> </li>
                                <li className='mt-3 links'> <NavLink to='/' style={{color:'#fff'}}>Contact</NavLink>  </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>Get In Touch</h3>
                            <ul className='list-unstyled'>
                                <li className='mt-3'> <PlaceIcon /> Barkat Nagar,Jaipur </li>
                                <li className='mt-3'> <EmailIcon /> core@insellers.com </li>
                                <li className='mt-3'> <PhoneInTalkIcon /> 9660834123 </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="row">
                                <div className="col">
                            <img style={{ width: '150px', height: '150px' }} src="https://insellers.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-30-at-1.25.42-PM.jpeg" alt="" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col icons">
                                 <NavLink to='' className='mr-4' style={{color:'#fff'}}> <FontAwesomeIcon icon ={faFacebook} size='2x'/></NavLink>
                                 <NavLink to='' className='mr-4' style={{color:'#fff'}}> <FontAwesomeIcon icon ={faInstagram} size='2x'/></NavLink>
                                 <NavLink to='' className='mr-4' style={{color:'#fff'}}> <FontAwesomeIcon icon ={faLinkedin} size='2x'/></NavLink>
         
                                </div>
                                </div>  
                            
                            
                        </div>
                    </div>
                    <div className="footer-bottom mt-5">
                        <p className="text-xs-center line ml-5">
                            Copyright © 2020 Insellers | Powered by Insellers
                   </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
