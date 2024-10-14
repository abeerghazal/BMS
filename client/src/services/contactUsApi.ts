import axios from 'axios';
import { InferContactUsModel } from '../Interfaces/contactUs';
import { contactUsURL } from '../Utilities/apiConstatnts';

const sendContactUs = (contactData: InferContactUsModel): Promise<InferContactUsModel> => axios.post(contactUsURL, {
  name: contactData.name,
  email: contactData.email,
  phone: contactData.phone,
  subject: contactData.subject,
  description: contactData.description,
});

export default sendContactUs;
