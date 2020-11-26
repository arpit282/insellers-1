import React from "react";

const service_card = () => {
  return (
    <>
      <div className="service_container">
        <div class="container">
          <h1 class="serviceHeading">How can we help you?</h1>
          <div class="row">
            <div class="col-md-6 ">
              <div className="card">
                <div>
                  <img
                    class="serviceImage"
                    src="https://insellers.com/wp-content/uploads/2020/06/design-service-1.svg"
                    alt="image1"
                  />
                  <h3 class="serviceTitle">Founder Insights</h3>
                </div>
                <div>
                  <p>
                    What is someone’s inspiration behind leaving a decent job or
                    a settled life and start their own business? What value do
                    they see which others don’t? Only the founders of the
                    company’s can tell. We speak with them and try to see things
                    from their perspective.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 ">
              <div className="card">
                <div>
                  <img
                    class="serviceImage"
                    src="https://insellers.com/wp-content/uploads/2020/06/development-service-1.svg"
                    alt="image2"
                  />
                  <h3 class="serviceTitle">Consulting and Researching</h3>
                </div>
                <div>
                  <p>
                    A lot of work goes into building a business from the ground
                    up. Sometimes some things are either out of your expertise
                    or are way too time-consuming to be focused upon. That’s the
                    part where we focus and help you with insights
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 ">
              <div className="card">
                <div>
                  <img
                    class="serviceImage"
                    src="https://insellers.com/wp-content/uploads/2020/06/ecommerce-service-1.svg"
                    alt="image3"
                  />
                  <h3 class="serviceTitle">Growth Stories</h3>
                </div>
                <div>
                  <p>
                    Stories, what do stories have to do with business? Well,
                    every company has a beginning and then twists in the tale
                    that leads them to a place where they can finally make a
                    large impact as they always dreamed. We try to uncover the
                    factors and ways by which these stories came into fruition.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 ">
              <div className="card">
                <div>
                  <img
                    class="serviceImage"
                    src="https://insellers.com/wp-content/uploads/2020/06/support-service-1.svg"
                    alt="image4"
                  />
                  <h3 class="serviceTitle">Business Workshops</h3>
                </div>
                <div>
                  <p>
                    Great teams have great leaders and even greater players but
                    once in a while even greatness needs a little guidance. We
                    with our connections help companies reach out to the correct
                    guidance sources and iron out any flaws there might exist in
                    their functioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default service_card;
