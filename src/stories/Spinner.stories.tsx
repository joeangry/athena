import React from "react";

import { Spinner, ISpinnerProps } from "../components/Spinner/Spinner.tsx";

const Template = (args: ISpinnerProps) => <Spinner {...args} />;

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