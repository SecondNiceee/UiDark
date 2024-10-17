import React from 'react';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandIcon from '../shared/ExpandIcon/ExpandIcon';
const Questions = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className='questions'>
            <div className="container">
                <h1 className='questions-title'>
                    Frequently Asked Questions
                </h1>
                <Accordion className='question__accordion' onChange={handleChange('panel1')} expanded = {expanded === "panel1"} >
                    <AccordionSummary className='question__accordion-header' expandIcon = {<ExpandIcon />} >
                        <Typography className='question__accordion-title'>
                                How can I contact Inkyy Team?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='question__accordion-description'>
                        <Typography>
                            You can reach us through our contact form on our website or by emailing us at <span>hello@inkyy.com</span> We typically respond within 24 hours.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
};

export default Questions;