import React from "react";
import { Alert, AlertProps } from "../components/Alert/Alert";

const Template = (args: AlertProps) => <Alert {...args} />;

export const Information = Template.bind({});
Information.args = {
    text: "Information Alert",
    type: "info2"
};

export const Error = Template.bind({});
Error.args = {

    text: "Error Alert",
    type: "error2"
};

const defaultExport = {
    title: "Components/Card",
    component: Alert,
};

export default defaultExport;
