import React from "react";

import { Button, ButtonProps } from "../components/Button/Button";

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    label: "Primary Large",
    size: "large",
    primary: true
}

const defaultExport = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export default defaultExport;
