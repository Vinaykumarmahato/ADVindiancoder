interface ContactData {
    name: string;
    email: string;
    message: string;
}

const submitContactForm = async (data: ContactData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('Static submission received:', data);
    return { status: 200, data: { message: "Message sent successfully!" } };
};

const ContactService = {
    submitContactForm,
};

export default ContactService;
