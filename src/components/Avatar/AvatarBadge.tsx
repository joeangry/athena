import React from "react";

export interface AvatarBadgeProps {
    borderColor: string;
    backgroundColor: string;
}

export const AvatarBadge = (props: AvatarBadgeProps) => {
    return (<div style={{ borderColor: props.borderColor, backgroundColor: props.backgroundColor }}>
        Avatar Badge
    </div>);
}
