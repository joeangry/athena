import React from "react";

import { Header, IHeaderProps } from "../components/Header/Header.tsx";

const Template = (args: IHeaderProps) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

const defaultExport = {
    title: "Example/Header",
    component: Header,
};

export default defaultExport;