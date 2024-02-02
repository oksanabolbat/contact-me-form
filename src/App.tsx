import ContactMeForm from "./components/ContactMeForm";

function App() {
    return (
        <div className="w-[1400px] bg-gradient-to-r from-cyan-500 to-blue-500 p-24 mx-auto rounded-lg font-sans ">
            <div className="bg-white w-[600px] py-7 mx-auto drop-shadow-md rounded-lg p-5">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Send me a message
                </h1>
                <p className="text-center leading-6">
                    Feel free to get in touch with me anything related to
                    CODINGSPACE or you can just say hi. I will get back to you
                    as soon as I can.
                </p>
                <ContactMeForm />
            </div>
        </div>
    );
}

export default App;
