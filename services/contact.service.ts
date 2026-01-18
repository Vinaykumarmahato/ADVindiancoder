import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contact';

interface ContactData {
    name: string;
    email: string;
    message: string;
}

const submitContactForm = (data: ContactData) => {
    return axios.post(API_URL, data);
};

const ContactService = {
    submitContactForm,
};

export default ContactService;
