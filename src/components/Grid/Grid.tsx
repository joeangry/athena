import * as React from "react";

export type GridSize = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export interface GridProps {
    size: GridSize;
    classNames?: string;

    children?: React.ReactChild | React.ReactChild[];
}

export const Grid = (props: GridProps) => {

    const translateSize = `grid grid-${props.size}${ props.classNames ? props.classNames : ""}`;

    return (<div className={translateSize}>
        {props.children}
    </div>);
}