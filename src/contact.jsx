import React from "react";
import Coverlay from "./contact_overlay";
import Form from "./contact_form";
import Map from "./contact_map";
import List from "./contact_list";
const contact = () => {
  return (
    <>
      <div>
        <Coverlay />
        <div class="contact_container">
          <div class="row box">
            <div class="col-lg-9 col-sm-12">
              <div class="col">
                <h3>Request Free Consultation</h3>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <Form />
                </div>
                <div class="col-md-6">
                  <Map />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-12">
              <h3>Get In Touch</h3>
              <h5>Reach Us</h5>
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
