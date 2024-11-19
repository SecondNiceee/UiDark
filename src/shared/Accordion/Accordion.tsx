import  { FC, useCallback, useState } from 'react';
import { TAccordionList } from '../../pages/Home/ui/sections/Questions';
import cl from "./Accordion.module.scss"
import AccordionElement from './AccordionElement';

interface IAccordionProps{
    accordions : TAccordionList,
    className? : string
}

const Accordion:FC<IAccordionProps> = ({accordions, className = ""}) => {
    const [openId, setOpenId] = useState<null|number>(null)

    const openFunction = useCallback((id:number) => {
        setOpenId((value) => (id === value ? null : id))
    } , [])
    return (
        <div className={[cl.container, className].join(' ')}>
            {accordions.map( (e,i) => {
                return <AccordionElement openFunciton={openFunction} id = {i} isOpened = {i === openId} key={i} el={e} />
            } )}
        </div>
    );
};

export default Accordion;