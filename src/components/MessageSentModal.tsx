import { useEffect, useRef } from "react";

interface Props {
    isSuccess: boolean | null;
}
const MessageSentModal = ({ isSuccess }: Props) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        {
            const timeout = setTimeout(() => {
                modalRef.current?.close();
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, []);

    return (
        <dialog
            ref={modalRef}
            className="w-[400px] h-[60px] fixed bottom-0 right-0 bg-gray-400 mr-0 text-center p-4 rounded-md opacity-70 font-semibold transition-all"
        >
            <p className={isSuccess ? "text-green-700" : "text-red-700"}>
                {isSuccess
                    ? "Message sent!"
                    : "Something went wrong. Please try later!"}
            </p>
        </dialog>
    );
};

export default MessageSentModal;
