const enroll = async (formData: FormData) => {
    // Add configuration for FormSubmit
    formData.append("_subject", "New Masterclass Enrollment"); 
    formData.append("_captcha", "false"); // Disables the visual Captcha
    formData.append("_template", "table"); // Makes the email look nice

    // Send the data directly to your email using FormSubmit
    const response = await fetch("https://formsubmit.co/ajax/advindiancoderchannel@gmail.com", {
        method: "POST",
        body: formData, 
    });

    if (!response.ok) {
        throw new Error("Failed to send enrollment email");
    }

    const data = await response.json();
    console.log('Enrollment forwarded to email:', data);

    return { status: 200, data: { message: "Enrolled successfully!" } };
};

const EnrollmentService = {
    enroll,
};

export default EnrollmentService;
