interface ContactData {
    name: string;
    email: string;
    message: string;
}

const submitContactForm = async (data: ContactData) => {
    // Add configuration for FormSubmit
    const payload = {
        ...data,
        _subject: "New Contact Form Submission - ADV Indian Coder",
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
