import React from "react";
import { IAccordionProps, Accordion } from "./Accordion.tsx";

const Template = (args: IAccordionProps) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Accordion",
};

const defaultExport = {
    title: "Basic components/Accordion",
    component: Accordion,
    argTypes: {
    },
};

export default defaultExport;
