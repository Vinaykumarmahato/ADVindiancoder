import axios from 'axios';

const API_URL = 'http://localhost:8080/api/enroll';

const enroll = (formData: FormData) => {
    return axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const EnrollmentService = {
    enroll,
};

export default EnrollmentService;
