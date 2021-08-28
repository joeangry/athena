import React from "react";

import { Label, ILabelProps } from "../components/Label/Label.tsx";

const Template = (args: ILabelProps) => <Label {...args} />;

export const BasicLabel = Template.bind({});
BasicLabel.args = {
    text: "Hello World",
    classes: "test"
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
    text: "I am a required field",
    required: true
}


const defaultExport = {
    title: "Components/Label",
    component: Label
};

export default defaultExport;