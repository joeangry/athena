import React from "react";
import "./Avatar.scss";

type AvatarSize = "tiny" | "small" | "medium" | "large";

type AvatarFrame = "round" | "round-corner" | "square";

export interface AvatarProps {
    size: AvatarSize;
    imageSource: string;
    frame: AvatarFrame;
}

export const Avatar = (props: AvatarProps) => {

    const { frame, imageSource, size } = props;

    const getAvatarStyle = (): string => {
        return `avatar avatar-${[size].join(" ")}`;
    }

    const getAvatarFrame = (): string => {
        return `avatar-${frame}`;
    }

    return (<div className={getAvatarStyle()}>
        <img src={imageSource} alt={"Avatar"} className={getAvatarFrame() + getAvatarStyle()} />
    </div>);
};