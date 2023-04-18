import React from "react";
import Button from "../Button";

function ButtonPrimary({ children, type, className }) {
  // const cssClasses = ;

  return (
    <Button
      type={type ? type : "button"}
      className={`relative before:opacity-0 before:absolute hover:before:opacity-100 hover:before:inset-0 before:rounded-full before:z-0 before:bg-gradient-to-b before:from-violet-400 before:via-violet-500 before:to-violet-600 before:transition-all before:ease-out before:duration-500  ${
        className ? className : ""
      }`}>
      <span className='relative z-10'>{children}</span>
    </Button>
  );
}

export default ButtonPrimary;
