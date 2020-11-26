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
        <div>
          <div class="row">
            <div class="col-9">
              <div class="col">
                <h1>Request Free Consultation</h1>
              </div>
              <div class="row">
                <div class="col-6">
                  <Form />
                </div>
                <div class="col-6">
                  <Map />
                </div>
              </div>
            </div>
            <div class="col-3">
              <h1>Get In Touch</h1>
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
