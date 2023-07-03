import React from "react";

const Button = ({ href, btnText }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='btns information-btn my-2 text-center'
    >
      {btnText}
    </a>
  );
};

export default Button;
