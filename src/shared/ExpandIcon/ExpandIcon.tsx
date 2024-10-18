import React from "react";
import cl from "./ExpandIcon.module.scss";

interface IExpandIcon{
    isOpend : boolean
}
const ExpandIcon = ({isOpend}:IExpandIcon) => {
  return (
    <div className={cl.container}>
      <svg
        width="16"
        height="2"
        viewBox="0 0 16 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H8H15"
          stroke="#252432"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>      
      <svg 
        className={isOpend ? cl.opened : ""}
        width="16"
        height="2"
        viewBox="0 0 16 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H8H15"
          stroke="#252432"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default React.memo(ExpandIcon);
