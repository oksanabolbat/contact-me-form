export const isEmailValid = (emailVal: string) => {
    const email = emailVal.trim();
    if (email.includes(" ")) {
        return false;
    }
    const atPosition = email.indexOf("@");
    const dotLastPos = email.lastIndexOf(".");
    return (
        atPosition > 1 &&
        dotLastPos > atPosition &&
        dotLastPos < email.length - 1
    );
};
