const enroll = async (formData: FormData) => {
    // 1. Save to local Spring Boot backend database
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const transactionId = formData.get('transactionId') as string;
        const file = formData.get('screenshot') as File;
        const screenshotPath = file ? `uploads/screenshots/${file.name}` : 'no_screenshot.png';

        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        await fetch(`${apiUrl}/api/enrollments/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                transactionId,
                screenshotPath
            })
        });
    } catch (err) {
        console.error("Failed to register enrollment in backend database:", err);
    }

    // 2. Add configuration for FormSubmit email forwarding
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
