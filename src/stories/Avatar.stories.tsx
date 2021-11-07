import React from "react";
import { Avatar, AvatarProps } from "../components/Avatar/Avatar.tsx";

const Template = (args: AvatarProps) => <Avatar {...args} />;

const Base = {
    imageSource: "https://i.pravatar.cc/150?img=28"
}

export const RoundCorners = Template.bind({});
RoundCorners.args = {
    ...Base,
    size: "large",    
    frame: "round-corner"
};

export const Round = Template.bind({});
Round.args = {
    ...Base,
    size: "large",
    frame: "round"
};

const defaultExport = {
    title: "Components/Avatar",
    component: Avatar,
};

export default defaultExport;

