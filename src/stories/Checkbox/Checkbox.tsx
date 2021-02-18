interface IProps {
    /**
     * Class name to provide on the root element, in addition to the `ms-Checkbox` class.
     */
    className?: string;
    /**
      * Checked state. Mutually exclusive with `defaultChecked`. Use this if you control the checked state at a higher
      * level and plan to pass in the correct value based on handling `onChange` events and re-rendering.
      */
    checked?: boolean;
    
    label?: string;

    name?: string;

    disabled?: boolean;

    onChange: (event: any) => void;
}

export const Checkbox = (props: IProps) => {
    return (<>
        <input type="checkbox" name={props.name} checked={props.checked} />
        <label>
            {props.label}
        </label>f
    </>)
}