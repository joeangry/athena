import React from "react";
import { Grid, GridProps } from "../components/Grid/Grid.tsx";

const Template = (args) => <Grid {...args} />;

export const GridLayout = Template.bind({});
GridLayout.args = {
    size: "md"
} as GridProps;

const defaultExport = {
    title: "Components/Grid",
    component: Grid,
};

export default defaultExport;
