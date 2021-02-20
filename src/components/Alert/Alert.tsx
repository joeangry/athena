import React, { useState } from "react";
import "./Alert.scss";

export type AlertType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface IAlertProps {
    text: string;
    type: AlertType;
    additionalClasses?: string;
    canDismiss: boolean;
    dismissText?: string;
    onDismissClick?: (e: any) => void;
}

export const Alert = (props: IAlertProps) => {

    const [isDismissed, setDismissed] = useState(false);

    const dismissClick = (e: any) => {

        if (props.onDismissClick) {
            props.onDismissClick(e);
        }

        if (isDismissed)
            setDismissed(false);
        else
            setDismissed(true);
    }

    return (<div className={`alert alert-${props.type.toLowerCase()}${props.additionalClasses ? ` ${props.additionalClasses}` : ""}${isDismissed ? " fade" : ""}`} role="alert">
        {props.text} - State {isDismissed.toString()}
        {props.canDismiss &&
            <button type="button" className="btn-close" onClick={(e) => dismissClick(e)} aria-label={props.dismissText ? props.dismissText : ""}></button>
        }
    </div>);
}