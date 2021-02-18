import * as React from "react";

export interface ILabelProps {
    text: string;
}
export const Label = (props: ILabelProps) => {
    return (<label>{props.text}</label>)
}