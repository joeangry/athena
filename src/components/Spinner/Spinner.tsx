import React from "react";
import "./Spinner.scss";

export type SpinnerType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface ISpinnerProps {
    type: SpinnerType;
    text?: string;
}

export const Spinner = (props: ISpinnerProps) => (<div className={`spinner-container ${props.type.toLowerCase()}`}></div>)