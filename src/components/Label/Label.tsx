import React from "react";
import "./Label.scss";

export interface ILabelProps {
    text: string;
    classes?: string;
    required?: boolean;
}

export const Label = (props: ILabelProps) => {

    const isRequired = props.required ? <span className={"required-marker"}>*</span> : <></>;
    const additionalClasses = props.classes ? ` ${props.classes}` : "";
    
    return (<label className={`label${additionalClasses}`}>{props.text}{isRequired}</label>);
}
