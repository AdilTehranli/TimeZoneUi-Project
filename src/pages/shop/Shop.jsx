import React from "react";
import Slider from "../../components/slider/Slider";
import '../shop/Shop.scss';
import Products from "../../components/products/Products";
import Wrapper from "../../components/wrapper/Wrapper";
const Shop = () => {
  return (
    <div>
      <Slider title="Watch Shop" />
      <div className="container">

<div className="sort">

<div className="row">

      <div className="sort__orders col-10 ">
        <ul className="sort__orders__ul d-flex">
          <li>NewestArrivals</li>
          <li>Price High To Low</li>
          <li>Most Populer</li>
        </ul>
      </div>
        <div className="sort__select col-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>40 per page</option>
            <option value="1">50 per page</option>
            <option value="2">60 per page</option>
            <option value="3">70 per page</option>
          </select>
        </div>

</div>
</div>
<Products/>
<Wrapper/>
      </div>
     
    </div>
  );
};

export default Shop;
