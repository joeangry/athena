import React from "react";
import "./Spinner.scss";

export type SpinnerType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export type SpinnerSize = "Small" | "Medium" | "Large";

export interface ISpinnerProps {
    type: SpinnerType;
    text?: string;
    size?: SpinnerSize;
}

export const Spinner = (props: ISpinnerProps) => (<div className={`spinner-container ${props.type.toLowerCase()} spinner-${props.size}`}></div>);
