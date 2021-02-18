import React from "react";
import "./Alert.scss";

export type AlertType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface IAlertProps {
    text: string;
    type: AlertType;
    additionalClasses?: string;
    canDismiss: boolean;
    dismissText?: string;
}

export const Alert = (props: IAlertProps) => {
    return (<div className={`alert alert-${props.type}${props.additionalClasses ? ` ${props.additionalClasses}` : ""}`} role="alert">
    return (<div className={`alert alert-${props.type.toLowerCase()}${props.additionalClasses ? ` ${props.additionalClasses}` : ""}`} role="alert">
        {props.text}
        }
      </div>);
}