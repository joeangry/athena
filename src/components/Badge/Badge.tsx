import React from "react";
import "./Badge.scss";

export type BadgeType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface IBadgeProps {
    text: string;
    bgColor?: string;
}

export const Badge = (props: IBadgeProps) => {
    return (<div className={`badge ${props.bgColor}`}>
        {props.text}
    </div>);
}
