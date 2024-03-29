import React from "react";
import "./Progressbar.scss";

export interface IProgressbarProps {
    label: string;
    description: string;
    percentCompleted?: number;
    isIndeterminate?: boolean;
    maxProgress?: number;
}

export const ProgressBar = (props: IProgressbarProps) => {
    
    const percentCompleted = (props.maxProgress && (props.percentCompleted && props.percentCompleted > props.maxProgress)) ? props.maxProgress : props.percentCompleted;

    return (<div className={"progress"}>
        <div className={"progress-label"}>
            {props.label}
        </div>
        <div className="progress-track">
            <div className={props.isIndeterminate ? "progress-indeterminate" : "progress-track-fill"}
                role="progressbar"
                style={props.isIndeterminate ? undefined : { width: `${percentCompleted}%` }}
                aria-valuemin={0}
                aria-valuemax={props.maxProgress}
                aria-valuenow={percentCompleted}
                aria-label="Progressbar"
            ></div>
        </div>
        <div>
            {props.description}
        </div>
    </div>
    );
};