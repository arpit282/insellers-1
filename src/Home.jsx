import React from "react";
import ReactTypingEffect from "react-typing-effect";
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

                  <ReactTypingEffect
                    className="mt-3"
                    text={[
                      "CONSULTING",
                      "RESEARCHING",
                      "GROWTH STORIES",
                      "FOUNDER INSIGHTS"
                    ]}
                    speed="100"
                    eraseSpeed="150"
                    eraseDelay="1000"
                    typingDelay="50"
                    cursor="_"
                    cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                      return (
                        <h1>
                          {text.split("").map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span key={key} style={{ color: "#1A75BC" }}>
                                {char}
                              </span>
                            );
                          })}
                        </h1>
                      );
                    }}
                  />
                  <h2 className="mt-3">For more inspirational stories</h2>
                  <a
                    href=""
                    className="mt-3 btn btn-primary"
                    style={{ width: "150px", padding: "20px" }}
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
