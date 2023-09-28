import React from "react";
import "../wrapper/Wrapper.scss";

const Wrapper = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="wrapper__texts col-4">
              <i class="fa-solid fa-truck-fast"></i>
              <h4>Free Shipping Method</h4>
              <p>aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
            </div>

            <div className="wrapper__texts col-4">
            <i class="fa-solid fa-unlock"></i>
              <h4>Free Shipping Method</h4>
              <p>aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
            </div>

            <div className="wrapper__texts col-4">
            <i class="fa-solid fa-arrows-rotate"></i>
              <h4>Free Shipping Method</h4>
              <p>aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
