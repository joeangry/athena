import React from "react";

import { Page } from "../components/Page/Page.tsx";
import * as HeaderStories from "./Header.stories.tsx";

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
const defaultExport = {
    title: "Example/Page",
    component: Page,
};

export default defaultExport;