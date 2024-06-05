import React from "react";
import { Styles, Variants } from "../../packages/BaseProps";
import "./Spinner.scss";

export type SpinnerStyle = `${Styles}`;
export type SpinnerSize = `${Variants}`;

export type SpinnerProps = {
    type: SpinnerStyle;
    text?: string;
    size?: SpinnerSize;
}

export const Spinner = (props: SpinnerProps) => (<div className={`spinner-container ${props.type.toLowerCase()} spinner-${props.size}`}></div>);
