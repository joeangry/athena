import React from "react";
import { Alert, AlertProps } from "../components/Alert/Alert";

const Template = (args: AlertProps) => <Alert {...args} />;

export const Information = Template.bind({});
Information.args = {
    text: "Information Alert",
    type: "info"
};

export const Error = Template.bind({});
Error.args = {
    text: "Error Alert",
    type: "error"
};

const defaultExport = {
    title: "Components/Modal",
    component: Alert,
};

export default defaultExport;
