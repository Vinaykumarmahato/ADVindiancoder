interface ContactData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const submitContactForm = async (data: ContactData) => {
    // 1. Save to local Spring Boot backend database
    try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        await fetch(`${apiUrl}/api/contacts/submit`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject || "General Inquiry",
                message: data.message
            })
        });
    } catch (err) {
        console.error("Failed to register contact in backend database:", err);
    }

    // 2. Forward to FormSubmit.co email proxy
    const payload = {
        name: data.name,
        email: data.email,
        message: data.message,
        _subject: data.subject || "New Contact Form Submission - ADV Indian Coder",
        _captcha: "false", // Disables the visual Captcha
        _template: "table" // Makes the email look nice
    };

    const response = await fetch("https://formsubmit.co/ajax/advindiancoderchannel@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Failed to send contact message");
    }

    const responseData = await response.json();
    console.log('Contact message forwarded to email:', responseData);

    return { status: 200, data: { message: "Message sent successfully!" } };
};

const ContactService = {
    submitContactForm,
};

export default ContactService;
