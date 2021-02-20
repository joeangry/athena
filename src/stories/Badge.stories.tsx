import React from "react";
import { Badge, IBadgeProps } from "../components/Badge/Badge.tsx";

const Template = (args: IBadgeProps) => (<Badge {...args} />);

export const CountBadge = Template.bind({});
CountBadge.args = {
    text: "500",
    bgColor: "bg-secondary",
    type: "Primary"
};

const defaultExport = {
    title: "Basic components/Badge",
    component: Badge,
};

export default defaultExport;
