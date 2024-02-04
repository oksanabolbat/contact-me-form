interface RequestData {
    name: string;
    subject: string;
    message: string;
    email: string;
}

const apiKey = "d67c5988-d614-4edd-a8f0-f6cc2707817e";

export async function sendMessage(reqData: RequestData) {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",

        body: JSON.stringify({ ...reqData, access_key: apiKey }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.ok;
}
