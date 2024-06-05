import React from "react";
import "./Checkbox.scss";

export interface CheckboxProps {
    className?: string;
    checked?: boolean;
    label?: string;
    name?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
    return (<>       
        <label className="container">{props.label}
            <input type="checkbox" checked={props.checked} />
            <span className="checkmark"></span>
        </label>
    </>)
}