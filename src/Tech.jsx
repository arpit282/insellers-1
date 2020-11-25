import React from 'react'
import {NavLink} from 'react-router-dom'

const Tech = () => {
    return (
        <>
           <div className="container-fluid nav_bg mt-5 mb-0">
                <div className="row">
                    <div className="col-8 mx-auto ">
                    <nav class="navbar navbar-expand-lg ">
                           
                           <div class="collapse navbar-collapse blog_link" id="navbarNavAltMarkup">
                               <div class="navbar-nav">
                                   <NavLink exact  activeClassName='active_class' class="nav-link font-weight-bolder active" to="/Blog">BUSINESS /</NavLink>
                                   <NavLink exact  activeClassName='active_class' class="nav-link font-weight-bolder" to="/Tech">TECH / </NavLink>
                                   <NavLink exact  activeClassName='active_class' class="nav-link font-weight-bolder" to="/Interview">INTERVIEWS</NavLink>
                               </div>
                           </div>
                       </nav>
              
                        <h1>No Post Yet</h1>
                    </div>
                </div>
            </div>                                        
        </>
    )
}

export default Tech
