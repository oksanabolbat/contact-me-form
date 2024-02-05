import { useState } from "react";
import ContactMeForm from "./components/ContactMeForm";
import Modal from "./components/Modal";
import MessageSentModal from "./components/MessageSentModal";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [isSent, setIsSent] = useState<boolean | null>(null);
    const [showSentModal, setShowSentModal] = useState(false);
    const handleConfirmWarning = () => {
        setShowModal(true);
    };
    const handleConfirmForm = (isOk: boolean) => {
        setIsSent(isOk);
        setShowSentModal(true);
    };

    if (showSentModal) {
        setTimeout(() => {
            setShowSentModal(false);
        }, 5000);
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 font-sans flex items-center">
            {showModal && (
                <Modal
                    message="Please enter valid data!"
                    handleClose={closeModal}
                />
            )}

            <MessageSentModal isSuccess={isSent} show={showSentModal} />

            {
                <div className="bg-white w-[600px]  drop-shadow-2xl rounded-lg p-5">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Send me a message
                    </h1>
                    <p className="text-center leading-6">
                        Feel free to get in touch with me anything related to
                        CODINGSPACE or you can just say hi. I will get back to
                        you as soon as I can.
                    </p>
                    <ContactMeForm
                        showModal={handleConfirmWarning}
                        handleConfirmForm={handleConfirmForm}
                    />
                </div>
            }
        </div>
    );
}

export default App;
