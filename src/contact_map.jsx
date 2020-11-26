import React from "react";

const contact_map = () => {
  return (
    <>
      <div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="300"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Plot%20no%20141%2C%20Gali%20No%206%2C%20Sidhant%20Complex%2C%20Barkat%20Nagar%2C%20Tonk%20Phatak%2C%20Jaipur&t=&z=11&ie=UTF8&iwloc=&output=embed"
              alt="map"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://embedgooglemap.net/mapv2/"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact_map;
