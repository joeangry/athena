import React from "react";
import { Styles, Variants } from "../../packages/BaseProps";
import "./Button.scss";

type ButtonVariants = keyof Variants;
type ButtonStyle = keyof Styles;

export interface ButtonProps {
    additionalClasses: string[] | undefined;
    style: ButtonStyle;
    size: ButtonVariants;
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "button" | "reset";
    innerRef?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {

    const { additionalClasses, onClick } = props;

    const getClassNames = (): string => {
        return ["btn", `btn-${props.size}`, additionalClasses].join(" ");
    }

    return (
        <button
            ref={props.innerRef}
            type="button"
            className={getClassNames()}
            onClick={(e) => onClick(e)}
        >
            {props.label}
        </button>
    );
};
