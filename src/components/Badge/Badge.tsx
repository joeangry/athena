export type BadgeType = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface IBadgeProps {
    text: string;
}

export const Badge = (props: IBadgeProps) => {
    return (<div>
        {props.text}
    </div>);
}
