import React from "react";
import { IAccordionProps, Accordion } from "../components/Accordion/Accordion";

const Template = (args: IAccordionProps) => <Accordion {...args} />;

export const Default = Template.bind({});

export const OpenAccordion = Template.bind({});
OpenAccordion.args = {
    title: "Accordion",
    content: <div>hello world!</div>
}

Default.args = {
    title: "Accordion",
};

const defaultExport = {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: {
    },
};

export default defaultExport;
