import React from "react";

import { Checkbox, CheckboxProps } from "../components/Checkbox/Checkbox";

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    label: "Check me out!",
    checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    checked: false
};

const defaultExport = {
    title: "Components/Checkbox",
    component: Checkbox,
};

export default defaultExport;
