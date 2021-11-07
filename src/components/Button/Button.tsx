import React from "react";
import "./button.scss";

interface ButtonProps {
    primary: boolean;
    backgroundColor: string;
    size: "small" | "medium" | "large";
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "button" | "reset";
    innerRef?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
    const mode = props.primary ? "button-primary" : "button-secondary";

    const { backgroundColor, onClick } = props;

    const getClassNames = (): string => {
        return ["btn", `btn-${props.size}`, mode].join(" ");
    }

    return (
        <button
            ref={props.innerRef}
            type="button"
            className={getClassNames()}
            style={{ backgroundColor: backgroundColor }}
            onClick={(e) => onClick(e)}
        >
            {props.label}
        </button>
    );
};

// Button.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     size: "medium",
//     onClick: undefined,
// };
