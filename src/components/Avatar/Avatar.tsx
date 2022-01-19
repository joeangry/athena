import React from "react";
import { Variants } from "../../packages/BaseProps";
import { AvatarBadge } from "./AvatarBadge";
import "./Avatar.scss";


// type AvatarSize = "tiny" | "small" | "medium" | "large";
type AvatarSize = keyof Variants;

type AvatarFrame = "round" | "round-corner" | "square";

export interface AvatarProps {
    size: AvatarSize;
    imageSource: string;
    frame: AvatarFrame;
}

export const Avatar = (props: React.PropsWithChildren<AvatarProps>) => {

    const { frame, imageSource, size } = props;

    const getAvatarSize = (): string => {
        return `avatar-${[size].join(" ")}`;
    }

    const getAvatarFrame = (): string => {
        return `avatar-${frame}`;
    }

    return (<div className={getAvatarSize()}>
        <img src={imageSource} alt={"Avatar"} className={`avatar ${getAvatarFrame()} ${getAvatarSize()}`} />
        {props.children}
    </div>);
};

export { AvatarBadge };