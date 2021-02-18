import React from "react";
import "./button.scss";
import { Property } from "csstype";

interface IButtonProps {
    primary: boolean;
    backgroundColor: Property.BackgroundClip;
    size: "small" | "media" | "large";
    label: string;
    onClick: (e: any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: IButtonProps) => {
    const mode = props.primary ? "storybook-button--primary" : "storybook-button--secondary";
    return (
        <button
            type="button"
            className={["storybook-button", `storybook-button--${props.size}`, mode].join(" ")}
            style={ { backgroundColor: props.backgroundColor }}
            onClick={(e) => props.onClick(e)}
            {...props}
        >
            {props.label}
        </button>
    );
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
};
