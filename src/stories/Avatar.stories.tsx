import React from "react";
import { Avatar, AvatarProps, AvatarBadge } from "../components/Avatar/Avatar";
import { AvatarBadgeProps } from "../components/Avatar/AvatarBadge";

const Template = (args: AvatarProps) => <Avatar {...args} />;
const TemplateWithChildren = (args: AvatarProps, args2: AvatarBadgeProps) => <Avatar {...args}><AvatarBadge {...args2} /></Avatar>;

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

export const AvatarWithBadge = TemplateWithChildren.bind({});
AvatarWithBadge.args = {
    ...Base,
    size: "large",
    frame: "round"
}
AvatarWithBadge.args2 = {
    borderColor: "papayawhip",
    backgroundColor: "pink"
}

const defaultExport = {
    title: "Components/Avatar",
    component: Avatar,
};

export default defaultExport;

