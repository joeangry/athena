import * as React from "react";

export interface IAccordionProps {
    title: string;
}

export const Accordion = (props: IAccordionProps) => {
    return (<div>{props.title}</div>);
}
