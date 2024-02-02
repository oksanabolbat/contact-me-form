import { useInput } from "../hooks/useInput";
import { isEmailValid } from "../util/validation";
import Input from "./Input";

export default function ContactMeForm() {
    const {
        enteredValue: emailValue,
        handleChange: handleEmailChange,
        handleBlur: handleEmailBlur,
        isNotValid: emailIsNotValid,
    } = useInput({ defaultValue: "", validateFn: isEmailValid });

    const {
        enteredValue: subjectValue,
        handleChange: handleSubjectChange,
        handleBlur: handleSubjectBlur,
        isNotValid: subjectIsNotValid,
    } = useInput({
        defaultValue: "",
        validateFn: (val: string) => val.trim().length > 3,
    });

    const {
        enteredValue: messageValue,
        handleChange: handleMessageChange,
        handleBlur: handleMessageBlur,
        isNotValid: messageIsNotValid,
    } = useInput({
        defaultValue: "",
        validateFn: (val: string) => val.trim().length > 3,
    });
    return (
        <form className="px-24 py-8">
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
            <button className="bg-cyan-500 rounded-md py-3 px-3 w-full text-white text-center hover:bg-blue-500">
                Send
            </button>
        </form>
    );
}
