import React from "react";
import "./Checkbox.scss";

interface ICheckboxProps {
    className?: string;
    checked?: boolean;
    label?: string;
    name?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: ICheckboxProps) => {
    return (<>       
        <label className="container">{props.label}
            <input type="checkbox" checked={props.checked} />
            <span className="checkmark"></span>
        </label>
    </>)
}