import { useRef, MouseEvent } from "react";

interface Props {
    message: string;
    handleClose: () => void;
}
const Modal = ({ message, handleClose }: Props) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = (event: MouseEvent) => {
        if (event.target === backdropRef.current) {
            handleClose();
        }
    };

    return (
        <div
            className="z-10 w-full h-full fixed bg-gray-500 bg-opacity-80 top-0 left-0 flex items-center"
            ref={backdropRef}
            onClick={handleBackdropClick}
        >
            <dialog
                onClose={handleClose}
                className="block w-1/3 h-1/3 rounded-2xl p-16 text-center  font-sans font-bold text-lg "
            >
                <h3>{message} </h3>
                <form method="dialog">
                    <button
                        className="bg-cyan-500 rounded-md py-3 px-3 text-white text-center hover:bg-blue-500 w-2/3 mt-16"
                        onClick={handleClose}
                    >
                        OK
                    </button>
                </form>
            </dialog>
        </div>
    );
};
export default Modal;
