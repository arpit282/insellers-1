import React from 'react'

const Jumb_about = () => {
    return (
        <>
            <div class="card bg-dark text-white card_abt">
                <img src="https://insellers.com/wp-content/uploads/2020/01/about-bg-img-1.jpg" class="card-img" alt="..." />
                <div class="card-img-overlay about_jumbo">
                    <h5 class="card-title display-4 mt-5 font-weight-bolder text-center">About Us</h5>
                    <p class="card-text text-center mt-5" >We share your business story with the world and help our clients optimize their sales and grow their revenues</p>

                </div>
            </div>


            <div className="container-fluid nav_bg jumbo_card">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div class="card-deck">
                            <div class="card card_shadow">
                                <div class="card-body mt-3">
                                <div className="dash mb-2"></div>
                                    <h5 class="card-title font-weight-bolder jumbo_text">Who Are We</h5>
                                    <p class="card-text">A team of MBAs, Engineers, CAs, LLBs, we are dreamers much like yourself that are trying to leave a mark in this world</p>
                                </div>
                            </div>
                            <div class="card card_shadow">
                                <div class="card-body mt-3">
                                <div className="dash mb-2"></div>
                                    <h5 class="card-title font-weight-bolder jumbo_text">Our Mission</h5>
                                    <p class="card-text">Our Mission is to help SMEs and startups take their business to the next level through a sustained sales and revenue growth</p>
                                </div>
                            </div>
                            <div class="card card_shadow">
                                <div class="card-body mt-3">
                                <div className="dash mb-2"></div>
                                    <h5 class="card-title font-weight-bolder jumbo_text">What We Do </h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumb_about
