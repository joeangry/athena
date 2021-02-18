import React from "react";

import { Checkbox } from "../components/Checkbox/Checkbox.tsx";

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    checked: false
};

const defaultExport = {
    title: "Basic components/Checkbox",
    component: Checkbox,
};

export default defaultExport;
