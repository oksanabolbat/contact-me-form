import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
    return (
        <button
            className="bg-cyan-500 rounded-md py-3 px-3 w-full text-white text-center hover:bg-blue-500"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
