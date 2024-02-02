interface Props {
    name: string;
    id: string;
    label: string;
    value: string;
    handleBlur: (val: string) => void;
    handleChange: (val: string) => void;
    isTextarea?: boolean;
    error?: string;
    props?: { [key: string]: string };
}

export default function Input({
    name,
    label,
    id,
    value,
    handleChange,
    handleBlur,
    isTextarea,
    error,
    ...props
}: Props) {
    return (
        <>
            {isTextarea ? (
                <textarea
                    name={name}
                    id={id}
                    cols={30}
                    rows={10}
                    value={value}
                    placeholder={label}
                    {...props}
                    onChange={(event) => handleChange(event.target.value)}
                    onBlur={(event) => handleBlur(event.target.value)}
                    className="w-full border border-slate-200 rounded-md py-3 px-3 placeholder:text-gray-400   text-blue-500 focus:ring-0 focus:outline-none focus:border-blue-600"
                ></textarea>
            ) : (
                <input
                    name={name}
                    id={id}
                    value={value}
                    type="text"
                    placeholder={label}
                    {...props}
                    onChange={(event) => handleChange(event.target.value)}
                    onBlur={(event) => handleBlur(event.target.value)}
                    className="w-full border border-slate-200 rounded-md py-3 px-3 placeholder:text-gray-400   text-blue-500 focus:ring-0 focus:outline-none focus:border-blue-600"
                />
            )}
            <div className="text-red-400 h-7">
                <p>{error || " "} </p>
            </div>
        </>
    );
}
