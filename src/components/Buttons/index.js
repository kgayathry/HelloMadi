import React from "react";
import Button from "./Button";

const Buttons = () => {
  return (
    <div className='row mt-4 mt-md-5'>
      <div className='d-flex justify-content-between flex-wrap'>
        <Button href='/' btnText='Warranty Information' />
        <Button href='/' btnText='Caring For your Garment' />
        <Button href='/' btnText='Repair' />
        <Button href='/' btnText='Sell' />
        <Button href='/' btnText='Upcycle' />
      </div>
    </div>
  );
};

export default Buttons;
