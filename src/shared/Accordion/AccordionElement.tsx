import React, { FC, SetStateAction, useRef } from "react";
import cl from "./Accordion.module.scss"
import { TAccordionElement } from "../../components/Questions";
import ExpandIcon from "../ExpandIcon/ExpandIcon";


interface IAccordionElement{
    el : TAccordionElement,
    isOpened : boolean,
    openFunciton : (id : number) => void
    id : number
}
const AccordionElement:FC<IAccordionElement> = ({el, isOpened,openFunciton , id}) => {
  const itemRef = useRef<HTMLDivElement|null>(null)
  return (
    <div onClick={() => {
        openFunciton(id)
    }} className={cl.accordionElement}>
      <div className={cl.accordionTitle}>{el.a}
        <ExpandIcon isOpend = {isOpened} />
      </div>
      <div style={isOpened ? {
        height : itemRef.current?.scrollHeight 
      } : {height : "0px"}} className={cl.accordionDescription}>
        <div ref={itemRef} className={cl.descWrapper}>
            {el.b}
        </div>
    </div>
    </div>
  );
};

export default React.memo(AccordionElement);
