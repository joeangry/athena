import React from "react";

import { ProgressBar, IProgressbarProps } from "../components/Progressbar/Progressbar.tsx";

const Template = (args: IProgressbarProps) => <ProgressBar {...args} />;

export const BasicProgressbar = Template.bind({});
BasicProgressbar.args = {
    label: "Example title",
    description: "Example description",
    percentCompleted: 70
};


const defaultExport = {
    title: "Basic Components/Progressbar",
    component: ProgressBar
};


export default defaultExport;