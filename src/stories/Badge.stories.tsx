import React from "react";
import { Badge, IBadgeProps as BadgeProps } from "../components/Badge/Badge";

const Template = (args: BadgeProps) => (<Badge {...args} />);

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
    text: "500",
    type: "Primary"
};
export const SecondaryBadge = Template.bind({});
SecondaryBadge.args = {
    text: "100%",
    type: "Secondary"
};

export  const Success = Template.bind({});
Success.args = {
    text: "Success",
    type: "Success"
};

export const Danger = Template.bind({});
Danger.args = {
    text: "Danger!",
    type: "Danger"
};

export const Warning = Template.bind({});
Warning.args = {
    text: "Warning!",
    type: "Warning"
};

export const Info = Template.bind({});
Info.args = {
    text: "Information!",
    type: "Info"
};

const defaultExport = {
    title: "Components/Badge",
    component: Badge,
};


export default defaultExport;
