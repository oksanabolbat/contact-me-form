import { useRef } from "react";
import { useInput } from "../hooks/useInput";
import Button from "./shared/Button";
import { isEmailValid } from "../util/validation";
import Input from "./Input";
import { sendMessage } from "../sendMessage";

interface Props {
    showModal: () => void;
    handleConfirmForm: (isSuccess: boolean) => void;
}

export default function ContactMeForm({ showModal, handleConfirmForm }: Props) {
    const formRef = useRef<HTMLFormElement>(null);
    const {
        enteredValue: nameValue,
        handleChange: handleNameChange,
        handleBlur: handleNameBlur,
        isNotValid: nameIsNotValid,
        clearEnteredValue: clearNameValue,
    } = useInput({
        defaultValue: "",
        validateFn: (val: string) => val.trim().length > 3,
    });

    const {
        enteredValue: emailValue,
        handleChange: handleEmailChange,
        handleBlur: handleEmailBlur,
        isNotValid: emailIsNotValid,
        clearEnteredValue: clearEmailValue,
    } = useInput({ defaultValue: "", validateFn: isEmailValid });

    const {
        enteredValue: subjectValue,
        handleChange: handleSubjectChange,
        handleBlur: handleSubjectBlur,
        isNotValid: subjectIsNotValid,
        clearEnteredValue: clearSubjectValue,
    } = useInput({
        defaultValue: "",
        validateFn: (val: string) => val.trim().length > 3,
    });

    const {
        enteredValue: messageValue,
        handleChange: handleMessageChange,
        handleBlur: handleMessageBlur,
        isNotValid: messageIsNotValid,
        clearEnteredValue: clearMessageValue,
    } = useInput({
        defaultValue: "",
        validateFn: (val: string) => val.trim().length > 3,
    });
    const clearForm = () => {
        clearEmailValue();
        clearMessageValue();
        clearNameValue();
        clearSubjectValue();
    };

    const handleSubmitForm = async (event: React.FormEvent) => {
        event.preventDefault();
        if (
            emailIsNotValid ||
            subjectIsNotValid ||
            messageIsNotValid ||
            nameIsNotValid ||
            emailValue.length === 0 ||
            subjectValue.length === 0 ||
            messageValue.length === 0 ||
            nameValue.length === 0
        ) {
            showModal();
            return;
        } else {
            try {
                console.log("try");
                const respOk = await sendMessage({
                    name: nameValue,
                    email: emailValue,
                    subject: subjectValue,
                    message: messageValue,
                });
                if (!respOk) {
                    throw new Error("Please try later");
                } else {
                    handleConfirmForm(true);
                    //clearForm();
                }
            } catch (error) {
                //show error
                console.log(error);
                handleConfirmForm(false);
            }
        }
    };

    return (
        <form className="px-24 py-8" onSubmit={handleSubmitForm} ref={formRef}>
            <Input
                id="name"
                label="Name"
                name="name"
                handleBlur={handleNameBlur}
                handleChange={handleNameChange}
                value={nameValue}
                error={nameIsNotValid ? "Please enter valid name" : " "}
            />

            <Input
                id="email"
                label="Email address"
                name="email"
                handleBlur={handleEmailBlur}
                handleChange={handleEmailChange}
                value={emailValue}
                error={
                    emailIsNotValid ? "Please enter valid email address" : " "
                }
            />

            <Input
                id="subject"
                label="Subject"
                name="subject"
                handleBlur={handleSubjectBlur}
                handleChange={handleSubjectChange}
                value={subjectValue}
                error={subjectIsNotValid ? "Please enter subject" : " "}
            />

            <Input
                isTextarea
                id="message"
                label="Message"
                name="message"
                handleBlur={handleMessageBlur}
                handleChange={handleMessageChange}
                value={messageValue}
                error={messageIsNotValid ? "Please enter some message" : " "}
            />
            <Button>Send</Button>
        </form>
    );
}
