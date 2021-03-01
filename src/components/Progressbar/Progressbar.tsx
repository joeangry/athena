import React from "react";
import "./Progressbar.scss";

export interface IProgressbarProps {
    label: string;
    description: string;
    percentCompleted?: number;
    isIndeterminate?: boolean;
}

export const ProgressBar = (props: IProgressbarProps) => {
    const percentCompleted = props.percentCompleted;

    return (<div className="progress">
        <div className={"progress-label"}>
            {props.label}
        </div>
        <div className="progress-track">
            <div className={props.isIndeterminate ? "progress-indeterminate" : "progress-track-fill"}
                role="progressbar"
                style={props.isIndeterminate ? null : { width: percentCompleted + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentCompleted}
            ></div>
        </div>
        <div>
            {props.description}
        </div>
    </div>
    );
};