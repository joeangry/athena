import * as React from "react";

export interface ILabelProps {
    text: string;
    classes?: string
}

export const Label = (props: ILabelProps) => {
    return (<label className={props.classes}>{props.text}</label>)
}
