import React, { FC, SetStateAction } from 'react';
import cl from "./FormInputModule.scss";


interface IFormInputProps{
    className? : string,
    value : string,
    changeHandler : (e : string) => void
    type : string,
    minLength : string,
    validation : boolean,
    textValidation : string,
    placeholder : string,
    name : string
}
const FormInput:FC<IFormInputProps> = ({name, type = "text", minLength, validation , placeholder, textValidation, value, changeHandler, className = ""}) => {
    return (
        <div className={[cl.container, className].join(' ')}>
            {validation ? <p className={cl.errorText}>{textValidation}</p> : <p>{name}</p>}
            <input min={minLength} type={type} name={name} value={value} onChange={(e) => changeHandler(e.target.value)}   />
        </div>
    );
};

export default React.memo(FormInput);