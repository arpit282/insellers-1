import React from "react";

const service = () => {
  return (
    <>
      <div className="container-fluid nav_bg mt-5 mb-5">
        <div className="row">
          <div className="col-9 mx-auto dropdown">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="card bg-dark text-white about_img">
                    <img
                      src="http://insellers.com/wp-content/uploads/2020/01/why-choose-us-1.jpg"
                      class="card-img"
                      alt="..."
                    />
                    <div class="card-img-overlay  about_jumbo">
                      <h5 class="card-title"></h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h5
                    class="card-title display-4 mt-5 font-weight-bolder text-center"
                    style={{ color: " #3498db" }}
                  >
                    Services
                  </h5>
                  <p class="card-text lead lead-1 text-center mt-5">
                    We provide a wide range of Services
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

export default service;
