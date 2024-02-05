import { useRef, MouseEvent, useEffect } from "react";
import Button from "./shared/Button";

interface Props {
    message: string;
    handleClose: () => void;
}
const Modal = ({ message, handleClose }: Props) => {
    const backdropRef = useRef<HTMLDivElement>(null);
    const handleCloseRef = useRef(handleClose);
    handleCloseRef.current = handleClose;
    useEffect(() => {
        const handleEscapeClose = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                handleCloseRef.current();
            }
        };
        window.addEventListener("keydown", handleEscapeClose);
        return () => window.removeEventListener("keydown", handleEscapeClose);
    }, []);

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
                className="flex flex-col justify-center gap-10 min-w-[300px] min-h-[300px] rounded-2xl p-16 text-center  font-sans font-bold text-lg "
            >
                <h3>{message} </h3>
                <form method="dialog">
                    <Button onClick={handleClose}>OK</Button>
                </form>
            </dialog>
        </div>
    );
};
export default Modal;
