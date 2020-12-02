import React from "react";
import RightContainerForm from "./right_container_form";
import LeftContainerForm from "./left_container_form";

const account = () => {
  return (
    <>
      <div className="row signContainer">
        <div className="col-md-6">
          <LeftContainerForm />
        </div>
        <div className="col-md-6">
          <RightContainerForm />
        </div>
      </div>
    </>
  );
};

export default account;
