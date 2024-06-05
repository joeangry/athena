import React from "react";
import { Alert, AlertProps } from "../components/Alert/Alert";

const Template = (args: AlertProps) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Primary Alert",
    type: "Primary"
};

export const CanDismiss = Template.bind({});
CanDismiss.args = {
    text: "Primary Alert",
    type: "Primary",
    canDismiss: true
};

export const Information = Template.bind({});
Information.args = {
    text: "Information Alert",
    type: "Info"
};

export const Error = Template.bind({});
Error.args = {
    text: "Error Alert",
    type: "Danger"
};

const defaultExport = {
    title: "Components/Alert",
    component: Alert,
};

export default defaultExport;
