import React from 'react'
import Button from '@material-ui/core/Button';

const Jumbotron = () => {
    return (
        <>
            <div class="container mb-5 mt-3">
                <div class="row">
                    <div class="col-10 mx-auto">
                    <div class="jumbotron jumbotron-fluid contact_us">
                        <div class="container">
                            <div className="row">
                                <div className="col">
                                    <h2 class="display-6" style={{fontWeight:'800'}}>Would you like to get featured?</h2>
                                </div>

                                <div className="col-3">
                                    <Button variant="contained" className='contact' style={{padding:'15px'}} color="primary">
                                        Contact Us
                        </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               </div>     
        </>
    )
}

export default Jumbotron
