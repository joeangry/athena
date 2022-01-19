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
    danger,
    dark,    
    info,
    light,
    primary,
    secondary,
    success,    
    warning        
}
