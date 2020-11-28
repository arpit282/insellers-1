import React from "react";
import ReactDOM from "react-dom";
const contact_form = () => {
  return (
    <>
      <div class="container_form">
        <div class="contact-box">
          <div class="right">
            <input type="text" class="field" placeholder="Your Name" />
            <input type="text" class="field" placeholder="Your Email" />
            <input type="text" class="field" placeholder="Phone" />
            <textarea placeholder="Message" class="field"></textarea>
            <button class="form_btn">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact_form;
