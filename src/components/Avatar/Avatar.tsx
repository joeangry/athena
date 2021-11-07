import React from "react";

type AvatarSize = "small" | "large" | "default";
export interface AvatarProps {
    isLoading: boolean;
    size: AvatarSize;
}

export const Avatar = (props: AvatarProps) => {

    const { isLoading, size } = props;

    if (isLoading === true) {
        return (<div>

        </div>);
    }

    return (<div className={`avatar ${[size].join(" ")}`}></div>);
};