import React from "react";

function CenterAllChildren({ children, outerClasses, innerClasses }) {
  return (
    <div
      className={`grid flex-1 w-full h-full place-content-center ${outerClasses ? outerClasses : ''}`}
      role='presentation'>
        {children}
    </div>
  );
}

export default CenterAllChildren;
