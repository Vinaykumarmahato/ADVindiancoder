const enroll = async (formData: FormData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Convert FormData to object for logging
    const data: any = {};
    formData.forEach((value, key) => { data[key] = value });
    console.log('Static enrollment received:', data);

    return { status: 200, data: { message: "Enrolled successfully!" } };
};

const EnrollmentService = {
    enroll,
};

export default EnrollmentService;
