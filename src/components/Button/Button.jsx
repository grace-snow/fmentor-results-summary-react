import React from 'react';

function Button({ children, type }) {
  return (
    <button type={type}>{children}</button>
  )
}

export default Button;