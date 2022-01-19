import React from "react";
import { Styles, Variants } from "../../packages/BaseProps";
import "./Spinner.scss";

export type SpinnerStyle = keyof Styles;
export type SpinnerSize = keyof Variants;

export interface ISpinnerProps {
    type: SpinnerStyle;
    text?: string;
    size?: SpinnerSize;
}

export const Spinner = (props: ISpinnerProps) => (<div className={`spinner-container ${props.type.toLowerCase()} spinner-${props.size}`}></div>);
