import React from "react";

import { Spinner, SpinnerProps } from "../components/Spinner/Spinner";

const Template = (args: SpinnerProps) => <Spinner {...args} />;

export const PrimarySpinner = Template.bind({});
PrimarySpinner.args = {
    text: "Loading...",
    type: "Primary"
};

const defaultExport = {
    title: "Components/Spinner",
    component: Spinner
};

export default defaultExport;