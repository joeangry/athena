import React from "react";

export interface ILabelProps {
    text: string;
    classes: string
}

export const Label = (props: ILabelProps) => {
    return (<label>{props.text}</label>);
}
