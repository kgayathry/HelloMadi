import React from "react";
import item1 from "../assets/images/jacket.png";

const Product = () => {
  return (
    <div className='container'>
      <div className='row shadow p-3 my-5 bg-body rounded'>
        <div className='product'>
          <div className='product-img text-center'>
            <img
              src={item1}
              alt='The new sweden woolfield jacket blue packshot'
              className='img-fluid'
            />
          </div>

          <div className='mx-5 my-5 product-desc'>
            <h1 className='title'>Findor Wool Field Jacket</h1>
            <p className='desc'>This product is authenticated</p>
            <p className='code'>Digital ID: ANS0010215</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
