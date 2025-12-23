const path = require("path");

module.exports = {
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules.push(path.resolve(__dirname, '../src'));

        return config;
    },
    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },
    "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": [
        "@storybook/addon-a11y",
        "@storybook/addon-links",
        "@storybook/preset-create-react-app",
        "@storybook/addon-docs"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    docs: {},
    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
}