import React from "react";
import BannerImg from "../assets/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <img src={BannerImg} alt='Banner ' className='w-100' />
        </div>

        <div className='col-md-6 d-flex flex-column justify-content-center banner-desc'>
          <h2 className='banner-title'>Proudly made in Sweden</h2>
          <p className='banner-text'>
            To keep our supply chain short, we manufacture in Sweden. our
            network of passionate ateliers in Malmö and Ljungskile are committed
            to producing the finest quality garment for us.
          </p>
          <a
            href='https://www.hellomadi.com'
            target='_blank'
            rel='noreferrer'
            className='btns banner-btn'
          >
            see the entire Supply Chain →
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
