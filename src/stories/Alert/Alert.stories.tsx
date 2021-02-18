import React from "react";
import { Alert, IAlertProps } from "./Alert.tsx";

const Template = (args: IAlertProps) => <Alert {...args} />;

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
    title: "Basic components/Alert",
    component: Alert,
};

export default defaultExport;
