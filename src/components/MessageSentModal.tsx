interface Props {
    isSuccess: boolean | null;
    show: boolean;
}
const MessageSentModal = ({ isSuccess, show }: Props) => {
    return (
        <dialog
            className="w-[400px] h-[60px] fixed bottom-0 right-0 bg-gray-400 mr-0 text-center p-4 rounded-md opacity-70 font-semibold transition-all z-10"
            open={show}
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
