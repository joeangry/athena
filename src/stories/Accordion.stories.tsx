import React from "react";
import { IAccordionProps, Accordion } from "../components/Accordion/Accordion.tsx";

const Template = (args: IAccordionProps) => <Accordion {...args} />;

export const Default = Template.bind({});

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
