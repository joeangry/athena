import React from "react";
import { Alert, IAlertProps } from "../components/Alert/Alert.tsx";

const Template = (args: IAlertProps) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Primary Alert",
    type: "Primary"
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
    title: "Basic components/Alert",
    component: Alert,
};

export default defaultExport;
