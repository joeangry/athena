import React from "react";
import "./Alert.scss";

export type alertType = "primary" | "light" | "info" | "error" | "warn";

export interface IAlertProps {
    text: string;
    type: alertType;
    additionalClasses?: string;
}

export const Alert = (props: IAlertProps) => {
    return (<div className={`alert alert-${props.type}${props.additionalClasses ? ` ${props.additionalClasses}` : ""}`} role="alert">
        {props.text}
      </div>);
}