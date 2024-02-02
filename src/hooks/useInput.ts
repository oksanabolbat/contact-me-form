import { useState } from "react";

interface Props {
    defaultValue: string;
    validateFn: (value: string) => boolean;
}

export const useInput = ({ defaultValue, validateFn }: Props) => {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdited, setDidEdited] = useState(false);

    const handleChange = (val: string) => {
        setEnteredValue(val);
        setDidEdited(false);
    };
    const handleBlur = () => {
        setDidEdited(true);
    };

    const isNotValid = didEdited && !validateFn(enteredValue);
    return { enteredValue, handleChange, handleBlur, isNotValid };
};
