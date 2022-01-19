import * as React from "react";
import { useState } from "react";

import "./Accordion.scss";

export interface IAccordionProps {
    title: string;
    content: React.ReactElement;
    openDefault: boolean;
}

export const Accordion = (props: IAccordionProps) => {

    const [isOpen, setIsOpen] = useState(props.openDefault);

    return (
        <div className={"accordion"}>
            <div className={`title${isOpen ? "" : " collapsed"}`} onClick={() => setIsOpen(!isOpen)}>{props.title}</div>
            {isOpen &&
                <div className={"content"}>{props.content}</div>
            }
        </div>
    );
}
