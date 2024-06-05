import { ColorBlindMode, WcagLevel } from "./types";

export class BaseProps {
    colorBlind: ColorBlindMode;
    ariaLevel: WcagLevel;
}

export enum Variants {
    tiny,
    small,
    medium,
    large
}

export enum Styles {
    danger = "danger",
    dark = "dark",
    info = "info",
    light = "light",
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning"
}
