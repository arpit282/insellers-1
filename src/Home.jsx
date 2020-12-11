import React from "react";

import Post from "./Post";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center mt-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="row nav_bg">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex flex-column justify-content-center home_text">
                  <h2>
                    Telling your stories to the world and helping you to build
                    some{" "}
                  </h2>
                  <h1 className="my-3 brand-name">CONSULTING</h1>
                  <h2 className="mt-3">For more inspirational stories</h2>
                  <a
                    href=""
                    className="mt-3 btn btn-primary"
                    style={{ width: "200px", padding: "10px 40px" }}
                  >
                    Subscribe Here
                  </a>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 mt-5 home_img">
                  <img
                    src="https://insellers.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-27-at-00.02.26-1.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Post />
    </>
  );
};

export default Home;
