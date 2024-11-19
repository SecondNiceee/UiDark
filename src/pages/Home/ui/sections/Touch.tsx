import React, { useState } from 'react';
import FormInput from '../../../../shared/FormInput/FormInput';

const Touch = () => {

    return (
        <section className='touch'>
            <header>Let’s Get in Touch</header>
            <form className='touch__form' action="">
                <FormInput changeHandler={(e : string) => (console.log("312"))} name='email'  minLength='10' textValidation={''} type='email' validation = {false} value={"dsa"} placeholder='' />
            </form>
        </section>
    );
};

export default Touch;