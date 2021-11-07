import React from "react";
import "./Badge.scss";

export type BadgeType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface IBadgeProps {
    text: string;
    type: BadgeType;
}

export const Badge = (props: IBadgeProps) => {

    const getClassNames = (): string => {
        return ["badge", `badge-${props.type.toLowerCase()}`].join(" ");
    }

    return (<div className={getClassNames()}>
        {props.text}
    </div>);
}
