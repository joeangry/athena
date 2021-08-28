import React from "react";
import { Badge, IBadgeProps as BadgeProps } from "../components/Badge/Badge.tsx";

const Template = (args: BadgeProps) => (<Badge {...args} />);

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
