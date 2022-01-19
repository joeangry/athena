import React, { useState } from "react";
import { Styles } from "../../packages/BaseProps";
import "./Alert.scss";

export type AlertType = keyof Styles;

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
    type: AlertType;
    additionalClasses?: string;
    canDismiss: boolean;
    dismissText?: string;
    onDismissClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Alert = (props: AlertProps) => {

    const [isDismissed, setDismissed] = useState(false);
    const { additionalClasses, canDismiss, dismissText, onDismissClick, text, type } = props;

    const dismissClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (onDismissClick) {
            onDismissClick(e);
        }

        setDismissed(true);
    }

    return (<div className={`alert alert-${type.toLowerCase()}${additionalClasses ? ` ${additionalClasses}` : ""}${isDismissed ? " fade" : ""}`} role="alert">
        {text}
        {canDismiss &&
            <button type="button" className="btn-close" onClick={(e) => dismissClick(e)} aria-label={dismissText ? dismissText : ""}></button>
        }
    </div>);
}