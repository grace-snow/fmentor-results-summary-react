import React from 'react';

function Button({ children, type, className }) {

  const cssClasses = className ? className : '';

  return (
    <button type={type ? type : 'button'} className={`${cssClasses} p-4 text-white  rounded-full bg-violet-900`}>{children}</button>
  )
}

export default Button;