import React from "react";
import "./button.scss";
import { Property } from "csstype";

interface ButtonProps {
    primary: boolean;
    backgroundColor: Property.BackgroundClip;
    size: "small" | "media" | "large";
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
    const mode = props.primary ? "storybook-button--primary" : "storybook-button--secondary";

    const { backgroundColor, onClick } = props;

    return (
        <button
            type="button"
            className={["storybook-button", `storybook-button--${props.size}`, mode].join(" ")}
            style={{ backgroundColor: backgroundColor }}
            onClick={(e) => onClick(e)}
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
