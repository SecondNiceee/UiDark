import React from 'react';
import Accordion from '../../../../shared/Accordion/Accordion';



export type TAccordionElement = {
    a : React.ReactNode,
    b : React.ReactNode
}
export type TAccordionList = TAccordionElement[]

const accordionList:TAccordionList = [
    {
        a : <p className='accordionTitle'> How can I contact Inkyy Team?</p>,
        b : <p className='accordionDescription'>You can reach us through our contact form on our website or by emailing us at <span>hello@inkyy.com</span> We typically respond within 24 hours.</p>
    },
    {
        a : <p className='accordionTitle'>What services do you offer?</p>,
        b : <p className='accordionDescription'>There's some text here about the second accordion. </p>
    },
    {
        a : <p className='accordionTitle'>Do you provide website maintenance services?</p>,
        b : <p className='accordionDescription'>There's some text here about the third accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id laborum tempore blanditiis voluptates recusandae, minus quam repudiandae itaque dolore quae commodi voluptas, assumenda suscipit possimus voluptatibus corrupti deserunt voluptate.</p>
    },
    {
        a : <p className='accordionTitle'>How long does it take to design and develop a website?</p>,
        b : <p className='accordionDescription'>There's some text here about the fourth accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id laborum tempore blanditiis voluptates recusandae, minus quam repudiandae itaque dolore quae commodi voluptas, assumenda suscipit possimus voluptatibus corrupti deserunt voluptate.</p>
    },
    {
        a : <p className='accordionTitle'>Do you require a deposit for projects?</p>,
        b : <p className='accordionDescription'>There's some text here about the five accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id laborum tempore blanditiis voluptates recusandae, minus quam repudiandae itaque dolore quae commodi voluptas, assumenda suscipit possimus voluptatibus corrupti deserunt voluptate.</p>
    }
]
const Questions = () => {

    return (
        <section className='questions'>
            <div className="container">
                <h1 className='questions-title'>
                    Frequently Asked Questions
                </h1>
                <Accordion className='question__accordion' accordions={accordionList} />
            </div>
            <div className="line"></div>
        </section>
    );
};

export default Questions;