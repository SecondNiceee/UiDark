import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';


const BaseProvider = ({children} : {children:ReactNode}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default BaseProvider;